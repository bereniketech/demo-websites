/* ─────────────────────────────────────────────
   MediCare Clinic — script.js
───────────────────────────────────────────── */

// Wait for GSAP to load (it's deferred)
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger)

  // ── 1. HERO ENTRANCE ANIMATION ──
  // Set starting positions for hero elements FIRST
  gsap.set(['#heroTag', '#heroHeadline', '#heroSub', '#heroCta'], { y: 30, opacity: 0 })

  // Fires on page load — no scroll trigger
  gsap.timeline()
    .to('#heroTag',      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.2)
    .to('#heroHeadline', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.45)
    .to('#heroSub',      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.65)
    .to('#heroCta',      { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' }, 0.8)

  // ── 2. SCROLL ANIMATIONS ──
  // Applied to all elements with data-animate attribute
  document.querySelectorAll('[data-animate]').forEach(el => {
    gsap.from(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none none'
      },
      y: 40,
      opacity: 0,
      duration: 0.75,
      ease: 'power2.out',
      stagger: 0.1
    })
  })

  // ── 3. SMOOTH SCROLL for anchor links ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const target = document.querySelector(anchor.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Close mobile nav if open
      document.body.classList.remove('nav-open')
    })
  })

  // ── 4. MOBILE NAV TOGGLE ──
  const hamburger = document.getElementById('hamburger')
  hamburger?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
  })

  // ── BOOKING FORM — Validation + WhatsApp submit ──
  const bookingForm = document.getElementById('bookingForm')

  if (bookingForm) {
    bookingForm.addEventListener('submit', e => {
      e.preventDefault()
      let valid = true

      const fields = [
        { id: 'name',    errorId: 'nameError',    check: v => v.trim().length >= 2 },
        { id: 'phone',   errorId: 'phoneError',   check: v => /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim()) },
        { id: 'concern', errorId: 'concernError', check: v => v !== '' },
        { id: 'time',    errorId: 'timeError',    check: v => v !== '' },
      ]

      fields.forEach(({ id, errorId, check }) => {
        const input = document.getElementById(id)
        const error = document.getElementById(errorId)
        if (!check(input.value)) {
          input.classList.add('error')
          error.classList.add('visible')
          valid = false
        } else {
          input.classList.remove('error')
          error.classList.remove('visible')
        }
      })

      if (!valid) return

      // Build WhatsApp message — values come from DOM, encoded before use
      const name    = document.getElementById('name').value.trim()
      const phone   = document.getElementById('phone').value.trim()
      const concern = document.getElementById('concern').value
      const time    = document.getElementById('time').value

      const message = `Hello Dr. Anjali's Clinic! 🏥\nI'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nConcern: ${concern}\nPreferred Time: ${time}\n\nPlease confirm my slot. Thank you!`

      buildWhatsApp('919XXXXXXXXX', message)
    })

    // Clear error state on input change
    bookingForm.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error')
        const errorEl = document.getElementById(input.id + 'Error')
        if (errorEl) errorEl.classList.remove('visible')
      })
    })
  }
})

// ── 5. WHATSAPP HELPER ──
function buildWhatsApp(phone, message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
