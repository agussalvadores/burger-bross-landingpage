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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000')

const logoImage = {
  url: '/logo-bros.jpg',
  width: 1024,
  height: 1024,
  alt: 'Burger Bros',
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Burger Bros',
  description: 'Bienvenido a la Burgerhood. Las mejores hamburguesas artesanales de Buenos Aires. 4 sucursales: La Plata, Quilmes, Bernal y City Bell. Abierto de Lunes a Domingo 12 a 00hs.',
  keywords: ['hamburguesas', 'burger bros', 'bros', 'la plata', 'quilmes', 'bernal', 'city bell', 'hamburgueseria', 'argentina'],
  icons: {
    icon: '/logo-bros.jpg',
    apple: '/logo-bros.jpg',
  },
  openGraph: {
    title: 'Burger Bros',
    description: 'Bienvenido a la Burgerhood. Las mejores hamburguesas artesanales.',
    type: 'website',
    siteName: 'Burger Bros',
    images: [logoImage],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Burger Bros',
    description: 'Bienvenido a la Burgerhood. Las mejores hamburguesas artesanales.',
    images: [logoImage.url],
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
