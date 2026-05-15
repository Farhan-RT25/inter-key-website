const stats = [
  { val: "164", label: "Countries with enacted minor protection laws (ITU GCI)" },
  { val: "3.9M", label: "Malicious apps removed from Google Play in one year" },
  { val: "300+", label: "VPN app variants in the Android market alone" },
]

export default function Compliance() {
  return (
    <section id="compliance" className="py-16 px-6 bg-section">
      <div className="max-w-7xl mx-auto reveal">
        <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight text-balance" style={{ color: "#1F2937" }}>
              Aligned with Global Cyberspace Governance Standards
            </h2>
            <p className="text-sm leading-relaxed mt-3" style={{ color: "var(--muted-foreground)" }}>
              Building a clean and secure cyberspace is a global consensus. InterKey DPI is engineered to
              support operators in meeting the regulatory obligations that come with it.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-8">
            {stats.map((s) => (
              <div
                key={s.val}
                className="flex-1 pl-5"
                style={{ borderLeft: "3px solid var(--primary)" }}
              >
                <div
                  className="text-3xl font-extrabold font-mono leading-none"
                  style={{ color: "var(--primary)" }}
                >
                  {s.val}
                </div>
                <div className="text-[0.775rem] mt-1 leading-snug" style={{ color: "var(--muted-foreground)" }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
