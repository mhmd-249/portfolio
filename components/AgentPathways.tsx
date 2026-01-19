'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';

// Tree node structure for the visualization
interface TreeNode {
  x: number;
  y: number;
  children: number[]; // indices of child nodes
}

// Define the tree structure (normalized coordinates 0-1)
const nodes: TreeNode[] = [
  // Root (top)
  { x: 0.5, y: 0.08, children: [1, 2, 3] },
  // Level 1
  { x: 0.2, y: 0.28, children: [4, 5] },
  { x: 0.5, y: 0.28, children: [6] },
  { x: 0.8, y: 0.28, children: [7, 8] },
  // Level 2
  { x: 0.1, y: 0.52, children: [9] },
  { x: 0.28, y: 0.52, children: [10] },
  { x: 0.5, y: 0.52, children: [11, 12] },
  { x: 0.72, y: 0.52, children: [13] },
  { x: 0.9, y: 0.52, children: [14] },
  // Level 3 (leaves)
  { x: 0.1, y: 0.78, children: [] },
  { x: 0.28, y: 0.78, children: [] },
  { x: 0.42, y: 0.78, children: [] },
  { x: 0.58, y: 0.78, children: [] },
  { x: 0.72, y: 0.78, children: [] },
  { x: 0.9, y: 0.78, children: [] },
];

// Get all edges (connections between nodes)
function getEdges(): { from: number; to: number }[] {
  const edges: { from: number; to: number }[] = [];
  nodes.forEach((node, i) => {
    node.children.forEach((childIdx) => {
      edges.push({ from: i, to: childIdx });
    });
  });
  return edges;
}

// Particle component that flows along a path
function Particle({
  fromX,
  fromY,
  toX,
  toY,
  delay,
  duration,
}: {
  fromX: number;
  fromY: number;
  toX: number;
  toY: number;
  delay: number;
  duration: number;
}) {
  return (
    <motion.circle
      r="3"
      fill="#374151"
      initial={{ cx: fromX, cy: fromY, opacity: 0 }}
      animate={{
        cx: [fromX, toX],
        cy: [fromY, toY],
        opacity: [0, 1, 1, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatDelay: duration * 2,
        ease: 'easeInOut',
        times: [0, 0.1, 0.9, 1],
      }}
    />
  );
}

export default function AgentPathways() {
  const containerRef = useRef<HTMLDivElement>(null);
  const edges = getEdges();

  // SVG dimensions
  const width = 500;
  const height = 280;

  // Scale coordinates to SVG dimensions
  const scaleX = (x: number) => x * width;
  const scaleY = (y: number) => y * height;

  return (
    <div
      ref={containerRef}
      className="w-full max-w-[500px] mx-auto"
      role="img"
      aria-label="Abstract visualization of AI agent decision pathways"
    >
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="w-full h-auto"
        style={{ maxHeight: '280px' }}
      >
        {/* Render edges (paths) */}
        {edges.map((edge, i) => {
          const from = nodes[edge.from];
          const to = nodes[edge.to];
          return (
            <line
              key={`edge-${i}`}
              x1={scaleX(from.x)}
              y1={scaleY(from.y)}
              x2={scaleX(to.x)}
              y2={scaleY(to.y)}
              stroke="#6B7280"
              strokeWidth="1.5"
              strokeOpacity="0.4"
            />
          );
        })}

        {/* Render nodes */}
        {nodes.map((node, i) => (
          <circle
            key={`node-${i}`}
            cx={scaleX(node.x)}
            cy={scaleY(node.y)}
            r={i === 0 ? 6 : node.children.length === 0 ? 4 : 5}
            fill={i === 0 ? '#374151' : '#6B7280'}
            fillOpacity={i === 0 ? 1 : node.children.length === 0 ? 0.5 : 0.7}
          />
        ))}

        {/* Animated particles flowing through the tree */}
        {edges.map((edge, i) => {
          const from = nodes[edge.from];
          const to = nodes[edge.to];
          // Stagger the particles
          const delay = (i * 0.4) % 3;
          const duration = 2 + Math.random() * 0.5;

          return (
            <Particle
              key={`particle-${i}`}
              fromX={scaleX(from.x)}
              fromY={scaleY(from.y)}
              toX={scaleX(to.x)}
              toY={scaleY(to.y)}
              delay={delay}
              duration={duration}
            />
          );
        })}

        {/* Second wave of particles for more continuous flow */}
        {edges.map((edge, i) => {
          const from = nodes[edge.from];
          const to = nodes[edge.to];
          const delay = ((i * 0.4) + 1.5) % 3;
          const duration = 2.2 + Math.random() * 0.3;

          return (
            <Particle
              key={`particle2-${i}`}
              fromX={scaleX(from.x)}
              fromY={scaleY(from.y)}
              toX={scaleX(to.x)}
              toY={scaleY(to.y)}
              delay={delay}
              duration={duration}
            />
          );
        })}
      </svg>
    </div>
  );
}
