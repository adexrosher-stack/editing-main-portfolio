"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const caseStudies = [
  {
    id: 1,
    title: "Corporate Promo",
    client: "TechStart Inc.",
    category: "Commercial",
    challenge: "Condense complex technical features into an engaging 60-second video",
    solution: "Dynamic transitions, kinetic typography, and carefully selected music",
    result: "300% increase in engagement",
    image: "/corporate-video-editing.png",
    slug: "corporate-promo",
  },
  {
    id: 2,
    title: "Music Video",
    client: "Independent Artist",
    category: "Music",
    challenge: "Synchronize complex motion graphics with music beat",
    solution: "Detailed storyboard and precise keyframing aligned with musical cues",
    result: "500K+ views on release",
    image: "/music-video-production.png",
    slug: "music-video",
  },
  {
    id: 3,
    title: "Brand Story",
    client: "Luxury Brand",
    category: "Branding",
    challenge: "Create emotional connection with target audience",
    solution: "Cinematic storytelling with motion design and color grading",
    result: "2M+ impressions",
    image: "/brand-storytelling-video.jpg",
    slug: "brand-story",
  },
]

export function CaseStudiesSection() {
  return (
    <section className="py-20 px-4 bg-white">
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
          <h2 className="text-4xl md:text-5xl font-bold font-clash text-foreground mb-4">Case Studies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Deep dives into featured projects showing challenge, solution, and results
          </p>
        </motion.div>

        {/* Case studies grid */}
        <div className="space-y-12">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              className="grid md:grid-cols-2 gap-8 items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {/* Image */}
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={study.image || "/placeholder.svg"}
                    alt={study.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <p className="text-primary font-semibold mb-2">{study.category}</p>
                  <h3 className="text-3xl font-bold font-clash text-foreground mb-2">{study.title}</h3>
                  <p className="text-muted-foreground mb-6">Client: {study.client}</p>

                  <div className="space-y-4 mb-6">
                    <div>
                      <p className="font-semibold text-foreground mb-2">Challenge</p>
                      <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-2">Solution</p>
                      <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-primary mb-2">Result</p>
                      <p className="text-foreground font-bold">{study.result}</p>
                    </div>
                  </div>

                  <Link href={`/projects/${study.slug}`}>
                    <button className="px-6 py-2 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all duration-300">
                      View Full Case Study
                    </button>
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
