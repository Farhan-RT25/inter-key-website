import Header from "@/components/header"
import Challenges from "@/components/challenges"
import Solution from "@/components/solution"
import Features from "@/components/features"
import LiveView from "@/components/live-view"
import HowItWorks from "@/components/how-it-works"
import WhyInterKey from "@/components/why-interkey"
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
        <Solution />
        <Features />
        <LiveView />
        <HowItWorks />
        <WhyInterKey />
        <CTAContact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
