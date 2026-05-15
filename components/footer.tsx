import Link from "next/link"

const productLinks = [
  { label: "Core Features", href: "#features" },
  { label: "Live View", href: "#live-view" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Use Cases", href: "#use-cases" },
]

const companyLinks = [
  { label: "interkey.com.sa", href: "https://www.interkey.com.sa", external: true },
  { label: "InterKey Connect", href: "https://connect.interkey.com.sa", external: true },
  { label: "Get in Touch", href: "#contact" },
]

export default function Footer() {
  return (
    <footer
      className="px-6 pt-12 pb-6"
      style={{
        background: "#060A1E",
        borderTop: "1px solid rgba(255,255,255,0.07)",
      }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-[2fr_1fr_1fr] gap-10 pb-8 mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/images/SVG/Asset 12.svg"
                alt="InterKey Intelligent DPI"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-[0.825rem] max-w-[260px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>
              AI-powered Deep Packet Inspection for ultra-large carrier-grade networks. A product of InterKey, Saudi Arabia&apos;s trusted ICT partner.
            </p>
          </div>

          {/* Product */}
          <div>
            <h5
              className="text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Product
            </h5>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.825rem] transition-colors duration-200 hover:text-[#5CCFF7]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h5
              className="text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-4"
              style={{ color: "rgba(255,255,255,0.45)" }}
            >
              Company
            </h5>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-[0.825rem] transition-colors duration-200 hover:text-[#5CCFF7]"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem]"
          style={{ color: "rgba(255,255,255,0.22)" }}
        >
          <span>© 2026 InterKey. All rights reserved. A subsidiary of Interkey Company, Saudi Arabia.</span>
          <span>Riyadh · 6897, King Fahd Road, Al Olaya District</span>
        </div>
      </div>
    </footer>
  )
}
