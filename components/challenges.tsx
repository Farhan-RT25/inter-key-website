import { ShieldAlert, Server, BarChart3 } from "lucide-react"

const challenges = [
  {
    num: "CHALLENGE 01",
    icon: ShieldAlert,
    title: "Encrypted & Adversarial Traffic",
    desc: "VPN applications continuously evolve to evade detection, with 300+ variants in Android markets alone. They disguise traffic to mimic legitimate services, rendering traditional blocking methods ineffective.",
  },
  {
    num: "CHALLENGE 02",
    icon: Server,
    title: "Ultra-Large Network Scale",
    desc: "Carrier-grade networks carry traffic ranging from Tbps to dozens of Tbps. Effective governance demands network architectures with high performance, elastic scalability, and carrier-grade reliability.",
  },
  {
    num: "CHALLENGE 03",
    icon: BarChart3,
    title: "Real-Time Policy Control",
    desc: "Massive, highly concurrent traffic requires control policies capable of real-time deployment and dynamic adjustment, with live feedback loops to enable closed-loop governance and continuous optimization.",
  },
]

export default function Challenges() {
  return (
    <section id="challenges" className="py-20 px-6 bg-section">
      <div className="max-w-7xl mx-auto">
        <div className="reveal mb-12">
          <div className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] mb-3" style={{ color: "var(--primary)" }}>
            <span className="w-6 h-0.5 inline-block" style={{ background: "var(--primary)" }} />
            The Problem
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-balance" style={{ color: "var(--text-primary, #1F2937)" }}>
            Three Critical Challenges Facing<br className="hidden sm:block" /> Carrier-Grade Networks
          </h2>
          <p className="mt-3 text-sm leading-relaxed max-w-[560px]" style={{ color: "var(--muted-foreground)" }}>
            As digital transformation accelerates, telecom operators managing Tbps-scale traffic face challenges that traditional DPI technologies simply cannot solve.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {challenges.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.num}
                className="reveal group relative bg-white rounded-xl p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl overflow-hidden"
                style={{ borderColor: "var(--border-light, #C8CAE0)" }}
              >
                {/* Top accent line on hover */}
                <div
                  className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, var(--primary), var(--accent))" }}
                />

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
