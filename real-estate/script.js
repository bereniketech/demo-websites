/* ─────────────────────────────────────────────
   LuxEstate — script.js
   All JS: GSAP animations, mobile nav, form logic
───────────────────────────────────────────── */

window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger)

  // ── 1. HERO ENTRANCE (fires on page load) ──
  gsap.set(['#heroTag', '#heroHeadline', '#heroSub', '#heroCta'], { y: 30, opacity: 0 })

  gsap.timeline()
    .to('#heroTag',      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.2)
    .to('#heroHeadline', { y: 0, opacity: 1, duration: 0.7, ease: 'power2.out' }, 0.45)
    .to('#heroSub',      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, 0.65)
    .to('#heroCta',      { y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.4)' }, 0.8)

  // ── 2. SCROLL ANIMATIONS ──
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

  // ── 3. SMOOTH SCROLL ──
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const id = anchor.getAttribute('href')
      const target = document.querySelector(id)
      if (!target || id === '#') return
      e.preventDefault()
      target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      document.body.classList.remove('nav-open')
    })
  })

  // ── 4. MOBILE NAV TOGGLE ──
  const hamburger = document.getElementById('hamburger')
  hamburger?.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
  })

  // Close overlay when any overlay link is clicked
  document.querySelectorAll('.nav__overlay a').forEach(link => {
    link.addEventListener('click', () => {
      document.body.classList.remove('nav-open')
    })
  })

  // ── 5. LEAD FORM — Validation + WhatsApp Submit ──
  const leadForm = document.getElementById('leadForm')

  if (leadForm) {
    const fields = [
      { id: 'name',   errorId: 'nameError',   check: v => v.trim().length >= 2 },
      { id: 'phone',  errorId: 'phoneError',  check: v => /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim()) },
      { id: 'budget', errorId: 'budgetError', check: v => v !== '' },
      { id: 'area',   errorId: 'areaError',   check: v => v !== '' },
    ]

    leadForm.addEventListener('submit', e => {
      e.preventDefault()
      let valid = true

      fields.forEach(({ id, errorId, check }) => {
        const input = document.getElementById(id)
        const error = document.getElementById(errorId)
        const passes = check(input.value)
        input.classList.toggle('error', !passes)
        error.classList.toggle('visible', !passes)
        if (!passes) valid = false
      })

      if (!valid) return

      const name   = document.getElementById('name').value.trim()
      const phone  = document.getElementById('phone').value.trim()
      const budget = document.getElementById('budget').value
      const area   = document.getElementById('area').value

      const message =
        `Hello! I'm interested in properties. 🏠\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Budget: ${budget}\n` +
        `Preferred Area: ${area}\n\n` +
        `Please share matching listings. Thank you!`

      buildWhatsApp('919XXXXXXXXX', message)
    })

    // Clear errors on input
    leadForm.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error')
        const err = document.getElementById(input.id + 'Error')
        if (err) err.classList.remove('visible')
      })
    })
  }
})

// ── WHATSAPP HELPERS ──
// All user values are passed through encodeURIComponent inside this function.
// Never write raw user input to innerHTML.

function enquireProperty(type, location, price) {
  const message =
    `Hi! I'm interested in the ${type} at ${location} (${price}). 🏡\n` +
    `Can we schedule a site visit?`
  buildWhatsApp('919XXXXXXXXX', message)
}

function buildWhatsApp(phone, message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
