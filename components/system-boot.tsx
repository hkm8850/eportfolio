"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function SystemBoot({ onComplete }: { onComplete: () => void }) {
  const [lines, setLines] = useState<string[]>([])
  const [isComplete, setIsComplete] = useState(false)

  const bootSequence = [
    "INITIALIZING DATA PROFILE...",
    "LOADING NEURAL NETWORKS... [OK]",
    "CONNECTING TO HPC CLUSTERS... [OK]",
    "MOUNTING DATA REPOSITORIES... [OK]",
    "CALIBRATING ML MODELS... [OK]",
    "ESTABLISHING QUANTUM LINKS... [OK]",
    "SYSTEM READY.",
  ]

  useEffect(() => {
    let currentLine = 0
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLines((prev) => [...prev, bootSequence[currentLine]])
        currentLine++
      } else {
        clearInterval(interval)
        setTimeout(() => {
          setIsComplete(true)
          setTimeout(onComplete, 500)
        }, 800)
      }
    }, 400)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 bg-[#0B1220] flex items-center justify-center"
        >
          <div className="max-w-2xl w-full px-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="font-mono text-cyan-400"
            >
              {lines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="mb-2 text-sm md:text-base"
                >
                  <span className="text-emerald-400 mr-2">{">"}</span>
                  {line}
                  {index === lines.length - 1 && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
                      className="inline-block w-2 h-4 bg-cyan-400 ml-1"
                    />
                  )}
                </motion.div>
              ))}
            </motion.div>

            {/* Progress bar */}
            <motion.div
              className="mt-8 h-1 bg-cyan-500/20 rounded-full overflow-hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.8, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
