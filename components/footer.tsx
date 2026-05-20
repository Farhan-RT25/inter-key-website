import Link from "next/link"

const homeLinks = [
  { label: "Overview", href: "/#hero" },
  { label: "Who It Serves", href: "/#use-cases" },
  { label: "Get in Touch", href: "/#contact" },
]

const productLinks = [
  { label: "Core Features", href: "/features#features" },
  { label: "Live View", href: "/features#live-view" },
  { label: "How It Works", href: "/features#how-it-works" },
  { label: "Why InterKey", href: "/features#why-interkey" },
]

const companyLinks = [
  { label: "Get in Touch", href: "#contact" },
  { label: "interkey.com.sa", href: "https://www.interkey.com.sa", external: true }
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
        <div className="grid md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 pb-8 mb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
          {/* Brand */}
          <div>
            <div className="mb-4">
              <img
                src="/images/SVG/Asset 1.svg"
                alt="InterKey Intelligent DPI"
                className="h-8 w-auto"
              />
            </div>
            <p className="text-[0.825rem] max-w-[260px] leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              AI-powered Deep Packet Inspection for ultra-large carrier-grade networks. A product of InterKey, Saudi Arabia&apos;s trusted ICT partner.
            </p>
          </div>

          {/* Home */}
          <div>
            <h5
              className="text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-4"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Home
            </h5>
            <ul className="space-y-1.5">
              {homeLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.825rem] transition-colors duration-200 hover:text-[#5CCFF7]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div>
            <h5
              className="text-[0.72rem] font-bold uppercase tracking-[0.1em] mb-4"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Product
            </h5>
            <ul className="space-y-1.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[0.825rem] transition-colors duration-200 hover:text-[#5CCFF7]"
                    style={{ color: "rgba(255,255,255,0.6)" }}
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
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Company
            </h5>
            <ul className="space-y-1.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  {link.external ? (
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[0.825rem] font-semibold transition-colors duration-200 hover:opacity-80 inline-flex items-center gap-1.5"
                      style={{ color: "var(--accent)" }}
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full inline-block"
                        style={{ background: "var(--accent)" }}
                      />
                      {link.label}
                    </Link>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-[0.825rem] transition-colors duration-200 hover:text-[#5CCFF7]"
                      style={{ color: "rgba(255,255,255,0.6)" }}
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[0.72rem]"
          style={{ color: "rgba(255,255,255,0.45)" }}
        >
          <span>© 2026 InterKey. All rights reserved.</span>
          <span>6897, King Fahd Road, Al Olaya District, 3388, Riyadh, Saudi Arabia</span>
        </div>
      </div>
    </footer>
  )
}
