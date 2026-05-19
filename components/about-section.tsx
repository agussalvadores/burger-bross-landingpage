"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-1.jpg"
                    alt="Bros burguer preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-2.jpg"
                    alt="Bros restaurant atmosphere"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="relative aspect-square rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-3.jpg"
                    alt="Bros team"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-4.jpg"
                    alt="Bros ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-secondary/20 rounded-full blur-2xl" />
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pl-8"
          >
            <span className="text-secondary font-medium text-sm uppercase tracking-widest">
              Nuestra Historia
            </span>
            <h2 className="mt-4 font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight leading-none">
              MÁS QUE UNA
              <br />
              <span className="text-secondary">HAMBURGUESA</span>
            </h2>

            <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
              <p>
                Somos más que una hamburguesería, somos una comunidad. La <strong className="text-secondary">Burgerhood </strong> 
                es un espacio donde la buena comida y los buenos momentos se encuentran.
              </p>
              <p>
                Con 4 sucursales en Buenos Aires y más de 77.000 seguidores que confían en nosotros, 
                seguimos creciendo gracias a vos.
              </p>
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-3 gap-6">
              <div>
                <span className="font-[var(--font-display)] text-4xl md:text-5xl text-secondary">77K+</span>
                <p className="mt-1 text-sm text-muted-foreground">Seguidores</p>
              </div>
              <div>
                <span className="font-[var(--font-display)] text-4xl md:text-5xl text-secondary">4</span>
                <p className="mt-1 text-sm text-muted-foreground">Sucursales</p>
              </div>
              <div>
                <span className="font-[var(--font-display)] text-4xl md:text-5xl text-secondary">∞</span>
                <p className="mt-1 text-sm text-muted-foreground">Hamburguesas</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
