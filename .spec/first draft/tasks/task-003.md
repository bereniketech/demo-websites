# TASK-003 — Clinic: Hero Section + GSAP Load Animation

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-01
**Skills:** build-website-web-app, cinematic-website-builder
**Depends on:** TASK-001 (index.html), TASK-002 (style.css)

---

## Context

Fill the `#hero` section with content and make it cinematic. The hero is the first thing every visitor sees — it must immediately communicate trust, professionalism, and a clear CTA to book an appointment. The GSAP entrance animation runs on page load (not scroll-triggered) and creates a polished first impression.

---

## Files to Edit

- `clinic/index.html` — fill `#hero` section
- `clinic/style.css` — hero styles
- `clinic/script.js` — create file, add GSAP load animation + smooth scroll

---

## Detailed Instructions

### index.html — Hero Content

Replace the empty `<section id="hero" class="hero">` with:

```html
<section id="hero" class="hero">
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <p class="hero__tag" id="heroTag">
      <i class="fa-solid fa-shield-halved"></i> Trusted by 5,000+ Patients
    </p>
    <h1 class="hero__headline" id="heroHeadline">
      Trusted Care for<br />Your Family
    </h1>
    <p class="hero__sub" id="heroSub">
      Book a consultation with our experienced doctors today.
    </p>
    <a href="#booking" class="btn-accent hero__cta" id="heroCta">
      Book Appointment <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</section>
```

### style.css — Hero Styles

```css
/* ── HERO ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-image: url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80');
  background-size: cover;
  background-position: center top;
  color: #fff;
  overflow: hidden;
}

.hero__overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    160deg,
    rgba(0, 50, 120, 0.72) 0%,
    rgba(0, 102, 204, 0.55) 100%
  );
}

.hero__content {
  position: relative;
  z-index: 2;
  max-width: 720px;
  padding: 0 24px;
}

.hero__tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.15);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255,255,255,0.3);
  border-radius: 50px;
  padding: 8px 20px;
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.04em;
  margin-bottom: 24px;
  opacity: 0;   /* GSAP controls visibility */
}

.hero__headline {
  font-size: clamp(2.2rem, 5.5vw, 3.8rem);
  font-weight: 700;
  line-height: 1.15;
  margin-bottom: 20px;
  opacity: 0;   /* GSAP controls visibility */
}

.hero__sub {
  font-size: clamp(1rem, 2vw, 1.2rem);
  color: rgba(255,255,255,0.88);
  margin-bottom: 36px;
  opacity: 0;   /* GSAP controls visibility */
}

.hero__cta {
  font-size: 1rem;
  padding: 16px 36px;
  opacity: 0;   /* GSAP controls visibility */
}

/* Scroll indicator at bottom */
.hero::after {
  content: '';
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  width: 2px;
  height: 48px;
  background: linear-gradient(to bottom, rgba(255,255,255,0.6), transparent);
  border-radius: 2px;
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% { opacity: 0.6; transform: translateX(-50%) scaleY(1); }
  50%       { opacity: 1;   transform: translateX(-50%) scaleY(1.2); }
}
```

### script.js — Create file

```js
/* ─────────────────────────────────────────────
   MediCare Clinic — script.js
───────────────────────────────────────────── */

// Wait for GSAP to load (it's deferred)
window.addEventListener('load', () => {
  gsap.registerPlugin(ScrollTrigger)

  // ── 1. HERO ENTRANCE ANIMATION ──
  // Fires on page load — no scroll trigger
  gsap.timeline()
    .to('#heroTag',      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.2)
    .to('#heroHeadline', { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out' }, 0.45)
    .to('#heroSub',      { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.65)
    .to('#heroCta',      { opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.4)' }, 0.8)

  // Set starting positions for hero elements
  gsap.set(['#heroTag', '#heroHeadline', '#heroSub', '#heroCta'], { y: 30 })

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
})

// ── 5. WHATSAPP HELPER ──
function buildWhatsApp(phone, message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank', 'noopener,noreferrer')
}
```

**Note on GSAP set/to order:** Call `gsap.set()` before the `.timeline()` so elements start at `y:30, opacity:0` and animate to their natural position.

---

## Acceptance Criteria

- [ ] Hero section fills 100% of viewport height (no scrollbar gap)
- [ ] Background image loads (Unsplash URL) with blue gradient overlay visible
- [ ] Trust badge, headline, subheadline, CTA all visible after 1 second
- [ ] Elements animate upward and fade in sequentially (tag → headline → sub → CTA)
- [ ] CTA button "Book Appointment" scrolls smoothly to `#booking` on click
- [ ] Scroll indicator line visible at bottom of hero (CSS animation)
- [ ] `script.js` exists and has no syntax errors (check DevTools console)
- [ ] `buildWhatsApp()` function defined and callable from console

---

## Next Task
→ TASK-004: Doctor profile section — photo, credentials, tags, quote.
