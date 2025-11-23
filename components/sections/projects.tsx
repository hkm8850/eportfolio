"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, TrendingUp, Brain, Database, Network } from "lucide-react"
import { MiniChart } from "@/components/mini-chart"

export function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const projects = [
    {
      title: "Distributed ML Pipeline",
      description:
        "Built a scalable machine learning pipeline using Apache Spark and Kubernetes for processing 10TB+ datasets with 95% accuracy.",
      icon: Network,
      tags: ["Spark", "Kubernetes", "Python", "Docker"],
      github: "#",
      demo: "#",
      color: "from-cyan-500 to-blue-500",
      chartType: "line" as const,
      chartColor: "#00E5FF",
      metrics: { accuracy: "95%", throughput: "10TB+", latency: "< 100ms" },
    },
    {
      title: "Neural Network Optimizer",
      description:
        "Developed a custom neural network optimizer using C++ and CUDA, achieving 3x speedup in training time for large-scale models.",
      icon: Brain,
      tags: ["C++", "CUDA", "PyTorch", "HPC"],
      github: "#",
      demo: "#",
      color: "from-emerald-500 to-teal-500",
      chartType: "pulse" as const,
      chartColor: "#6EE7B7",
      metrics: { speedup: "3x", efficiency: "92%", models: "50+" },
    },
    {
      title: "Real-time Analytics Dashboard",
      description:
        "Created an interactive dashboard for real-time data visualization using streaming data from IoT sensors with sub-second latency.",
      icon: TrendingUp,
      tags: ["React", "D3.js", "Kafka", "Redis"],
      github: "#",
      demo: "#",
      color: "from-cyan-500 to-emerald-500",
      chartType: "bar" as const,
      chartColor: "#00E5FF",
      metrics: { latency: "< 1s", sensors: "1000+", uptime: "99.9%" },
    },
    {
      title: "Big Data ETL Framework",
      description:
        "Designed and implemented an ETL framework for processing multi-source data with automated data quality checks and monitoring.",
      icon: Database,
      tags: ["Hadoop", "Airflow", "SQL", "AWS"],
      github: "#",
      demo: "#",
      color: "from-emerald-500 to-cyan-500",
      chartType: "line" as const,
      chartColor: "#6EE7B7",
      metrics: { sources: "20+", records: "1B+", quality: "99.5%" },
    },
  ]

  return (
    <section id="projects" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Projects Dashboard
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
            Showcasing data-driven solutions and high-performance computing applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredProject(index)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group h-full flex flex-col relative overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    scale: hoveredProject === index ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <MiniChart type={project.chartType} color={project.chartColor} />
                </motion.div>

                <div className="flex items-start gap-4 mb-4">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${project.color} flex-shrink-0`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <project.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 mb-4 leading-relaxed flex-1">{project.description}</p>

                <motion.div
                  className="mb-4 grid grid-cols-3 gap-2"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                    height: hoveredProject === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {Object.entries(project.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-cyan-500/10 rounded border border-cyan-500/30">
                      <div className="text-xs text-gray-400 uppercase">{key}</div>
                      <div className="text-sm font-bold text-cyan-400">{value}</div>
                    </div>
                  ))}
                </motion.div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-emerald-500/50 bg-emerald-500/10 text-emerald-300 text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:text-cyan-300 bg-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:text-emerald-300 bg-transparent"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>

                {/* Animated glow effect */}
                <motion.div
                  className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(circle at 50% 50%, rgba(0, 229, 255, 0.1), transparent 70%)`,
                  }}
                />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
