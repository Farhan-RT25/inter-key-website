import type { Metadata } from 'next'
import { Cairo, Space_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

const cairo = Cairo({
  subsets: ['latin', 'arabic'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

const BASE_URL = 'https://dpi.interkey.com.sa'
const TITLE = 'Interkey Intelligent DPI: AI-Powered Deep Packet Inspection'
const DESCRIPTION =
  'Interkey Intelligent DPI integrates a breakthrough AI Traffic Large Model to achieve 99% recognition accuracy on encrypted and adversarial applications, enabling precise, real-time control at carrier scale.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  icons: {
    icon: '/images/SVG/interkey_logo_only.svg',
  },
  openGraph: {
    type: 'website',
    url: BASE_URL,
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: `${BASE_URL}/images/hero-datacenter.jpg` }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: [`${BASE_URL}/images/hero-datacenter.jpg`],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${cairo.variable} ${spaceMono.variable} bg-background`}>
      <body className="font-sans antialiased"><LanguageProvider>{children}</LanguageProvider></body>
    </html>
  )
}
