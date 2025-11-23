"use client"

import { motion } from "framer-motion"

interface MiniChartProps {
  type: "line" | "bar" | "pulse"
  color: string
}

export function MiniChart({ type, color }: MiniChartProps) {
  if (type === "line") {
    const points = [30, 50, 40, 70, 60, 80, 75]
    const pathData = points.map((y, i) => `${i * 15},${100 - y}`).join(" L ")

    return (
      <svg width="100" height="60" className="opacity-70">
        <motion.polyline
          points={pathData}
          fill="none"
          stroke={color}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        {points.map((y, i) => (
          <motion.circle
            key={i}
            cx={i * 15}
            cy={100 - y}
            r="3"
            fill={color}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, duration: 0.3 }}
          />
        ))}
      </svg>
    )
  }

  if (type === "bar") {
    const bars = [40, 65, 50, 80, 70, 90]
    return (
      <svg width="100" height="60" className="opacity-70">
        {bars.map((height, i) => (
          <motion.rect
            key={i}
            x={i * 16}
            y={60 - height * 0.6}
            width="12"
            height={height * 0.6}
            fill={color}
            initial={{ height: 0, y: 60 }}
            animate={{ height: height * 0.6, y: 60 - height * 0.6 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </svg>
    )
  }

  // Pulse type
  return (
    <svg width="100" height="60" className="opacity-70">
      <motion.circle
        cx="50"
        cy="30"
        r="15"
        fill="none"
        stroke={color}
        strokeWidth="2"
        initial={{ scale: 0.8, opacity: 1 }}
        animate={{ scale: 1.5, opacity: 0 }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      />
      <circle cx="50" cy="30" r="8" fill={color} />
    </svg>
  )
}
