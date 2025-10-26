"use client"

import { motion } from "framer-motion"

const stats = [
  { label: "Projects Completed", value: "500+" },
  { label: "Happy Clients", value: "50+" },
  { label: "Years Experience", value: "5+" },
  { label: "Awards Won", value: "15+" },
]

export function StatisticsSection() {
  return (
    <section className="w-full py-20 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold text-foreground mb-4">By The Numbers</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven track record of delivering exceptional video content and motion graphics
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors"
            >
              <div className="text-5xl md:text-6xl font-clash font-bold text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground text-sm md:text-base">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
