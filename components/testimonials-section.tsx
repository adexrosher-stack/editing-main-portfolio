"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechStart",
    content:
      "Exceptional work! The video editing transformed our product launch campaign. Highly professional and delivered ahead of schedule.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Content Creator, 500K Followers",
    content:
      "Best motion graphics designer I've worked with. Creative, responsive, and truly understands the YouTube algorithm.",
    rating: 5,
  },
  {
    name: "Emma Rodriguez",
    role: "Brand Manager, Creative Agency",
    content:
      "Consistently delivers stunning visuals. The attention to detail and creative problem-solving is unmatched.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="w-full py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-clash font-bold text-foreground mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">What clients say about working with me</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg bg-card border border-border hover:border-primary transition-all hover:shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground mb-6 leading-relaxed">{testimonial.content}</p>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
