import Header from "@/components/header"
import Hero from "@/components/hero"
import Challenges from "@/components/challenges"
import Solution from "@/components/solution"
import Features from "@/components/features"
import LiveView from "@/components/live-view"
import HowItWorks from "@/components/how-it-works"
import WhyInterKey from "@/components/why-interkey"
import UseCases from "@/components/use-cases"
import Compliance from "@/components/compliance"
import CTAContact from "@/components/cta-contact"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <Challenges />
        <Solution />
        <Features />
        <LiveView />
        <HowItWorks />
        <WhyInterKey />
        <UseCases />
        <Compliance />
        <CTAContact />
      </main>
      <Footer />
    </>
  )
}
