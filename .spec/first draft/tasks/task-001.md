# TASK-001 — Clinic: Base HTML Structure + Nav

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-00, US-01
**Skills:** build-website-web-app, code-writing-software-development

---

## Context

This is the first task for the Clinic demo site. You are setting up the complete HTML skeleton — boilerplate, all CDN dependencies, the sticky nav, and empty section scaffolding. No CSS or JS logic yet — just the structure every later task will fill in.

The Clinic site is positioned as a trust-first appointment booking site for a family doctor. Tone: professional, clean, medical.

---

## Files to Create

- `clinic/index.html`

---

## Detailed Instructions

### 1. HTML Boilerplate
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>MediCare Clinic — Trusted Care for Your Family</title>
  ...
</head>
<body>
  ...
  <script src="script.js"></script>
</body>
</html>
```

### 2. CDN Links (in `<head>`, in this order)
```html
<!-- Google Fonts: Inter -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

<!-- Font Awesome 6 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

<!-- GSAP + ScrollTrigger (defer — loads after HTML parses) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>

<!-- Site stylesheet -->
<link rel="stylesheet" href="style.css" />
```

### 3. Sticky Nav
Structure:
```
<nav class="nav" id="nav">
  <div class="nav__inner">
    [Logo]  [nav links]  [CTA button]  [Hamburger]
  </div>
  <div class="nav__overlay" id="navOverlay">
    [Mobile menu links]
  </div>
</nav>
```

- Logo: `<a href="#" class="nav__logo">` — icon `fa-solid fa-heart-pulse` + text "MediCare Clinic"
- Nav links: Services (`#services`), About (`#doctor`), Contact (`#location`)
- CTA button: `<a href="#booking" class="btn-accent nav__cta">Book Appointment</a>`
- Hamburger: `<button class="nav__hamburger" id="hamburger">` with 3 `<span>` children (styled as lines in CSS)
- Mobile overlay: `<div class="nav__overlay" id="navOverlay">` containing same links + CTA

### 4. Section Scaffolding
Create all sections as empty shells with correct `id` attributes — content added in later tasks:

```html
<section id="hero" class="hero"></section>
<section id="doctor" class="section doctor"></section>
<section id="services" class="section services"></section>
<section id="booking" class="section booking"></section>
<section id="testimonials" class="section testimonials"></section>
<section id="location" class="section location"></section>
<footer class="footer"></footer>
```

### 5. WhatsApp Float Placeholder
```html
<a href="#" class="whatsapp-float" aria-label="Chat on WhatsApp">
  <i class="fa-brands fa-whatsapp"></i>
</a>
```
(Real link added in TASK-008)

### 6. script.js link
Place `<script src="script.js"></script>` as the last element before `</body>`.

---

## Acceptance Criteria

- [ ] Page opens in browser with no console errors (check DevTools)
- [ ] `<html lang="en">` and `<meta charset="UTF-8">` present
- [ ] `<meta name="viewport">` present (mobile rendering correct)
- [ ] All 4 CDN links in `<head>` (fonts, Font Awesome, GSAP x2)
- [ ] Nav renders with logo, 3 links, CTA button, hamburger
- [ ] Nav is sticky (verify by scrolling — stays at top)
- [ ] All 6 section IDs present in DOM: `hero`, `doctor`, `services`, `booking`, `testimonials`, `location`
- [ ] `<footer>` present
- [ ] WhatsApp float anchor present in DOM
- [ ] `script.js` linked at bottom of `<body>`

---

## Next Task
→ TASK-002: Write `clinic/style.css` — CSS foundation, design tokens, nav styles, responsive layout.
