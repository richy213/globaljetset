import { Inter } from 'next/font/google'
import './globals.css'
import Provider from './Provider'
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"
const inter = Inter({ subsets: ['latin'] })

export const metadata = {

  title: {
    default: "Global Jet Set - Home",
    template: "%s - Global Jet Set ",
  },
  twitter: {
    card: "summary_large_image",
  },
  alternates: {
    canonical: "https://globaljetset.mx/",
    languages: {
      'en-US': '/en-US',
      'de-DE': '/de-DE',
    },
  },
  openGraph: {
    title: "Global Jet Set",
    description: "Explora nuestro catálogo de aeronaves meticulosamente seleccionadas, que abarcan desde jets ejecutivos ultramodernos hasta elegantes aviones privados diseñados para satisfacer los más altos estándares de confort y prestigio.",
    url: "https://globaljetset.mx/",
    siteName: "Globaljetset",
    images: '/og-image.png',
  },
  description: '¡Bienvenido a Globaljetset tu destino definitivo para experimentar el lujo en el cielo! Descubre un mundo de elegancia y comodidad con nuestra exclusiva flota de aviones privados disponibles para venta y alquiler.',
  keywords: ["globaljetsetmx", "globaljetset", "globaljet", "global", "aviones", "renta", "renta de aviones","venta de aviones", "yates", "renta de yates", "vuelo"],
  creator: 'Luis Nava',
  publisher: "Boom Partner",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>

        <Analytics />
        <SpeedInsights />

      </body>
    </html>
  )
}
