"use client"

import { Cpu, Radio, RefreshCcw, BarChart2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const icons = [Cpu, Radio, RefreshCcw, BarChart2]

export default function WhyInterkey() {
  const { lang } = useLanguage()
  const tx = translations.whyInterkey[lang]

  return (
    <section id="why-interkey" className="py-20 px-6" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <div
            className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--accent)" }}
          >
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--accent)" }} />
            {tx.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white text-balance">
            {tx.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-[560px]" style={{ color: "rgba(255,255,255,0.5)" }}>
            {tx.sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {tx.cards.map((card, i) => {
            const Icon = icons[i]
            return (
              <div
                key={card.title}
                className="reveal group flex gap-5 p-8 rounded-2xl border transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(92,207,247,0.22)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)"
                }}
              >
                <div
                  className="w-11 h-11 rounded-xl shrink-0 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, rgba(92,207,247,0.15), rgba(18,62,221,0.15))",
                  }}
                >
                  <Icon size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white mb-2">{card.title}</h4>
                  <p className="text-[0.825rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                    {card.desc}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
