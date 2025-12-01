"use client";

import { motion } from "framer-motion";
import { ProjectCard } from "./project-card";
import { useState } from "react";

const projects = [
  { id: "corporate-promo", title: "Corporate Promo", description: "High-energy promotional video for tech startup", video: "/one.mp4", image: "/thumbnails/corporate-promo.jpg", category: "Commercial" },
  { id: "music-video", title: "Music Video", description: "Cinematic music video with motion graphics", video: "/two.mp4", image: "/thumbnails/music-video.jpg", category: "Music" },
  { id: "product-demo", title: "Product Demo", description: "Sleek product demonstration with animations", video: "/three.mp4", image: "/thumbnails/product-demo.jpg", category: "Product" },
  { id: "brand-story", title: "Brand Story", description: "Emotional brand narrative with motion design", video: "/vox.mp4", image: "/thumbnails/brand-story.jpg", category: "Branding" },
  { id: "event-recap", title: "Event Recap", description: "Dynamic event coverage with creative editing", video: "/1009.mp4", image: "/thumbnails/event-recap.jpg", category: "Events" },
  { id: "animation-reel", title: "Animation Reel", description: "Showcase of motion graphics and animations", video: "/rosher.mp4", image: "/thumbnails/animation-reel.jpg", category: "Animation" },
];

const categories = ["All", "Commercial", "Music", "Product", "Branding", "Events", "Animation"];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="w-16 h-1 bg-primary mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold font-clash text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A selection of recent projects showcasing video editing and motion graphics expertise
          </p>
        </motion.div>

        {/* Category filter */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-primary text-white shadow-lg shadow-primary/50"
                  : "bg-secondary text-foreground hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              layout
            >
              <ProjectCard
                {...project}
                autoPlayOnScroll
                tapToPlay
                aspectRatio={index < 3 ? "9:16" : "16:9"}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
