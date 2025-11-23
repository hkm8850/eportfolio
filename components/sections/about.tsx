"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Brain, Database, Cpu, Cloud } from "lucide-react"

export function About() {
  const timeline = [
    { year: "2023", title: "Started HPC Journey", tech: "C++, MPI, OpenMP" },
    { year: "2024", title: "Machine Learning Focus", tech: "TensorFlow, PyTorch" },
    { year: "2025", title: "Big Data & Cloud", tech: "Spark, Hadoop, Kubernetes" },
  ]

  const interests = [
    { icon: Brain, label: "Machine Learning", color: "text-cyan-400" },
    { icon: Database, label: "Big Data", color: "text-emerald-400" },
    { icon: Cpu, label: "HPC Systems", color: "text-cyan-400" },
    { icon: Cloud, label: "Cloud Computing", color: "text-emerald-400" },
  ]

  return (
    <section id="about" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
            Hamza Kalim - Passionate about leveraging high-performance computing and machine learning to solve complex
            data challenges
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold mb-4 text-cyan-400">Background</h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                I'm Hamza Kalim, a Data Science and HPC Engineering student with a deep passion for transforming raw
                data into actionable intelligence. My journey combines the computational power of high-performance
                systems with the predictive capabilities of machine learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in building scalable distributed systems, optimizing algorithms for parallel processing,
                and deploying ML models in cloud environments. My work focuses on making data processing faster,
                smarter, and more efficient.
              </p>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300">
              <h3 className="text-2xl font-bold mb-6 text-emerald-400">Core Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.label}
                    className="flex flex-col items-center text-center p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <interest.icon className={`w-8 h-8 mb-2 ${interest.color}`} />
                    <span className="text-sm text-gray-300">{interest.label}</span>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-bold mb-8 text-center text-cyan-400">Learning Timeline</h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-emerald-500" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "text-right" : "text-left"}`}>
                    <Card className="inline-block p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300">
                      <h4 className="text-xl font-bold text-cyan-400 mb-2">{item.title}</h4>
                      <p className="text-gray-400 text-sm">{item.tech}</p>
                    </Card>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-emerald-500 shadow-lg shadow-cyan-500/50" />
                  </div>
                  <div className="flex-1 text-2xl font-bold text-gray-500">{item.year}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
