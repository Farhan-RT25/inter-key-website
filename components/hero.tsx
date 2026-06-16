"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import { CalendarCheck, ChevronDown, Cpu } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function Hero() {
  const progressRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()
  const tx = translations.hero[lang]

  useEffect(() => {
    const onScroll = () => {
      const progress =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100
      if (progressRef.current) {
        progressRef.current.style.width = progress + "%"
      }
    }
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 h-[3px] z-9999 transition-[width] duration-100"
        style={{ background: "linear-gradient(90deg, var(--accent), var(--accent2))", width: "0%" }}
      />

      <section
        id="hero"
        className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-24 pb-16"
        style={{ background: "var(--bg-dark)" }}
      >
        {/* Data-center background image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-datacenter.jpg')" }}
        />
        {/* Dark overlay with gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(120deg, rgba(10,15,46,0.97) 0%, rgba(10,15,46,0.88) 50%, rgba(18,62,221,0.25) 100%)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(92,207,247,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(92,207,247,0.04) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Glow orbs */}
        <div className="orb" style={{ width: 500, height: 500, background: "rgba(18,62,221,0.28)", top: -120, right: -120 }} />
        <div className="orb" style={{ width: 350, height: 350, background: "rgba(92,207,247,0.12)", bottom: 60, left: -60 }} />
        <div className="orb" style={{ width: 260, height: 260, background: "rgba(0,229,160,0.09)", top: "40%", right: "15%" }} />

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column */}
            <div style={{ animation: "fadeUp 0.7s ease both" }}>
              {/* Badge */}
              <div
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-6"
                style={{
                  background: "rgba(92,207,247,0.1)",
                  border: "1px solid rgba(92,207,247,0.28)",
                  color: "var(--accent)",
                }}
              >
                <Cpu size={11} />
                {tx.badge}
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.08] text-white mb-5 text-balance">
                {tx.h1pre}{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {tx.h1highlight}
                </span>
                {tx.h1post && <>{" "}{tx.h1post}</>}
              </h1>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-[480px]">
                {tx.sub}
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-250 hover:-translate-y-0.5"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 0 32px rgba(18,62,221,0.5)",
                  }}
                >
                  <CalendarCheck size={20} />
                  {tx.requestDemo}
                </Link>
                <Link
                  href="/features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white border transition-all duration-250 hover:bg-white/6 hover:-translate-y-0.5"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  {tx.exploreFeatures}
                </Link>
              </div>
            </div>

            {/* Right column — Stats grid */}
            <div
              className="grid grid-cols-2 gap-px rounded-2xl overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.08)",
                animation: "fadeUp 0.7s 0.25s ease both",
              }}
            >
              {tx.stats.map((s) => (
                <div
                  key={s.label}
                  className="relative p-4 sm:p-8 text-center group transition-all duration-300 hover:bg-white/6"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(92,207,247,0.06) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <div
                      className="text-[1.4rem] sm:text-[2.4rem] font-extrabold leading-none font-mono"
                      style={{ color: "white" }}
                    >
                      <span style={{ color: "var(--accent)" }}>{s.value}</span>
                      {s.suffix}
                    </div>
                    <div className="text-[0.6rem] sm:text-[0.7rem] uppercase tracking-wider mt-2 font-medium text-white/60 leading-tight">
                      {s.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 flex flex-col items-center gap-2 text-white/30 text-[0.65rem] uppercase tracking-widest"
          style={{ animation: "scroll-bounce 2s infinite", transform: "translateX(-50%)" }}
        >
          <ChevronDown size={18} />
          {tx.scrollHint}
        </div>
      </section>
    </>
  )
}
