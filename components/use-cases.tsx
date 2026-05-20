"use client"

import { TowerControl, Globe2, Landmark, Building2 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const icons = [TowerControl, Globe2, Landmark, Building2]

export default function UseCases() {
  const { lang } = useLanguage()
  const tx = translations.useCases[lang]

  return (
    <section id="use-cases" className="py-20 px-6 bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <div
            className="flex items-center justify-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--primary)" }}
          >
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
            {tx.label}
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold leading-tight text-balance"
            style={{ color: "#1F2937" }}
          >
            {tx.heading}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {tx.cases.map((uc, i) => {
            const Icon = icons[i]
            return (
              <div
                key={uc.title}
                className="reveal group border rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "#D1D5DB", background: "white" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "var(--primary)"
                  el.style.boxShadow = "0 4px 24px rgba(18,62,221,0.10)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "#D1D5DB"
                  el.style.boxShadow = "none"
                }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5"
                  style={{
                    background: "linear-gradient(135deg, rgba(18,62,221,0.08), rgba(92,207,247,0.08))",
                  }}
                >
                  <Icon size={26} style={{ color: "var(--primary)" }} />
                </div>
                <h4 className="text-sm font-bold mb-2" style={{ color: "#1F2937" }}>
                  {uc.title}
                </h4>
                <p className="text-[0.775rem] leading-relaxed" style={{ color: "#6B7280" }}>
                  {uc.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
