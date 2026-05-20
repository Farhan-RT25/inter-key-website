"use client"

import { useState, useRef } from "react"
import { Mail, Phone, Send, ChevronDown, Check } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

export default function CTAContact() {
  const [submitted, setSubmitted] = useState(false)
  const [roleValue, setRoleValue] = useState("")
  const [roleOpen, setRoleOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { lang } = useLanguage()
  const tx = translations.contact[lang]

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6"
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left column: info */}
          <div className="reveal">
            <div
              className="flex items-center gap-2 text-[0.75rem] font-bold uppercase tracking-[0.15em] mb-4"
              style={{ color: "var(--accent)" }}
            >
              <span className="w-6 h-0.5 inline-block" style={{ background: "var(--accent)" }} />
              {tx.label}
              <span className="w-6 h-0.5 inline-block" style={{ background: "var(--accent)" }} />
            </div>

            <h2 className="text-3xl md:text-[2.75rem] font-extrabold text-white text-balance leading-tight mb-4">
              {tx.heading}
            </h2>

            <p className="text-base mb-10 max-w-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              {tx.sub}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:info@interkey.com.sa"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-250 hover:-translate-y-0.5"
                style={{
                  background: "var(--primary)",
                  boxShadow: "0 0 32px rgba(18,62,221,0.5)",
                }}
              >
                <Mail size={16} />
                {tx.emailBtn}
              </a>
              <a
                href="tel:+966112180999"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm font-semibold text-white border transition-all duration-250 hover:bg-white/6 hover:-translate-y-0.5"
                style={{ borderColor: "rgba(255,255,255,0.2)" }}
              >
                <Phone size={16} />
                {tx.phone}
              </a>
            </div>
          </div>

          {/* Right column: form */}
          <div
            className="reveal rounded-2xl p-8 md:p-10"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                  style={{ background: "rgba(0,229,160,0.15)" }}
                >
                  <Send size={28} style={{ color: "var(--accent2)" }} />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{tx.successTitle}</h3>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
                  {tx.successMsg}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField label={tx.firstName} type="text" placeholder={tx.firstPlaceholder} required />
                  <FormField label={tx.lastName} type="text" placeholder={tx.lastPlaceholder} required />
                </div>
                <FormField label={tx.email} type="email" placeholder={tx.emailPlaceholder} required />
                <FormField label={tx.org} type="text" placeholder={tx.orgPlaceholder} />
                {/* Custom role dropdown */}
                <div>
                  <label
                    className="block text-[0.72rem] font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {tx.role}
                  </label>
                  <div
                    ref={dropdownRef}
                    className="relative"
                    onBlur={(e) => {
                      if (!dropdownRef.current?.contains(e.relatedTarget as Node)) setRoleOpen(false)
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setRoleOpen((v) => !v)}
                      className="w-full flex items-center justify-between rounded-lg px-4 py-3 text-sm text-left transition-all duration-200 outline-none"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: `1px solid ${roleOpen ? "rgba(92,207,247,0.45)" : "rgba(255,255,255,0.1)"}`,
                        color: roleValue ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.35)",
                      }}
                    >
                      <span>{roleValue || tx.rolePlaceholder}</span>
                      <ChevronDown
                        size={15}
                        className="shrink-0 transition-transform duration-200"
                        style={{
                          color: "rgba(255,255,255,0.4)",
                          transform: roleOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      />
                    </button>

                    {roleOpen && (
                      <div
                        className="absolute z-50 w-full mt-1.5 rounded-xl overflow-hidden py-1"
                        style={{
                          background: "#0D1540",
                          border: "1px solid rgba(255,255,255,0.12)",
                          boxShadow: "0 16px 40px rgba(0,0,0,0.5)",
                        }}
                      >
                        {tx.roles.map((r) => {
                          const selected = r === roleValue
                          return (
                            <button
                              key={r}
                              type="button"
                              onClick={() => { setRoleValue(r); setRoleOpen(false) }}
                              className="w-full flex items-center justify-between px-4 py-2.5 text-sm text-left transition-colors duration-150"
                              style={{
                                color: selected ? "var(--accent)" : "rgba(255,255,255,0.7)",
                                background: selected ? "rgba(92,207,247,0.07)" : "transparent",
                              }}
                              onMouseEnter={(e) => { if (!selected) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)" }}
                              onMouseLeave={(e) => { if (!selected) (e.currentTarget as HTMLElement).style.background = "transparent" }}
                            >
                              <span>{r}</span>
                              {selected && <Check size={13} style={{ color: "var(--accent)" }} />}
                            </button>
                          )
                        })}
                      </div>
                    )}
                    <input type="hidden" name="role" value={roleValue} />
                  </div>
                </div>
                <div>
                  <label
                    className="block text-[0.72rem] font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {tx.message}
                  </label>
                  <textarea
                    rows={4}
                    placeholder={tx.messagePlaceholder}
                    className="w-full rounded-lg px-4 py-3 text-sm transition-colors outline-none resize-y"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.85)",
                      minHeight: 100,
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(92,207,247,0.45)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "var(--primary)",
                    boxShadow: "0 0 24px rgba(18,62,221,0.45)",
                  }}
                >
                  <Send size={15} />
                  {tx.submit}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}

function FormField({
  label,
  type,
  placeholder,
  required,
}: {
  label: string
  type: string
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label
        className="block text-[0.72rem] font-semibold uppercase tracking-wider mb-1.5"
        style={{ color: "rgba(255,255,255,0.5)" }}
      >
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-lg px-4 py-3 text-sm transition-colors outline-none"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          color: "rgba(255,255,255,0.85)",
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(92,207,247,0.45)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
      />
    </div>
  )
}
