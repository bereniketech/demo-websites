# TASK-008 — Clinic: WhatsApp Float + GSAP Scroll Animations + Mobile Nav

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-00
**Skills:** build-website-web-app, cinematic-website-builder
**Depends on:** TASK-001 through TASK-007 (all clinic sections must be complete)

---

## Context

Final polish pass on the Clinic site. Three things:

1. **WhatsApp float** — wire up the real link and confirm it's visible and pulsing.
2. **GSAP ScrollTrigger** — ensure all `[data-animate]` sections actually animate in as the user scrolls. Verify the setup from TASK-003 is correct and working with the full page.
3. **Mobile nav** — hamburger opens/closes the overlay, links inside close it on click.

This task is also the QA checkpoint for the full Clinic site before moving to Real Estate.

---

## Files to Edit

- `clinic/index.html` — update WhatsApp float link
- `clinic/script.js` — verify/complete all JS (scroll animations, mobile nav, form logic all together)
- `clinic/style.css` — confirm float + nav overlay styles are present (from TASK-002)

---

## Detailed Instructions

### index.html — WhatsApp Float (update href)

Locate the `.whatsapp-float` anchor and set its `href`:
```html
<a href="https://wa.me/919XXXXXXXXX?text=Hello%20MediCare%20Clinic!%20I%27d%20like%20to%20book%20an%20appointment."
   class="whatsapp-float"
   target="_blank"
   rel="noopener noreferrer"
   aria-label="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp"></i>
</a>
```

### script.js — Full Final Version

Replace the entire `script.js` content with the complete, unified version:

```js
/* ─────────────────────────────────────────────
   MediCare Clinic — script.js
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

  // ── 5. BOOKING FORM — Validation + WhatsApp Submit ──
  const bookingForm = document.getElementById('bookingForm')

  if (bookingForm) {
    const fields = [
      { id: 'name',    errorId: 'nameError',    check: v => v.trim().length >= 2 },
      { id: 'phone',   errorId: 'phoneError',   check: v => /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim()) },
      { id: 'concern', errorId: 'concernError', check: v => v !== '' },
      { id: 'time',    errorId: 'timeError',    check: v => v !== '' },
    ]

    bookingForm.addEventListener('submit', e => {
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

      const name    = document.getElementById('name').value.trim()
      const phone   = document.getElementById('phone').value.trim()
      const concern = document.getElementById('concern').value
      const time    = document.getElementById('time').value

      const message =
        `Hello Dr. Anjali's Clinic! 🏥\n` +
        `I'd like to book an appointment.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Concern: ${concern}\n` +
        `Preferred Time: ${time}\n\n` +
        `Please confirm my slot. Thank you!`

      buildWhatsApp('919XXXXXXXXX', message)
    })

    // Clear errors on input
    bookingForm.querySelectorAll('input, select').forEach(input => {
      input.addEventListener('input', () => {
        input.classList.remove('error')
        const err = document.getElementById(input.id + 'Error')
        if (err) err.classList.remove('visible')
      })
    })
  }
})

// ── WHATSAPP HELPER ──
// All user values are passed through encodeURIComponent inside this function.
// Never write raw user input to innerHTML.
function buildWhatsApp(phone, message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
```

---

## Full Site QA Checklist (run before marking complete)

Open `clinic/index.html` in Chrome. Open DevTools Console.

**Console:**
- [ ] Zero errors on page load
- [ ] Zero 404s in Network tab (all CDN resources load)

**Hero:**
- [ ] Headline, sub, tag, CTA animate in sequentially on load
- [ ] CTA scrolls smoothly to `#booking`
- [ ] Scroll line animation visible at bottom of hero

**Nav:**
- [ ] Sticky — stays at top when scrolling
- [ ] Hamburger visible on mobile emulation (< 768px)
- [ ] Hamburger click opens full-screen overlay
- [ ] Overlay link click closes overlay + scrolls to section
- [ ] Hamburger animates to X when open

**Doctor:**
- [ ] Photo loads (Unsplash URL)
- [ ] Animates in on scroll
- [ ] 2-col on desktop, 1-col on mobile

**Services:**
- [ ] 3 cards, icon box turns green on hover
- [ ] Middle card has "Most Popular" badge

**Booking Form:**
- [ ] All 4 fields validate
- [ ] Empty submit → 4 red errors shown
- [ ] Valid submit → WhatsApp opens in new tab
- [ ] Message contains all 4 field values

**Testimonials:**
- [ ] 3 cards with stars and author initials
- [ ] Mobile: cards scroll horizontally

**Location:**
- [ ] Map iframe renders
- [ ] "Chat with Us" → WhatsApp
- [ ] "Call Now" → tel: link

**WhatsApp Float:**
- [ ] Visible bottom-right on all scroll positions
- [ ] Pulse animation active
- [ ] Click opens WhatsApp

**Mobile (emulate 375px):**
- [ ] No horizontal scroll
- [ ] All sections readable
- [ ] Form fields full-width

---

## Next Task
→ TASK-009: Build the complete Real Estate site (`real-estate/`).
