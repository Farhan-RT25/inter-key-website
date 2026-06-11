"use client"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { translations } from "@/lib/translations"

const FORMSPREE_URL = "https://formspree.io/f/mwpogjka"

const ERR = {
  en: {
    required: "This field is required",
    email: "Please enter a valid email address",
    submitFail: "Sorry, there was an error sending your message. Please try again.",
  },
  ar: {
    required: "هذا الحقل مطلوب",
    email: "يرجى إدخال عنوان بريد إلكتروني صحيح",
    submitFail: "عذراً، حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.",
  },
}

type FieldName = "firstName" | "lastName" | "email" | "message"
type Fields = Record<FieldName, string>
type Errors = Partial<Record<FieldName, string>>

const EMPTY: Fields = { firstName: "", lastName: "", email: "", message: "" }

export default function CTAContact() {
  const { lang } = useLanguage()
  const tx = translations.contact[lang]
  const err = ERR[lang]

  const [fields, setFields] = useState<Fields>(EMPTY)
  const [errors, setErrors] = useState<Errors>({})
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [submitError, setSubmitError] = useState("")

  function validate(name: FieldName, value: string): string {
    if (!value.trim()) return err.required
    if (name === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return err.email
    return ""
  }

  function handleChange(name: FieldName, value: string) {
    setFields((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  function handleBlur(name: FieldName) {
    setErrors((prev) => ({ ...prev, [name]: validate(name, fields[name]) }))
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const newErrors: Errors = {}
    let valid = true
    for (const name of Object.keys(EMPTY) as FieldName[]) {
      const error = validate(name, fields[name])
      if (error) { newErrors[name] = error; valid = false }
    }
    setErrors(newErrors)
    if (!valid) return

    setSubmitting(true)
    setSubmitError("")

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: `${fields.firstName} ${fields.lastName}`,
          email: fields.email,
          message: fields.message,
          _subject: "New Contact Form Submission from Interkey Website",
        }),
      })
      if (!res.ok) throw new Error(`HTTP ${res.status}`)

      setSubmitted(true)
      setTimeout(() => {
        setSubmitted(false)
        setFields(EMPTY)
        setErrors({})
      }, 8000)
    } catch {
      setSubmitError(err.submitFail)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 px-6" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
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
                style={{ background: "var(--primary)", boxShadow: "0 0 32px rgba(18,62,221,0.5)" }}
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
            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)" }}
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
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <FormField
                    label={tx.firstName} type="text" placeholder={tx.firstPlaceholder}
                    value={fields.firstName} error={errors.firstName}
                    onChange={(v) => handleChange("firstName", v)}
                    onBlur={() => handleBlur("firstName")}
                  />
                  <FormField
                    label={tx.lastName} type="text" placeholder={tx.lastPlaceholder}
                    value={fields.lastName} error={errors.lastName}
                    onChange={(v) => handleChange("lastName", v)}
                    onBlur={() => handleBlur("lastName")}
                  />
                </div>
                <FormField
                  label={tx.email} type="email" placeholder={tx.emailPlaceholder}
                  value={fields.email} error={errors.email}
                  onChange={(v) => handleChange("email", v)}
                  onBlur={() => handleBlur("email")}
                />
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
                    value={fields.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    onBlur={() => handleBlur("message")}
                    onFocus={(e) => (e.currentTarget.style.borderColor = errors.message ? "rgba(239,68,68,0.7)" : "rgba(92,207,247,0.45)")}
                    className="w-full rounded-lg px-4 py-3 text-sm transition-colors outline-none resize-y"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid ${errors.message ? "rgba(239,68,68,0.7)" : "rgba(255,255,255,0.1)"}`,
                      color: "rgba(255,255,255,0.85)",
                      minHeight: 100,
                    }}
                  />
                  {errors.message && (
                    <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.9)" }} role="alert">
                      {errors.message}
                    </p>
                  )}
                </div>

                {submitError && (
                  <p className="text-sm text-center" style={{ color: "rgba(239,68,68,0.9)" }} role="alert">
                    {submitError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0"
                  style={{ background: "var(--primary)", boxShadow: "0 0 24px rgba(18,62,221,0.45)" }}
                >
                  <Send size={15} />
                  {submitting ? (lang === "en" ? "Sending…" : "جارٍ الإرسال…") : tx.submit}
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
  label, type, placeholder, value, error, onChange, onBlur,
}: {
  label: string
  type: string
  placeholder: string
  value: string
  error?: string
  onChange: (v: string) => void
  onBlur: () => void
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
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        onFocus={(e) => (e.currentTarget.style.borderColor = error ? "rgba(239,68,68,0.7)" : "rgba(92,207,247,0.45)")}
        className="w-full rounded-lg px-4 py-3 text-sm transition-colors outline-none"
        style={{
          background: "rgba(255,255,255,0.05)",
          border: `1px solid ${error ? "rgba(239,68,68,0.7)" : "rgba(255,255,255,0.1)"}`,
          color: "rgba(255,255,255,0.85)",
        }}
      />
      {error && (
        <p className="mt-1 text-xs" style={{ color: "rgba(239,68,68,0.9)" }} role="alert">
          {error}
        </p>
      )}
    </div>
  )
}
