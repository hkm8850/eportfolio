"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap, Briefcase, Award, Download, Calendar } from "lucide-react"

export function CV() {
  const education = [
    {
      degree: "B.S. in Data Science & HPC Engineering",
      institution: "University of Technology",
      period: "2022 - Present",
      gpa: "3.9/4.0",
      highlights: ["Dean's List", "Research Assistant in ML Lab"],
    },
  ]

  const experience = [
    {
      title: "Data Science Intern",
      company: "Tech Analytics Corp",
      period: "Summer 2024",
      description:
        "Developed ML models for predictive analytics, reducing processing time by 40% using distributed computing.",
      technologies: ["Python", "Spark", "TensorFlow"],
    },
    {
      title: "Research Assistant",
      company: "University HPC Lab",
      period: "2023 - Present",
      description: "Optimized parallel algorithms for large-scale data processing on GPU clusters.",
      technologies: ["C++", "CUDA", "MPI"],
    },
  ]

  const certifications = [
    { name: "AWS Certified Machine Learning - Specialty", issuer: "Amazon Web Services", year: "2024" },
    { name: "TensorFlow Developer Certificate", issuer: "Google", year: "2024" },
    { name: "Deep Learning Specialization", issuer: "Coursera", year: "2023" },
  ]

  return (
    <section id="cv" className="relative py-32 px-4">
      <div className="container mx-auto max-w-6xl z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h3
            className="text-3xl md:text-4xl font-bold mb-4 text-white"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hamza Kalim
          </motion.h3>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Curriculum Vitae
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">My academic and professional journey</p>
          <Button
            className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-semibold px-8 py-6 text-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300"
            size="lg"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </motion.div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-cyan-400">Education</h3>
          </div>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{edu.degree}</h4>
                    <p className="text-cyan-400 font-semibold">{edu.institution}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-emerald-400 font-semibold">GPA: {edu.gpa}</span>
                </div>
                <ul className="space-y-2">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="w-8 h-8 text-emerald-400" />
            <h3 className="text-3xl font-bold text-emerald-400">Experience</h3>
          </div>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 border-emerald-500/30 backdrop-blur-sm hover:border-emerald-400/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">{exp.title}</h4>
                    <p className="text-emerald-400 font-semibold">{exp.company}</p>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 mt-2 md:mt-0">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-8 h-8 text-cyan-400" />
            <h3 className="text-3xl font-bold text-cyan-400">Certifications & Awards</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <Card
                key={index}
                className="p-6 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 border-cyan-500/30 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-cyan-500/20">
                    <Award className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                    <p className="text-gray-400 text-sm mb-1">{cert.issuer}</p>
                    <p className="text-cyan-400 text-sm font-semibold">{cert.year}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
