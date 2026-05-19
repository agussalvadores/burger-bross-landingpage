"use client"

import { motion } from "framer-motion"
import { ArrowDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { StatusBadge } from "./status-badge"

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-burger.jpg"
          alt="Hamburguesa Bros"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <StatusBadge />
          </motion.div>

          {/* Main Heading */}
          <h1 className="font-[var(--font-display)] text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-tight leading-none">
            <span className="text-foreground">WELCOME TO</span>
            <br />
            <span className="text-foreground">THE </span>
            <span className="text-secondary">BURGER</span>
            <span className="text-primary">HOOD</span>
          </h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="max-w-xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed"
          >
            Las buenas burgers NO SE EXPLICAN, SE PRUEBAN
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
            <Link
              href="https://burguerbros.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-secondary text-secondary-foreground font-semibold text-lg rounded-full hover:bg-secondary/90 transition-all duration-200 hover:scale-105"
            >
              Ver Menú
            </Link>
            <Link
              href="#sucursales"
              className="w-full sm:w-auto px-8 py-4 border-2 border-foreground/20 text-foreground font-semibold text-lg rounded-full hover:border-secondary hover:text-secondary transition-all duration-200"
            >
              Nuestras Sucursales
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-8 w-32 h-32 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-8 w-40 h-40 bg-secondary/10 rounded-full blur-3xl" />
    </section>
  )
}
