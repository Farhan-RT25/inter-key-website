import Header from "@/components/header"
import Hero from "@/components/hero"
import UseCases from "@/components/use-cases"
import CTAContact from "@/components/cta-contact"
import Footer from "@/components/footer"
import ScrollReveal from "@/components/scroll-reveal"
import BackToTop from "@/components/back-to-top"

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Header />
      <main>
        <Hero />
        <UseCases />
        <CTAContact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
