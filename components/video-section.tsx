"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Play, Video, X } from "lucide-react"
import Image from "next/image"

const videos = [
  {
    id: 1,
    title: "Block Manufacturing Process",
    description: "Watch how we produce premium 6-inch and 9-inch vibrated concrete blocks",
    thumbnail: "/images/blocks-manufacturing.jpg",
    // Placeholder YouTube ID - replace with actual video
    youtubeId: "dQw4w9WgXcQ",
    duration: "3:45"
  },
  {
    id: 2,
    title: "Facility Management Overview",
    description: "Discover our comprehensive facility management services",
    thumbnail: "/images/facility-building-exterior.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "5:20"
  },
  {
    id: 3,
    title: "Construction Project Timelapse",
    description: "Watch a complete construction project from start to finish",
    thumbnail: "/images/project-ongoing.jpg",
    youtubeId: "dQw4w9WgXcQ",
    duration: "4:15"
  },
]

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null)

  const currentVideo = videos.find(v => v.id === activeVideo)

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-card" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="relative container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 glass-gold rounded-full text-primary text-sm font-medium mb-4">
            <Video className="w-4 h-4" />
            Video Gallery
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
            Watch Our <span className="text-gradient-gold">Story</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Experience our work through video - from block manufacturing to completed projects.
          </p>
        </motion.div>

        {/* Video Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setActiveVideo(video.id)}
            >
              <div className="glass rounded-xl overflow-hidden">
                {/* Thumbnail */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-background/40 group-hover:bg-background/20 transition-colors" />
                  
                  {/* Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-16 h-16 rounded-full bg-primary flex items-center justify-center"
                    >
                      <Play className="w-7 h-7 text-primary-foreground ml-1" />
                    </motion.div>
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute bottom-4 right-4 px-2 py-1 glass rounded text-xs text-foreground">
                    {video.duration}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about videos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            More videos coming soon. Follow us on social media for updates.
          </p>
        </motion.div>
      </div>

      {/* Video Modal */}
      {activeVideo !== null && currentVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setActiveVideo(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setActiveVideo(null)}
            className="absolute top-6 right-6 w-12 h-12 rounded-full glass flex items-center justify-center text-foreground hover:text-primary transition-colors z-10"
            aria-label="Close video"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Video Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="glass rounded-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideo.youtubeId}?autoplay=1`}
                  title={currentVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{currentVideo.title}</h3>
                <p className="text-muted-foreground">{currentVideo.description}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}
