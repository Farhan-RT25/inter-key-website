"use client"

import { useState } from "react"
import { Mail, Phone, Send } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const t = {
  en: {
    label: "Get Started",
    heading: "Ready to Take Control of Your Network?",
    sub: "Talk to our team about how InterKey Intelligent DPI can transform your network governance capability.",
    emailBtn: "Email Our Team",
    phone: "+966-11-2180999",
    firstName: "First Name",
    firstPlaceholder: "Ahmad",
    lastName: "Last Name",
    lastPlaceholder: "Al-Rashidi",
    email: "Business Email",
    emailPlaceholder: "you@company.com",
    org: "Organization",
    orgPlaceholder: "Telecom company, ISP, regulator…",
    role: "What best describes you?",
    rolePlaceholder: "Select your role…",
    roles: [
      "National Telecom Operator",
      "Internet Service Provider",
      "Government / Regulatory Body",
      "Enterprise Network Team",
      "Other",
    ],
    message: "Message",
    messagePlaceholder: "Tell us about your network scale, key challenges, or what you'd like to see in a demo…",
    submit: "Request a Demo",
    successTitle: "Request Received",
    successMsg: "Thank you! Our team will reach out within 1 business day.",
  },
  ar: {
    label: "ابدأ الآن",
    heading: "هل أنت مستعد للسيطرة على شبكتك؟",
    sub: "تحدث مع فريقنا حول كيفية تحويل InterKey Intelligent DPI لقدرات حوكمة شبكتك.",
    emailBtn: "راسل فريقنا",
    phone: "+966-11-2180999",
    firstName: "الاسم الأول",
    firstPlaceholder: "أحمد",
    lastName: "اسم العائلة",
    lastPlaceholder: "الراشدي",
    email: "البريد الإلكتروني للعمل",
    emailPlaceholder: "you@company.com",
    org: "المؤسسة",
    orgPlaceholder: "شركة اتصالات، مزود خدمة إنترنت، جهة تنظيمية…",
    role: "ما الذي يصفك بشكل أفضل؟",
    rolePlaceholder: "اختر دورك…",
    roles: [
      "مشغل اتصالات وطني",
      "مزود خدمة الإنترنت",
      "جهة حكومية / تنظيمية",
      "فريق شبكات المؤسسات",
      "أخرى",
    ],
    message: "الرسالة",
    messagePlaceholder: "أخبرنا عن حجم شبكتك، والتحديات الرئيسية، أو ما تريد رؤيته في العرض التوضيحي…",
    submit: "طلب عرض توضيحي",
    successTitle: "تم استلام طلبك",
    successMsg: "شكراً لك! سيتواصل معك فريقنا خلال يوم عمل واحد.",
  },
}

export default function CTAContact() {
  const [submitted, setSubmitted] = useState(false)
  const { lang } = useLanguage()
  const tx = t[lang]

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
              className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.15em] mb-4"
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
                <div>
                  <label
                    className="block text-[0.72rem] font-semibold uppercase tracking-wider mb-1.5"
                    style={{ color: "rgba(255,255,255,0.5)" }}
                  >
                    {tx.role}
                  </label>
                  <select
                    className="w-full rounded-lg px-4 py-3 text-sm transition-colors outline-none"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(92,207,247,0.45)")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                  >
                    <option value="" style={{ background: "#0D1540" }}>{tx.rolePlaceholder}</option>
                    {tx.roles.map((r) => (
                      <option key={r} style={{ background: "#0D1540" }}>{r}</option>
                    ))}
                  </select>
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
