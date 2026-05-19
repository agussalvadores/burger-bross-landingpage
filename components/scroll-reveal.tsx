"use client"

import { motion, type Variants } from "framer-motion"
import { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "none"
  duration?: number
  once?: boolean
}

const getDirectionOffset = (direction: string) => {
  switch (direction) {
    case "up":
      return { y: 60 }
    case "down":
      return { y: -60 }
    case "left":
      return { x: 60 }
    case "right":
      return { x: -60 }
    default:
      return {}
  }
}

export function ScrollReveal({
  children,
  className = "",
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: ScrollRevealProps) {
  const directionOffset = getDirectionOffset(direction)

  const variants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-100px" }}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  staggerDelay?: number
  once?: boolean
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  once = true,
}: StaggerContainerProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1,
      },
    },
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-50px" }}
      variants={containerVariants}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className = "",
  direction = "up",
}: {
  children: ReactNode
  className?: string
  direction?: "up" | "down" | "left" | "right" | "none"
}) {
  const directionOffset = getDirectionOffset(direction)

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      ...directionOffset,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  }

  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  )
}
