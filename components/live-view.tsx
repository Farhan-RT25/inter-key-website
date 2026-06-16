"use client"

import { useEffect, useRef, useState } from "react"
import { Globe, TrendingUp, Sliders, Zap, Activity } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const icons = [Globe, TrendingUp, Sliders, Zap]

const BAR_HEIGHTS = [45, 62, 38, 71, 55, 80, 43, 67, 90, 52, 75, 60, 85, 48, 70, 58, 88, 42, 65, 78]

export default function LiveView() {
  const [bars, setBars] = useState(BAR_HEIGHTS)
  const [blockedCount, setBlockedCount] = useState(312)
  const [tbps, setTbps] = useState(12.4)
  const [accuracy, setAccuracy] = useState(99.1)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)
  const blockedRef = useRef<NodeJS.Timeout | null>(null)
  const tbpsRef = useRef<NodeJS.Timeout | null>(null)
  const accuracyRef = useRef<NodeJS.Timeout | null>(null)
  const { lang } = useLanguage()
  const tx = translations.liveView[lang]

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setBars(BAR_HEIGHTS.map(() => Math.floor(Math.random() * 70 + 20)))
    }, 1800)
    blockedRef.current = setInterval(() => {
      setBlockedCount(Math.floor(Math.random() * 400 + 200))
    }, 1200)
    tbpsRef.current = setInterval(() => {
      setTbps(Math.round((Math.random() * 3.6 + 11.2) * 10) / 10)
    }, 2000)
    accuracyRef.current = setInterval(() => {
      setAccuracy(Math.round((Math.random() * 0.6 + 98.8) * 10) / 10)
    }, 2500)
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
      if (blockedRef.current) clearInterval(blockedRef.current)
      if (tbpsRef.current) clearInterval(tbpsRef.current)
      if (accuracyRef.current) clearInterval(accuracyRef.current)
    }
  }, [])

  return (
    <section
      id="live-view"
      className="py-20 px-6 overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <div
              className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              <Activity size={12} style={{ animation: "live-blink 1.5s infinite" }} />
              {tx.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white text-balance mb-3">
              {tx.heading}
            </h2>
            <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.5)" }}>
              {tx.sub}
            </p>

            <div className="flex flex-col gap-4">
              {tx.items.map((item, i) => {
                const Icon = icons[i]
                return (
                  <div
                    key={item.title}
                    className="flex gap-4 items-start p-5 rounded-xl border transition-all duration-300 hover:bg-white/5"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      borderColor: "rgba(255,255,255,0.08)",
                    }}
                    onMouseEnter={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(92,207,247,0.2)"
                    }}
                    onMouseLeave={(e) => {
                      ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, rgba(92,207,247,0.15), rgba(18,62,221,0.15))" }}
                    >
                      <Icon size={17} style={{ color: "var(--accent)" }} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white mb-1">{item.title}</h4>
                      <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Dashboard mockup */}
          <div className="reveal">
            <div
              className="rounded-2xl p-6"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-2 text-sm font-semibold text-white">
                  <Activity size={15} style={{ color: "var(--accent)" }} />
                  {tx.dashTitle}
                </div>
                <div
                  className="flex items-center gap-1.5 text-[0.65rem] font-bold uppercase tracking-wider font-mono"
                  style={{ color: "var(--accent2)" }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full inline-block"
                    style={{ background: "var(--accent2)", animation: "live-blink 1.5s ease-in-out infinite" }}
                  />
                  {tx.dashLab}
                </div>
              </div>

              {/* Bar chart */}
              <div className="flex items-end gap-1 h-24 mb-5">
                {bars.map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm transition-all duration-700"
                    style={{
                      height: `${h}%`,
                      background: "linear-gradient(to top, #0a2596, #1456ff)",
                    }}
                  />
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="font-mono text-base font-bold" style={{ color: "var(--accent2)" }}>
                    {blockedCount}
                  </div>
                  <div className="text-[0.6rem] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {tx.dashBlocked}
                  </div>
                </div>
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="font-mono text-base font-bold" style={{ color: "var(--accent)" }}>
                    {tbps} Tbps
                  </div>
                  <div className="text-[0.6rem] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {tx.dashTraffic}
                  </div>
                </div>
                <div
                  className="rounded-lg p-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div className="font-mono text-base font-bold text-white">{accuracy}%</div>
                  <div className="text-[0.6rem] uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
                    {tx.dashAccuracy}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
