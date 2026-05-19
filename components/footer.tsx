import Link from "next/link"
import { Instagram, MapPin } from "lucide-react"
import { BrosLogo } from "./bros-logo"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <BrosLogo size="lg" showStatus={false} />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Las mejores hamburguesas artesanales de Buenos Aires. 
              Bienvenido a la Burgerhood.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a
                href="https://www.instagram.com/burgerbrosarg"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-[var(--font-display)] text-xl text-foreground tracking-tight mb-4">
              SUCURSALES
            </h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>La Plata: 10 esq. 50</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Quilmes: Almte. Brown 464</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>Bernal: Av. San Martín 394</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>City Bell: Diag. Jorge Bell 390</span>
              </li>
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-[var(--font-display)] text-xl text-foreground tracking-tight mb-4">
              HORARIOS
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Lunes a Domingo</li>
              <li className="text-secondary font-medium">12:00 a 00:00 hs</li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-[var(--font-display)] text-xl text-foreground tracking-tight mb-4">
              NAVEGACIÓN
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-secondary transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#menu" className="text-muted-foreground hover:text-secondary transition-colors">
                  Menú
                </Link>
              </li>
              <li>
                <Link href="#sucursales" className="text-muted-foreground hover:text-secondary transition-colors">
                  Sucursales
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-muted-foreground hover:text-secondary transition-colors">
                  Nosotros
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Bros Argentina. Todos los derechos reservados.
          </p>
          <a
            href="https://www.burgerbros.com.ar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-secondary transition-colors"
          >
            www.burgerbros.com.ar
          </a>
        </div>
      </div>
    </footer>
  )
}
