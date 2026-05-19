"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Phone, Navigation, ShoppingBag } from "lucide-react"

const locations = [
  {
    name: "La Plata",
    address: "Calle 10 esquina 50",
    hours: "Lun a Dom 12 a 00hs",
    phone: "+54 221 603-5050",
    mapUrl: "https://maps.app.goo.gl/582STp9x98YnheFM8",
    orderUrl: "https://burgerbros-laplata.restosimple.com/?channel-hash=8JWV1D",
    highlight: false,
  },
  {
    name: "City Bell",
    address: "Diag. Jorge Bell 390",
    hours: "Lun a Dom 12 a 00hs",
    phone: "+54 221 595-3812",
    mapUrl: "https://maps.app.goo.gl/ahh9kKoyAjegceQYA",
    orderUrl: "https://burgerbros-citybell.restosimple.com/?channel-hash=5D9N9D",
    highlight: false,
  },
  {
    name: "Quilmes",
    address: "Almte. Brown 464",
    hours: "Lun a Dom 12 a 00hs",
    phone: "+54 11 5587-0653",
    mapUrl: "https://maps.app.goo.gl/X8gfJ4P96mXaFUE8A",
    orderUrl: "https://burgerbros-quilmes.restosimple.com/?channel-hash=PD0K6D",
    highlight: false,
  },
  {
    name: "Bernal",
    address: "Av. San Martín 394",
    hours: "Lun a Dom 12 a 00hs",
    phone: "+54 11 2346-3313",
    mapUrl: "https://maps.app.goo.gl/6MwBbyBVd2VpcpMn6",
    orderUrl: "https://burgerbros-bernal.restosimple.com/?channel-hash=D9ZW2D",
    highlight: false,
  },
]

export function LocationsSection() {
  return (
    <section id="sucursales" className="py-24 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-secondary font-medium text-sm uppercase tracking-widest">
            Nuestras Sucursales
          </span>
          <h2 className="mt-4 font-[var(--font-display)] text-5xl sm:text-6xl md:text-7xl text-foreground tracking-tight">
            ENCONTRANOS
          </h2>
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            4 sucursales en Buenos Aires para que siempre tengas una Bros cerca. 
            ¡Vení a conocernos!
          </p>
        </motion.div>

        {/* Locations Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location, index) => (
            <motion.div
              key={location.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl border transition-all duration-300 hover:scale-105 ${
                location.highlight
                  ? "bg-primary/10 border-primary/50 hover:border-primary"
                  : "bg-background border-border/50 hover:border-secondary/50"
              }`}
            >
              {/* Location Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`font-[var(--font-display)] text-3xl tracking-tight ${
                  location.highlight ? "text-primary" : "text-secondary"
                }`}>
                  {location.name.toUpperCase()}
                </span>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{location.address}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Clock className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{location.hours}</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <Phone className="w-4 h-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                  <a 
                    href={`tel:${location.phone.replace(/[\s-]/g, '')}`}
                    className="text-muted-foreground hover:text-secondary transition-colors"
                  >
                    {location.phone}
                  </a>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col gap-2">
                <a
                  href={location.orderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-200"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Pedir Aquí
                </a>
                <a
                  href={location.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 text-sm font-medium rounded-full border border-border hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-200"
                >
                  <Navigation className="w-4 h-4" />
                  Cómo llegar
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
