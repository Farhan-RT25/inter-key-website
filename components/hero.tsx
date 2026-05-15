"use client"

import Link from "next/link"
import { useEffect, useRef } from "react"
import {
  CalendarCheck,
  ChevronDown,
  Cpu,
  ArrowDown,
  Shield,
  Zap,
  Activity,
  Server,
} from "lucide-react"

const stats = [
  { value: "99", suffix: "%", label: "Recognition Accuracy" },
  { value: "5", suffix: "9s", label: "Carrier-Grade Uptime" },
  { value: "≤1", suffix: "hr", label: "Blocking Precision" },
  { value: "1", suffix: "s", label: "Real-Time Monitoring" },
]

const floatingBadges = [
  { icon: Shield, label: "VPN Detection", sub: "99% accuracy", x: "5%", y: "18%" },
  { icon: Zap, label: "Real-Time", sub: "< 1s latency", x: "80%", y: "12%" },
  { icon: Activity, label: "Live View", sub: "Continuous", x: "75%", y: "72%" },
  { icon: Server, label: "Tbps Scale", sub: "Carrier-grade", x: "2%", y: "68%" },
]

export default function Hero() {
  const progressRef = useRef<HTMLDivElement>(null)

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
          style={{
            backgroundImage: "url('/images/hero-datacenter.jpg')",
          }}
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
        <div
          className="orb"
          style={{
            width: 500,
            height: 500,
            background: "rgba(18,62,221,0.28)",
            top: -120,
            right: -120,
          }}
        />
        <div
          className="orb"
          style={{
            width: 350,
            height: 350,
            background: "rgba(92,207,247,0.12)",
            bottom: 60,
            left: -60,
          }}
        />
        <div
          className="orb"
          style={{
            width: 260,
            height: 260,
            background: "rgba(0,229,160,0.09)",
            top: "40%",
            right: "15%",
          }}
        />

        {/* Floating badges */}
        {floatingBadges.map((b) => {
          const Icon = b.icon
          return (
            <div
              key={b.label}
              className="absolute hidden lg:flex items-center gap-2.5 px-3.5 py-2.5 rounded-xl backdrop-blur-sm animate-pulse"
              style={{
                left: b.x,
                top: b.y,
                background: "rgba(13,21,64,0.75)",
                border: "1px solid rgba(92,207,247,0.18)",
                animationDuration: "3s",
              }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(92,207,247,0.12)" }}
              >
                <Icon size={15} style={{ color: "var(--accent)" }} />
              </div>
              <div>
                <div className="text-white text-xs font-semibold leading-tight">{b.label}</div>
                <div className="text-white/45 text-[0.65rem] leading-tight">{b.sub}</div>
              </div>
            </div>
          )
        })}

        {/* Main content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
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
                AI-Powered Network Intelligence
              </div>

              <h1 className="text-4xl md:text-5xl xl:text-[3.4rem] font-extrabold leading-[1.08] text-white mb-5 text-balance">
                Redefining Control for{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, var(--accent), var(--accent2))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Ultra-Large Traffic
                </span>{" "}
                Networks
              </h1>

              <p className="text-white/60 text-base leading-relaxed mb-8 max-w-[480px]">
                InterKey Intelligent DPI integrates a breakthrough AI Traffic Large Model to achieve 99%
                recognition accuracy on encrypted and adversarial applications, enabling precise,
                real-time control at carrier scale.
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
                  <CalendarCheck size={16} />
                  Request a Demo
                </Link>
                <Link
                  href="#features"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white border transition-all duration-250 hover:bg-white/6 hover:-translate-y-0.5"
                  style={{ borderColor: "rgba(255,255,255,0.2)" }}
                >
                  <ArrowDown size={16} />
                  Explore Features
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
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="relative p-8 text-center group transition-all duration-300 hover:bg-white/6"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  {/* Gradient shimmer corner */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(92,207,247,0.06) 0%, transparent 60%)",
                    }}
                  />
                  <div className="relative">
                    <div
                      className="text-[2.4rem] font-extrabold leading-none font-mono"
                      style={{ color: "white" }}
                    >
                      <span style={{ color: "var(--accent)" }}>{s.value}</span>
                      {s.suffix}
                    </div>
                    <div
                      className="text-[0.7rem] uppercase tracking-wider mt-2 font-medium"
                      style={{ color: "var(--muted-foreground)" }}
                    >
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
          Scroll to explore
        </div>
      </section>
    </>
  )
}
