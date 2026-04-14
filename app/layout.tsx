import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Royalburg Construction | Premium Facility Management, Block Industry & Real Estate in Abuja',
  description: 'Royalburg Construction delivers premium facility management, high-quality concrete block production, and investor-ready real estate solutions in Abuja, Nigeria. Trusted by developers, property owners, and businesses.',
  keywords: ['construction', 'facility management', 'block industry', 'real estate', 'Abuja', 'Nigeria', 'concrete blocks', 'property management'],
  authors: [{ name: 'Royalburg Construction' }],
  openGraph: {
    title: 'Royalburg Construction | Premium Construction Services in Abuja',
    description: 'Premium facility management, concrete block production, and real estate solutions in Abuja, Nigeria.',
    type: 'website',
    locale: 'en_NG',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Royalburg Construction',
    description: 'Premium construction services in Abuja, Nigeria.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  themeColor: '#0a0a0f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased bg-background text-foreground overflow-x-hidden">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
