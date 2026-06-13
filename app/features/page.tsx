import type { Metadata } from 'next'
import Header from "@/components/header"

export const metadata: Metadata = {
  title: 'Features — Interkey Intelligent DPI',
  description:
    'Explore the full feature set of Interkey Intelligent DPI: encrypted traffic classification, policy enforcement, real-time analytics, and carrier-grade scalability powered by an AI Traffic Large Model.',
}
import Challenges from "@/components/challenges"
import Features from "@/components/features"
import LiveView from "@/components/live-view"
import HowItWorks from "@/components/how-it-works"
import WhyInterkey from "@/components/why-interkey"
import CTAContact from "@/components/cta-contact"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import BackToTop from "@/components/back-to-top"

export default function FeaturesPage() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main className="pt-[68px]">
        <Challenges />
        <Features />
        <LiveView />
        <HowItWorks />
        <WhyInterkey />
        <CTAContact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
