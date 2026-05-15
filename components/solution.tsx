import { BrainCircuit } from "lucide-react"

const metrics = [
  { val: "99%", lbl: "VPN Detection Rate" },
  { val: "≤1hr", lbl: "Blocking Latency" },
  { val: "300+", lbl: "VPN Variants Covered" },
  { val: "0.001%", lbl: "False Block Rate" },
]

export default function Solution() {
  return (
    <section
      id="solution"
      className="py-20 px-6"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="reveal">
            <div
              className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              <span className="w-6 h-0.5 inline-block" style={{ background: "var(--accent)" }} />
              The Solution
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-white text-balance mb-4">
              Introducing InterKey<br className="hidden sm:block" /> Intelligent DPI Solution
            </h2>
            <div className="space-y-3 text-[0.93rem] leading-[1.8]" style={{ color: "rgba(255,255,255,0.6)" }}>
              <p>
                InterKey Intelligent DPI is a next-generation, AI-native deep packet inspection platform
                built for the demands of ultra-large telecom networks. At its core lies an AI Traffic Large
                Model, not a bolt-on feature, but the engine of the entire system.
              </p>
              <p>
                By deeply integrating this model with a fully automatic online dial-up testing system, the
                solution extracts multi-modal feature information from application traffic and conducts
                professional AI model training, achieving results that conventional DPI has never matched.
              </p>
              <p>
                The outcome: accurate identification, effective classification, and efficient control of
                online content and applications, at global scale, in real time.
              </p>
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
                {/* Pulse rings */}
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: -10,
                    border: "1px solid rgba(92,207,247,0.3)",
                    animation: "pulse-ring 2s ease infinite",
                  }}
                />
                <div
                  className="absolute rounded-full"
                  style={{
                    inset: -20,
                    border: "1px solid rgba(92,207,247,0.15)",
                    animation: "pulse-ring 2s 0.5s ease infinite",
                  }}
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

              <h3 className="text-white text-lg font-bold mt-6 mb-2">AI Traffic Large Model</h3>
              <p className="text-sm" style={{ color: "rgba(255,255,255,0.45)" }}>
                Multi-modal feature extraction + automated model training
              </p>
            </div>

            {/* Metrics grid */}
            <div className="grid grid-cols-2 gap-3 relative">
              {metrics.map((m) => (
                <div
                  key={m.lbl}
                  className="rounded-xl p-4 text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <div className="font-mono text-2xl font-bold leading-none" style={{ color: "var(--accent)" }}>
                    {m.val}
                  </div>
                  <div className="text-[0.68rem] uppercase tracking-wider mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {m.lbl}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
