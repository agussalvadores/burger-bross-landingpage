"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, ShoppingBag, Users } from "lucide-react"
import Link from "next/link"
import { BrosLogo } from "./bros-logo"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Menú", href: "#menu" },
    { label: "Sucursales", href: "#sucursales" },
    { label: "Nosotros", href: "#nosotros" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2 flex-shrink-0">
            <BrosLogo size="md" showStatus={false} />
          </Link>

          {/* Desktop Navigation - Centered */}
          <nav className="hidden md:flex items-center justify-center gap-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3 flex-shrink-0">
            <Link
              href="https://app.loyalzclub.com/getpass/338857?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-secondary text-secondary-foreground text-sm font-medium rounded-full hover:bg-secondary/90 transition-colors"
            >
              <Users className="w-4 h-4" />
              BurgerHood
            </Link>
            <Link
              href="https://burguerbros.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-primary-foreground text-sm font-medium rounded-full hover:bg-primary/90 transition-colors"
            >
              <ShoppingBag className="w-4 h-4" />
              Pedir Ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground ml-auto"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-b border-border"
          >
            <nav className="flex flex-col px-4 py-4 gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-lg font-medium text-foreground hover:text-secondary transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-4 border-t border-border mt-2">
                <Link
                  href="https://app.loyalzclub.com/getpass/338857?utm_source=ig&utm_medium=social&utm_content=link_in_bio"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-secondary text-secondary-foreground font-medium rounded-full"
                >
                  <Users className="w-4 h-4" />
                  BurgerHood
                </Link>
                <Link
                  href="https://burguerbros.com.ar"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 bg-primary text-primary-foreground font-medium rounded-full"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Pedir Ahora
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
