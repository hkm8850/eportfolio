"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2, Boxes, Wrench, BarChart3 } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "from-cyan-500 to-blue-500",
      skills: ["Python", "C++", "SQL", "R", "Java", "Bash"],
    },
    {
      title: "Frameworks",
      icon: Boxes,
      color: "from-emerald-500 to-teal-500",
      skills: ["TensorFlow", "PyTorch", "Spark", "Hadoop", "Scikit-learn", "Pandas"],
    },
    {
      title: "Tools",
      icon: Wrench,
      color: "from-cyan-500 to-emerald-500",
      skills: ["Docker", "Kubernetes", "Git", "Linux", "AWS", "Azure"],
    },
    {
      title: "Visualization",
      icon: BarChart3,
      color: "from-emerald-500 to-cyan-500",
      skills: ["Tableau", "Power BI", "Matplotlib", "Plotly", "D3.js", "Seaborn"],
    },
  ]

  return (
    <section
      id="skills"
      className="relative py-32 px-4 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"
    >
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Skills Matrix
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 text-lg max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit for data science, machine learning, and high-performance computing
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="p-8 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group h-full">
                <div className="flex items-center gap-4 mb-6">
                  <motion.div
                    className={`p-3 rounded-lg bg-gradient-to-br ${category.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <category.icon className="w-6 h-6 text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-cyan-400">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Badge
                        variant="outline"
                        className="px-4 py-2 text-sm border-cyan-500/50 bg-cyan-500/10 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-400 transition-all cursor-default"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
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

        {/* Additional competencies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12"
        >
          <Card className="p-8 bg-gradient-to-r from-cyan-500/10 via-emerald-500/10 to-cyan-500/10 border-cyan-500/30 backdrop-blur-sm">
            <h3 className="text-xl font-bold text-emerald-400 mb-4 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Parallel Computing",
                "Distributed Systems",
                "Deep Learning",
                "Data Pipeline Design",
                "Algorithm Optimization",
                "Cloud Architecture",
                "Statistical Analysis",
                "Model Deployment",
              ].map((competency, index) => (
                <motion.div
                  key={competency}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Badge className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 border-emerald-500/50 text-emerald-300 hover:from-cyan-500/30 hover:to-emerald-500/30 transition-all cursor-default">
                    {competency}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
