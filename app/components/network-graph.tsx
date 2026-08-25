"use client";

import { Component, type ReactNode, useMemo, useRef, useSyncExternalStore } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const NODE_COUNT = 18;
const LINKS_PER_NODE = 2;
const ACCENT = "#1a1818";

function buildGraph() {
  const nodes = Array.from(
    { length: NODE_COUNT },
    () =>
      new THREE.Vector3(
        (Math.random() - 0.5) * 7.5,
        (Math.random() - 0.5) * 4.6,
        (Math.random() - 0.5) * 3.2,
      ),
  );

  const seen = new Set<string>();
  const edges: [THREE.Vector3, THREE.Vector3][] = [];
  nodes.forEach((a, i) => {
    const nearest = nodes
      .map((b, j) => ({ j, d: i === j ? Infinity : a.distanceTo(b) }))
      .sort((x, y) => x.d - y.d)
      .slice(0, LINKS_PER_NODE);
    nearest.forEach(({ j }) => {
      const key = [i, j].sort((x, y) => x - y).join("-");
      if (seen.has(key)) return;
      seen.add(key);
      edges.push([a, nodes[j]]);
    });
  });

  return { nodes, edges };
}

function Graph({ reduceMotion }: { reduceMotion: boolean }) {
  const { nodes, edges } = useMemo(() => buildGraph(), []);
  const group = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (!group.current) return;
    if (!reduceMotion) {
      group.current.rotation.y += delta * 0.045;
    }
    const targetTilt = reduceMotion ? 0 : state.pointer.y * 0.15;
    group.current.rotation.x += (targetTilt - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      {edges.map(([a, b], i) => (
        <Line key={i} points={[a, b]} color={ACCENT} transparent opacity={0.16} lineWidth={1} />
      ))}
      {nodes.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.045, 12, 12]} />
          <meshBasicMaterial color={ACCENT} transparent opacity={0.85} />
        </mesh>
      ))}
    </group>
  );
}

class GraphBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

function subscribeToMount() {
  return () => {};
}

function subscribeToReducedMotion(callback: () => void) {
  const query = window.matchMedia("(prefers-reduced-motion: reduce)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

export function NetworkGraph() {
  const mounted = useSyncExternalStore(
    subscribeToMount,
    () => true,
    () => false,
  );
  const reduceMotion = useSyncExternalStore(
    subscribeToReducedMotion,
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );

  if (!mounted) return null;

  return (
    <div className="network-graph" aria-hidden="true">
      <GraphBoundary>
        <Canvas camera={{ position: [0, 0, 7], fov: 50 }} gl={{ alpha: true, antialias: true }}>
          <Graph reduceMotion={reduceMotion} />
        </Canvas>
      </GraphBoundary>
    </div>
  );
}
