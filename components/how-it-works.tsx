"use client"

import { ArrowDownToLine, BrainCircuit, Gavel, RefreshCcw } from "lucide-react"

const steps = [
  {
    icon: ArrowDownToLine,
    title: "Traffic Ingestion",
    desc: "Full carrier-grade traffic intake at Tbps scale across fixed and mobile networks",
  },
  {
    icon: BrainCircuit,
    title: "AI Classification",
    desc: "Multi-modal feature extraction and AI large model inference for 99% accurate app identification",
  },
  {
    icon: Gavel,
    title: "Policy Execution",
    desc: "Dynamic, real-time policy deployment with flexible service chain control and precise blocking",
  },
  {
    icon: RefreshCcw,
    title: "Closed-Loop Feedback",
    desc: "Live View monitoring feeds real-time data back for continuous model and policy optimization",
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-6 bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <div
            className="flex items-center justify-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--primary)" }}
          >
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
            Process Flow
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-balance" style={{ color: "#1F2937" }}>
            How InterKey DPI Works
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-[500px] mx-auto" style={{ color: "var(--muted-foreground)" }}>
            From packet ingestion to closed-loop governance: a seamless, AI-driven pipeline.
          </p>
        </div>

        {/* Steps */}
        <div className="reveal relative grid grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Connector line, desktop only */}
          <div
            className="hidden lg:block absolute top-9 left-[12%] right-[12%] h-px"
            style={{ background: "linear-gradient(90deg, transparent, var(--border-light, #C8CAE0) 20%, var(--border-light, #C8CAE0) 80%, transparent)" }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon
            return (
              <div key={step.title} className="group flex flex-col items-center text-center">
                <div
                  className="relative z-10 w-[72px] h-[72px] rounded-full border-2 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-105"
                  style={{
                    background: "white",
                    borderColor: "var(--border-light, #C8CAE0)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "var(--primary)"
                    el.style.borderColor = "var(--primary)"
                    el.style.boxShadow = "0 4px 20px rgba(18,62,221,0.3)"
                    el.querySelector("svg")!.style.color = "white"
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement
                    el.style.background = "white"
                    el.style.borderColor = "var(--border-light, #C8CAE0)"
                    el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.08)"
                    el.querySelector("svg")!.style.color = "var(--primary)"
                  }}
                >
                  <Icon size={24} style={{ color: "var(--primary)", transition: "color 0.3s" }} />
                </div>
                <h4 className="text-sm font-bold mb-2" style={{ color: "#1F2937" }}>
                  {step.title}
                </h4>
                <p className="text-[0.78rem] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  {step.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
