"use client"

import { motion } from "framer-motion"
import { Film, Sparkles, Palette, Music, Zap, Eye } from "lucide-react"

const services = [
  {
    icon: Film,
    title: "Video Editing",
    description: "Professional video editing for commercials, YouTube videos, social media content, and documentaries.",
  },
  {
    icon: Sparkles,
    title: "Motion Graphics",
    description:
      "Eye-catching motion graphics and animations that bring your ideas to life with creativity and precision.",
  },
  {
    icon: Palette,
    title: "Color Grading",
    description: "Professional color correction and grading to enhance the visual appeal and mood of your footage.",
  },
  {
    icon: Music,
    title: "Audio Design",
    description: "Sound design, audio mixing, and music selection to create immersive audio-visual experiences.",
  },
  {
    icon: Zap,
    title: "VFX & Effects",
    description: "Visual effects, transitions, and special effects to add that professional polish to your content.",
  },
  {
    icon: Eye,
    title: "Consultation",
    description: "Creative consultation and concept development to help you achieve your vision.",
  },
]

export function ServicesSection() {
  return (
    <section className="w-full py-20 bg-secondary">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold text-foreground mb-4">Services & Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video production and motion graphics services tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-lg group"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon size={28} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
