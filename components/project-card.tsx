"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  video: string;
  image: string;
  category: string;
  autoPlayOnScroll?: boolean;
  tapToPlay?: boolean;
  aspectRatio?: "16:9" | "9:16";
}

export function ProjectCard({
  title,
  description,
  video,
  image,
  autoPlayOnScroll = false,
  tapToPlay = false,
  aspectRatio = "16:9",
}: ProjectCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Autoplay on scroll
  useEffect(() => {
    const vid = videoRef.current;
    if (!autoPlayOnScroll || !vid) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (!vid) return;
        if (entry.isIntersecting) {
          vid.play().catch(() => console.log(`Autoplay blocked: ${video}`));
          setIsPlaying(true);
        } else {
          vid.pause();
          setIsPlaying(false);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(vid);
    return () => observer.disconnect();
  }, [autoPlayOnScroll, video]);

  // Tap-to-play
  const handleTap = () => {
    const vid = videoRef.current;
    if (!tapToPlay || !vid) return;

    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
    } else {
      vid.play().catch(() => console.log(`Tap-to-play blocked: ${video}`));
      setIsPlaying(true);
    }
  };

  const aspectClass = aspectRatio === "9:16" ? "aspect-[9/16]" : "aspect-[16/9]";

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer border border-gray-200 hover:shadow-xl transition-shadow"
      onClick={handleTap}
    >
      <div className={`relative w-full bg-black ${aspectClass}`}>
        <video
          ref={videoRef}
          src={video}
          poster={image}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          onError={() => console.log(`Failed to load video: ${video}`)}
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 text-white text-4xl font-bold pointer-events-none">
            ▶
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm">{description}</p>
      </div>
    </motion.div>
  );
}
