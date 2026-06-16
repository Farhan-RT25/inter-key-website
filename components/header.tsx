"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { lang, toggleLang } = useLanguage()
  const pathname = usePathname()
  const tx = translations.header[lang]
  const links = pathname.startsWith("/features") ? tx.features : tx.home

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={{
        background: scrolled ? "rgba(10,15,46,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between h-[68px]">
        {/* Logo */}
        <Link href="/" className="no-underline">
          <img
            src="/images/SVG/Interkey_DPI_logo.svg"
            alt="Interkey Intelligent DPI"
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-white/70 hover:text-white hover:bg-white/8 px-3.5 py-2 rounded-md text-sm font-medium transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            className="ml-2 px-5 py-2 rounded-lg text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-px"
            style={{
              background: "var(--primary)",
              boxShadow: "0 0 22px rgba(18,62,221,0.45)",
            }}
          >
            {tx.cta}
          </Link>
          {/* Language toggle */}
          <button
            onClick={toggleLang}
            className="ms-3 px-3 py-1.5 rounded-md text-xs font-bold border transition-all duration-200 hover:bg-white/8"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.7)",
              fontFamily: lang === "ar" ? "var(--font-cairo)" : "var(--font-space-mono)",
            }}
            aria-label="Toggle language"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleLang}
            className="px-2.5 py-1 rounded-md text-xs font-bold border transition-all duration-200"
            style={{
              borderColor: "rgba(255,255,255,0.2)",
              color: "rgba(255,255,255,0.6)",
            }}
            aria-label="Toggle language"
          >
            {lang === "en" ? "عربي" : "EN"}
          </button>
          <button
            className="text-white/70 hover:text-white p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-white/8 rounded-md py-3 px-4 flex flex-col gap-1" style={{ background: "rgba(10,15,46,0.98)" }}>
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/70 hover:text-white py-2.5 px-3 rounded-md text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 py-2.5 px-3 rounded-lg text-sm font-semibold text-white text-center"
            style={{ background: "var(--primary)" }}
          >
            {tx.cta}
          </Link>
        </div>
      )}
    </header>
  )
}
