"use client"

import { motion } from "framer-motion"
import { Instagram } from "lucide-react"
import Image from "next/image"

const instagramPosts = [
  { id: 1, image: "/images/insta-1.jpg", alt: "Bros burger" },
  { id: 2, image: "/images/insta-2.jpg", alt: "Bros fries" },
  { id: 3, image: "/images/insta-3.jpg", alt: "Bros restaurant" },
  { id: 4, image: "/images/insta-4.jpg", alt: "Bros team" },
  { id: 5, image: "/images/insta-5.jpg", alt: "Bros special" },
  { id: 6, image: "/images/insta-6.jpg", alt: "Bros collab" },
]

export function InstagramSection() {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            @burgerbrosarg
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight">
            SEGUINOS EN IG
          </h2>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {instagramPosts.map((post, index) => (
            <motion.a
              key={post.id}
              href="https://www.instagram.com/burgerbrosarg"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group relative aspect-square rounded-xl overflow-hidden"
            >
              <Image
                src={post.image}
                alt={post.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                <Instagram className="w-8 h-8 text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follow Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <a
            href="https://www.instagram.com/burgerbrosarg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white font-semibold rounded-full hover:scale-105 transition-transform duration-200"
          >
            <Instagram className="w-5 h-5" />
            Seguinos en Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
