"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${(i % 4) * 0.08}s`
            el.classList.add("visible")
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )

    function observe() {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) => observer.observe(el))
    }

    // Run immediately, then recheck after short delays to catch
    // elements added by client component hydration
    observe()
    const t1 = setTimeout(observe, 100)
    const t2 = setTimeout(observe, 400)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      observer.disconnect()
    }
  }, [])

  return null
}
