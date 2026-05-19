"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Star } from "lucide-react"
import { ScrollReveal, StaggerContainer, StaggerItem } from "./scroll-reveal"

const menuItems = [
  {
    name: "Classic Bros",
    description: "Medallón de carne 180g, queso cheddar, lechuga, tomate, cebolla caramelizada y salsa Bros.",
    image: "/images/burger-classic.jpg",
    popular: true,
  },
  {
    name: "Double Smash",
    description: "Doble medallón smash 90g c/u, queso americano, pickles, cebolla y salsa especial.",
    image: "/images/burger-smash.jpg",
    popular: true,
  },
  {
    name: "BBQ Bacon",
    description: "Medallón 180g, bacon crocante, cebolla crispy, queso cheddar y salsa BBQ ahumada.",
    image: "/images/burger-bbq.jpg",
    popular: false,
  },
  {
    name: "Veggie Bros",
    description: "Medallón vegetal, queso, lechuga, tomate, cebolla morada y mayonesa vegana.",
    image: "/images/burger-veggie.jpg",
    popular: false,
  },
]

export function MenuSection() {
  return (
    <section id="menu" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            Nuestro Menú
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight">
            LAS FAVORITAS
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            Hamburguesas artesanales hechas con ingredientes de primera calidad. 
            Cada mordida es una experiencia única.
          </p>
        </ScrollReveal>

        {/* Menu Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8" staggerDelay={0.15}>
          {menuItems.map((item) => (
            <StaggerItem key={item.name}>
              <div className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-secondary/50 transition-all duration-300">
                <div className="flex flex-col sm:flex-row">
                  {/* Image */}
                  <div className="relative w-full sm:w-48 h-48 sm:h-auto flex-shrink-0 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    {item.popular && (
                      <div className="absolute top-3 left-3 flex items-center gap-1 px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full">
                        <Star className="w-3 h-3 fill-current" />
                        Popular
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <h3 className="font-[var(--font-display)] text-2xl text-foreground tracking-tight">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Full Menu CTA */}
        <ScrollReveal delay={0.4} className="text-center mt-12">
          <a
            href="https://www.instagram.com/burgerbrosarg"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-secondary text-secondary font-semibold rounded-full hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
          >
            Ver Menú Completo
            <span aria-hidden="true">→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
