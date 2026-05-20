"use client"

import { useEffect } from "react"

export default function ScrollReveal() {
  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.style.transitionDelay = `${(i % 4) * 0.08}s`
            el.classList.add("visible")
            intersectionObserver.unobserve(el)
          }
        })
      },
      { threshold: 0.05, rootMargin: "0px 0px -40px 0px" }
    )

    function observe() {
      document.querySelectorAll(".reveal:not(.visible)").forEach((el) =>
        intersectionObserver.observe(el)
      )
    }

    observe()
    const t1 = setTimeout(observe, 100)
    const t2 = setTimeout(observe, 400)

    // Re-observe whenever the DOM changes (e.g. language toggle re-mounts cards)
    let rafId: number | null = null
    const mutationObserver = new MutationObserver(() => {
      if (rafId !== null) cancelAnimationFrame(rafId)
      rafId = requestAnimationFrame(observe)
    })
    mutationObserver.observe(document.body, { childList: true, subtree: true })

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
      if (rafId !== null) cancelAnimationFrame(rafId)
      intersectionObserver.disconnect()
      mutationObserver.disconnect()
    }
  }, [])

  return null
}
