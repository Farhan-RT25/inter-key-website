"use client"

import { BrainCircuit, UserCheck, Network, Rocket } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const iconStyles = [
  { background: "linear-gradient(135deg, rgba(18,62,221,0.12), rgba(92,207,247,0.12))", color: "var(--primary)" },
  { background: "linear-gradient(135deg, rgba(92,207,247,0.12), rgba(0,229,160,0.12))", color: "#0EB89A" },
  { background: "linear-gradient(135deg, rgba(42,42,119,0.2), rgba(18,62,221,0.12))", color: "var(--secondary)" },
  { background: "linear-gradient(135deg, rgba(0,229,160,0.12), rgba(92,207,247,0.12))", color: "#059669" },
]

const icons = [BrainCircuit, UserCheck, Network, Rocket]

export default function Features() {
  const { lang } = useLanguage()
  const tx = translations.features[lang]

  return (
    <section id="features" className="py-20 px-6 bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <div
            className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--primary)" }}
          >
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
            {tx.label}
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-balance" style={{ color: "#1F2937" }}>
            {tx.heading}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {tx.items.map((f, i) => {
            const Icon = icons[i]
            return (
              <div
                key={f.title}
                className="reveal group relative rounded-2xl p-9 border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  borderColor: "var(--border-light, #C8CAE0)",
                  background: "white",
                }}
              >
                {/* Hover glow in corner */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "radial-gradient(circle, rgba(18,62,221,0.06) 0%, transparent 70%)",
                    transform: "translate(30%, 30%)",
                  }}
                />

                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6"
                  style={iconStyles[i]}
                >
                  <Icon size={26} />
                </div>

                <h3 className="text-lg font-bold mb-3" style={{ color: "#1F2937" }}>
                  {f.title}
                </h3>
                <p className="text-[0.875rem] leading-[1.7] mb-5" style={{ color: "var(--muted-foreground)" }}>
                  {f.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {f.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[0.68rem] font-semibold px-2.5 py-1 rounded-full"
                      style={{
                        background: "rgba(18,62,221,0.06)",
                        color: "var(--primary)",
                        border: "1px solid rgba(18,62,221,0.12)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
