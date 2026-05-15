"use client"

import { TowerControl, Globe2, Landmark, Building2 } from "lucide-react"

const cases = [
  {
    icon: TowerControl,
    title: "National Telecom Operators",
    desc: "Operators managing fixed and mobile networks at national scale, requiring unified, high-reliability content governance.",
  },
  {
    icon: Globe2,
    title: "Internet Service Providers",
    desc: "ISPs needing precise application classification and content filtering to meet national regulatory requirements.",
  },
  {
    icon: Landmark,
    title: "Regulatory Bodies",
    desc: "Government and regulatory agencies responsible for enforcing digital safety laws, including online minor protection mandates.",
  },
  {
    icon: Building2,
    title: "Enterprise Network Teams",
    desc: "Large enterprise and campus network operators requiring advanced traffic visibility, application control, and security governance.",
  },
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-14">
          <div
            className="flex items-center justify-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] mb-3"
            style={{ color: "var(--primary)" }}
          >
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
            Who It Serves
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
          </div>
          <h2
            className="text-3xl md:text-4xl font-extrabold leading-tight text-balance text-white"
          >
            Built for Network Operators<br className="hidden sm:block" /> and Governance Teams
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cases.map((uc) => {
            const Icon = uc.icon
            return (
              <div
                key={uc.title}
                className="reveal group border rounded-2xl p-7 text-center transition-all duration-300 hover:-translate-y-1"
                style={{ borderColor: "var(--border-light, #C8CAE0)", background: "white" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "var(--primary)"
                  el.style.boxShadow = "0 4px 24px rgba(18,62,221,0.10)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.borderColor = "var(--border-light, #C8CAE0)"
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
                <p className="text-[0.775rem] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
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
