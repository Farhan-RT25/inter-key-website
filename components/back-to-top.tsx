"use client"

import { useEffect, useState, useRef } from "react"

export default function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function update() {
      setVisible(window.scrollY > 300)

      const x = window.innerWidth - 48
      const y = window.innerHeight - 80
      const els = document.elementsFromPoint(x, y)

      for (const el of els) {
        if (wrapRef.current?.contains(el as Node)) continue
        const bg = getComputedStyle(el as Element).backgroundColor
        const m = bg.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*([\d.]+))?/)
        if (!m) continue
        const alpha = m[4] !== undefined ? parseFloat(m[4]) : 1
        if (alpha < 0.05) continue
        const lum = (0.299 * +m[1] + 0.587 * +m[2] + 0.114 * +m[3]) / 255
        setIsDark(lum < 0.4)
        break
      }
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    return () => window.removeEventListener("scroll", update)
  }, [])

  if (!visible) return null

  return (
    <div ref={wrapRef} className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-1.5">
      <span
        className="text-[0.65rem] font-bold tracking-wide transition-colors duration-300"
        style={{ color: isDark ? "rgba(255,255,255,0.7)" : "var(--primary)" }}
      >
        Back to Top
      </span>
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        aria-label="Back to top"
        className="flex items-center justify-center w-10 h-10 rounded-md shadow-lg transition-all duration-300"
        style={
          isDark
            ? { background: "var(--accent)", color: "#0A0F2E", boxShadow: "0 0 16px rgba(92,207,247,0.35)" }
            : { background: "var(--primary)", color: "#fff" }
        }
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 15l-6-6-6 6" />
        </svg>
      </button>
    </div>
  )
}
