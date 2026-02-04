import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ['latin'] })
const geistMono = Geist_Mono({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://www.maquental.cl'),

  title: {
    default: 'AgroAlgas',
    template: '%s | AgroAlgas',
  },

  description:
    'AgroAlgas desarrolla bioestimulantes agrícolas 100% naturales a base de algas marinas recolectadas en Mehuín, Chile.',

  generator: 'AgroAlgas.app',

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: 'AgroAlgas',
    description:
      'Bioestimulantes agrícolas naturales elaborados con algas marinas del sur de Chile.',
    url: 'https://www.maquental.cl',
    siteName: 'AgroAlgas',
    locale: 'es_CL',
    type: 'website',
  },

  twitter: {
    card: 'summary_large_image',
  },

  icons: {
    icon: '/icon.jpg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
