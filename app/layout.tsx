import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-display'
});

export const metadata: Metadata = {
  title: 'BROS - Hamburguesería Premium | La Plata, Quilmes, Bernal, City Bell',
  description: 'Bienvenido a la Burgerhood. Las mejores hamburguesas artesanales de Buenos Aires. 4 sucursales: La Plata, Quilmes, Bernal y City Bell. Abierto de Lunes a Domingo 12 a 00hs.',
  keywords: ['hamburguesas', 'burger bros', 'bros', 'la plata', 'quilmes', 'bernal', 'city bell', 'hamburgueseria', 'argentina'],
  openGraph: {
    title: 'BROS - Hamburguesería Premium',
    description: 'Bienvenido a la Burgerhood. Las mejores hamburguesas artesanales.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#E32636',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body className={`${inter.variable} ${bebasNeue.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
