"use client"

import { ShieldAlert, Server, BarChart3 } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const icons = [ShieldAlert, Server, BarChart3]

export default function Challenges() {
  const { lang } = useLanguage()
  const tx = translations.challenges[lang]

  return (
    <section id="challenges" className="py-20 px-6 bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <div className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: "var(--primary)" }}>
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
            {tx.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-balance" style={{ color: "var(--text-primary, #1F2937)" }}>
            {tx.heading}
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-[560px]" style={{ color: "var(--muted-foreground)" }}>
            {tx.sub}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tx.items.map((c, i) => {
            const Icon = icons[i]
            return (
              <div
                key={c.num}
                className="reveal relative rounded-xl p-8 -translate-y-1 shadow-xl overflow-hidden"
                style={{ borderColor: "var(--border-light, #C8CAE0)" }}
              >
                {/* Top accent line */}
                {/* <div
                  className="absolute top-0 left-0 right-0 h-[3px]"
                  style={{ background: "var(--primary)" }}
                /> */}

                <div
                  className="inline-block text-[0.68rem] font-bold font-mono tracking-wider px-2.5 py-1 rounded mb-4"
                  style={{ background: "rgba(18,62,221,0.06)", color: "var(--primary)" }}
                >
                  {c.num}
                </div>

                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ background: "linear-gradient(135deg, rgba(18,62,221,0.1), rgba(92,207,247,0.1))" }}
                >
                  <Icon size={22} style={{ color: "var(--primary)" }} />
                </div>

                <h3 className="text-base font-bold mb-3" style={{ color: "#1F2937" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-[1.7]" style={{ color: "var(--muted-foreground)" }}>
                  {c.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
