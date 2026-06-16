"use client"

import Image from "next/image"
import { BrainCircuit, Crosshair, ShieldCheck, Network, Globe } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function Solution() {
  const { lang } = useLanguage()
  const tx = translations.solution[lang]

  return (
    <section
      id="solution"
      className="py-20 px-4 md:px-4"
      style={{ background: "var(--bg-section)" }}
    >
      <div
        className="max-w-7xl mx-auto rounded-3xl px-8 py-16 md:px-14"
        style={{
          background: "var(--bg-card)",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <div
              className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              <span className="w-6 h-0.5 inline-block" style={{ background: "var(--accent)" }} />
              {tx.label}
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white text-balance mb-4">
              {tx.heading}
            </h2>
            <div className="space-y-3 text-[0.93rem] leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>
              <p>{tx.p1}</p>
              <p>{tx.p2}</p>
              <p>{tx.p3}</p>
            </div>
          </div>

          {/* Visual card */}
          <div
            className="reveal relative rounded-2xl p-8 overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Gradient shimmer */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "linear-gradient(135deg, rgba(18,62,221,0.1) 0%, transparent 60%)" }}
            />

            {/* AI circle */}
            <div className="relative text-center py-8">
              <div className="relative inline-flex items-center justify-center">
                <div
                  className="absolute rounded-full"
                  style={{ inset: -10, border: "1px solid rgba(92,207,247,0.3)", animation: "pulse-ring 2s ease infinite" }}
                />
                <div
                  className="absolute rounded-full"
                  style={{ inset: -20, border: "1px solid rgba(92,207,247,0.15)", animation: "pulse-ring 2s 0.5s ease infinite" }}
                />
                <div
                  className="w-28 h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, var(--primary), var(--secondary))",
                    boxShadow: "0 0 60px rgba(18,62,221,0.45)",
                  }}
                >
                  <BrainCircuit size={44} className="text-white" />
                </div>
              </div>

              <h3 className="text-white text-lg font-bold mt-6 mb-2">{tx.aiModelTitle}</h3>
              <p className="text-sm text-white/60">{tx.aiModelSub}</p>
            </div>

            {/* Metrics */}
            <div className="flex flex-col gap-3 relative">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(92,207,247,0.15), rgba(18,62,221,0.15))" }}
                  >
                    <Crosshair size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-2xl font-bold leading-none" style={{ color: "var(--accent)" }}>99%</div>
                    <div className="text-[0.62rem] uppercase tracking-wider mt-1 text-white/60">{tx.recognitionLabel}</div>
                  </div>
                </div>

                <div
                  className="rounded-xl p-4 flex items-center gap-3"
                  style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <div
                    className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                    style={{ background: "linear-gradient(135deg, rgba(92,207,247,0.15), rgba(18,62,221,0.15))" }}
                  >
                    <ShieldCheck size={20} style={{ color: "var(--accent)" }} />
                  </div>
                  <div className="min-w-0">
                    <div className="font-mono text-xl font-bold leading-none" style={{ color: "var(--accent)" }}>99.999%</div>
                    <div className="text-[0.62rem] uppercase tracking-wider mt-1 text-white/60">{tx.availabilityLabel}</div>
                  </div>
                </div>
              </div>

              <div
                className="rounded-xl p-4 flex items-center gap-5 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(92,207,247,0.15), rgba(18,62,221,0.15))" }}
                >
                  <Network size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-2xl font-bold leading-none" style={{ color: "var(--accent)" }}>
                    20000+<span className="text-lg">hr</span>
                  </div>
                  <div className="text-[0.62rem] uppercase tracking-wider mt-1 text-white/60">{tx.appsLabel}</div>
                </div>
                <div className={`absolute ${lang === 'ar' ? 'left-0' : 'right-0'} top-0 bottom-0 w-2/3 pointer-events-none`}>
                  <div className="absolute inset-0" style={{ zIndex: 1 }} />
                  <Image src="/images/map.png" alt="" fill className={`object-cover opacity-30 ${lang === 'ar' ? 'object-left' : 'object-right'}`} />
                </div>
              </div>

              <div
                className="rounded-xl p-4 flex items-center gap-5 relative overflow-hidden"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg shrink-0 flex items-center justify-center"
                  style={{ background: "linear-gradient(135deg, rgba(92,207,247,0.15), rgba(18,62,221,0.15))" }}
                >
                  <Globe size={20} style={{ color: "var(--accent)" }} />
                </div>
                <div className="relative z-10">
                  <div className="font-mono text-xl font-bold leading-tight">
                    <span style={{ color: "var(--accent)" }}>{tx.urlLibLine1}</span>
                    <br />
                    <span style={{ color: "var(--accent)" }}>{tx.urlLibLine2}</span>
                  </div>
                  <div className="text-[0.62rem] uppercase tracking-wider mt-1 text-white/60">{tx.urlLibLabel}</div>
                </div>
                <div className={`absolute ${lang === 'ar' ? 'left-0 right-60' : 'right-0 left-60'} top-0 bottom-0 pointer-events-none`}>
                  <div className="absolute inset-0" style={{ background: "transparent 50%)", zIndex: 1 }} />
                  <Image src="/images/world.png" alt="" fill className={`object-cover opacity-65 ${lang === 'ar' ? 'object-left' : 'object-right'}`} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
