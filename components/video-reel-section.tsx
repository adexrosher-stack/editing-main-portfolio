"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export function VideoReelSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <section className="py-20 px-4 bg-dark-warm">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold font-clash text-white mb-4">Video Reel</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Watch a showcase of my best work in motion graphics and video editing
          </p>
        </motion.div>

        {/* Video player */}
        <motion.div
          className="relative max-w-4xl mx-auto rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="relative w-full bg-black aspect-video flex items-center justify-center">
            {/* Video placeholder */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent" />
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Video Reel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 mb-6">Interested in working together? Let's create something amazing.</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-primary text-white font-bold rounded-lg hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/50"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
