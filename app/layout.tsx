import type { Metadata } from 'next'
import { Cairo, Space_Mono } from 'next/font/google'
import './globals.css'
import { LanguageProvider } from '@/contexts/language-context'

const cairo = Cairo({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-cairo',
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-space-mono',
})

export const metadata: Metadata = {
  title: 'InterKey Intelligent DPI — AI-Powered Deep Packet Inspection',
  description:
    'InterKey Intelligent DPI integrates a breakthrough AI Traffic Large Model to achieve 99% recognition accuracy on encrypted and adversarial applications — enabling precise, real-time control at carrier scale.',
  generator: 'v0.app',
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
