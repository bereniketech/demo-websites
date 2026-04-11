# Tasks — Demo Websites Portfolio

Tasks are ordered by site, then by section. Each task is self-contained.
Implement sequentially within each site; sites can be built in parallel if using multiple agents.

---

## TASK-001 — Clinic: Base HTML structure + nav

_Requirements:_ US-00, US-01
_Skills:_ build-website-web-app, code-writing-software-development

Create `clinic/index.html` with:
- Full HTML5 boilerplate (lang, meta viewport, charset, title)
- CDN links in `<head>`: Google Fonts (Inter), Font Awesome 6, GSAP + ScrollTrigger
- Link to `style.css` and `script.js`
- Sticky nav: logo text "MediCare Clinic", links (Services, About, Contact), "Book Appointment" CTA button
- Hamburger button (mobile only, hidden on desktop via CSS)
- All section scaffolding as empty `<section id="...">` tags: hero, doctor, services, booking, testimonials, location, footer

**AC:**
- [ ] Page opens in browser with no console errors
- [ ] Nav is visible and sticks on scroll
- [ ] All section IDs present in DOM

---

## TASK-002 — Clinic: CSS foundation + design tokens

_Requirements:_ US-00
_Skills:_ build-website-web-app, ui-ux-pro-max

Create `clinic/style.css` with:
- CSS reset (`*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0 }`)
- Custom properties: `--primary: #0066CC`, `--accent: #00A86B`, `--bg: #F8FAFF`, `--text: #1A1A2A`, `--muted: #6B7280`, `--card-bg: #FFFFFF`
- Base styles: `body { font-family: 'Inter', sans-serif; background: var(--bg); color: var(--text) }`
- Nav styles: sticky, blur backdrop, primary bg at 95% opacity, flex layout
- Hamburger styles + mobile nav overlay (toggle via `.nav-open` class on body)
- Section wrapper: `max-width: 1200px; margin: 0 auto; padding: 80px 24px`
- Responsive breakpoints: 768px (tablet), 480px (mobile)
- Utility classes: `.btn-primary`, `.btn-accent`, `.section-title`, `.section-subtitle`, `.card`

**AC:**
- [ ] No horizontal scroll at any viewport width
- [ ] Nav collapses to hamburger below 768px
- [ ] CSS custom properties resolve correctly in browser DevTools

---

## TASK-003 — Clinic: Hero section

_Requirements:_ US-01
_Skills:_ build-website-web-app, cinematic-website-builder

In `clinic/index.html` hero section:
- Background image: `https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&q=80` with `rgba(0,0,0,0.5)` overlay
- Headline: "Trusted Care for Your Family"
- Subheadline: "Book a consultation with our experienced doctors today."
- CTA button: "Book Appointment" → scrolls to `#booking`

In `clinic/style.css`:
- Hero: `min-height: 100vh`, flexbox centered content, white text
- Headline: `clamp(2rem, 5vw, 3.5rem)`, bold
- CTA: `background: var(--accent)`, pill shape, hover lift effect

In `clinic/script.js`:
- GSAP entrance animation: hero headline + subheadline + CTA fade up on page load (no ScrollTrigger)
- Smooth scroll on CTA click

**AC:**
- [ ] Hero fills full viewport height
- [ ] Headline animates in on load
- [ ] CTA click scrolls smoothly to booking form

---

## TASK-004 — Clinic: Doctor profile section

_Requirements:_ US-02
_Skills:_ build-website-web-app

In `#doctor` section:
- Circular photo placeholder (`https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80`)
- Name: "Dr. Anjali Mehta, MBBS, MD"
- Tags: "15+ Years Experience", "General Medicine", "Skin Care"
- Credibility quote: "Providing compassionate, evidence-based care to families since 2009."
- Layout: image left, text right on desktop; stacked on mobile

**AC:**
- [ ] Photo is circular (border-radius: 50%)
- [ ] Layout stacks vertically on mobile
- [ ] Section animates in on scroll (data-animate)

---

## TASK-005 — Clinic: Services section

_Requirements:_ US-03
_Skills:_ build-website-web-app

In `#services` section:
- 3-column card grid
- Card 1: fa-stethoscope / General Consultation / "Expert diagnosis for common illnesses and chronic conditions."
- Card 2: fa-spa / Skin Treatment / "Advanced dermatology care for acne, pigmentation, and more."
- Card 3: fa-tooth / Dental Care / "Comprehensive dental services from cleaning to cosmetic procedures."
- Each card: icon (primary color, 2rem), title (bold), description, hover: lift + accent border-top

**AC:**
- [ ] 3 cards display in a row on desktop, stack on mobile
- [ ] Hover effect visible
- [ ] Cards animate in on scroll

---

## TASK-006 — Clinic: Booking form + WhatsApp logic

_Requirements:_ US-04
_Skills:_ build-website-web-app, whatsapp-automation

In `#booking` section:
- Form card (white, shadow, border-radius: 12px)
- Fields: Name (text), Phone (tel), Concern (select: General Consultation / Skin Issue / Dental / Other), Preferred Time (select: Morning 9–12 / Afternoon 12–5 / Evening 5–8)
- Submit button: "Book Consultation →"
- JS: on submit, validate all fields; if valid, call `buildWhatsApp('919XXXXXXXXX', message)` with template from design.md; if invalid, show inline error

**AC:**
- [ ] Empty field submission shows red border + error text
- [ ] Valid submission opens WhatsApp in new tab with pre-filled message
- [ ] Form does not reload the page on submit

---

## TASK-007 — Clinic: Testimonials + location + footer

_Requirements:_ US-05, US-06
_Skills:_ build-website-web-app

Testimonials (`#testimonials`):
- 3 cards: Ravi Sharma, Priya Nair, Arjun Patel (names, reviews, star ratings from design.md)
- Mobile: horizontal scroll (`overflow-x: auto; display: flex; gap: 16px`)

Location (`#location`):
- Google Maps iframe (Mumbai placeholder embed)
- Two buttons side by side: "Chat with Us" (WhatsApp) + "Call Now" (`tel:+91...`)

Footer:
- Logo, nav links, copyright "© 2025 MediCare Clinic. All rights reserved."

**AC:**
- [ ] 3 testimonial cards render with stars
- [ ] Mobile testimonials scroll horizontally
- [ ] Map iframe displays
- [ ] Call button triggers `tel:` on mobile

---

## TASK-008 — Clinic: WhatsApp float + GSAP scroll animations + mobile nav

_Requirements:_ US-00
_Skills:_ build-website-web-app, cinematic-website-builder

In `clinic/script.js`:
- GSAP ScrollTrigger: loop all `[data-animate]` elements, apply fade-up animation (`y:40, opacity:0, duration:0.7`)
- Add `data-animate` to: doctor, services cards, booking form, testimonials, location
- WhatsApp floating button: fixed bottom-right, pulse keyframe animation
- Mobile nav: hamburger click toggles `.nav-open` on body; overlay closes on link click

In `clinic/style.css`:
- `.whatsapp-float` styles + `@keyframes pulse`
- Nav overlay styles for mobile

**AC:**
- [ ] All sections animate in on scroll
- [ ] WhatsApp float visible on all pages, pulses
- [ ] Mobile hamburger opens/closes nav overlay
- [ ] No console errors

---

## TASK-009 — Real Estate: Full site build

_Requirements:_ US-07 – US-12
_Skills:_ build-website-web-app, cinematic-website-builder, whatsapp-automation, ui-ux-pro-max

Build `real-estate/index.html`, `style.css`, `script.js` following the same structure as Clinic tasks but with Real Estate design tokens and content from design.md:

**HTML sections:** Nav → Hero → Property Listings → Lead Form → Featured Properties → WhatsApp CTA → Areas + Map → Footer

**Key differences from Clinic:**
- Fonts: Playfair Display (headings) + Inter (body) via Google Fonts CDN
- Color tokens: charcoal + gold (from design.md)
- 4 property cards with image, type, price (₹), location, size, "View Details" WhatsApp button
- Lead form WhatsApp message template (from design.md)
- "View Details" per-card WhatsApp message with property details interpolated
- Featured Properties: 2 cards with gold "★ Featured" badge
- "Talk to Agent Now" full-width CTA strip (gold bg, dark text)
- Areas served: pill grid (Malad, Goregaon, Andheri, Borivali, Kandivali, Dahisar)
- Google Maps iframe
- WhatsApp float + GSAP scroll animations
- Mobile hamburger nav

**AC:**
- [ ] All 4 property cards render with correct data
- [ ] Lead form validates and opens WhatsApp with pre-filled message
- [ ] "View Details" opens WhatsApp with property-specific message
- [ ] Featured badge visible on 2 cards
- [ ] Areas pill grid renders
- [ ] GSAP animations fire on scroll
- [ ] WhatsApp float pulses
- [ ] No console errors
- [ ] Fully responsive at 320px, 768px, 1280px

---

## TASK-010 — Gym: Full site build

_Requirements:_ US-13 – US-19
_Skills:_ build-website-web-app, cinematic-website-builder, whatsapp-automation, ui-ux-pro-max

Build `gym/index.html`, `style.css`, `script.js` following the same structure but with Gym design tokens and content from design.md:

**HTML sections:** Nav → Hero → Trainer Profile → Programs → Booking Form → Before/After → Testimonials → Location & WhatsApp → Footer

**Key differences:**
- Fonts: Bebas Neue (headings, uppercase) + Inter (body)
- Color tokens: near-black bg, electric red accent, light text (dark site)
- Trainer profile: red-bordered circle photo, certifications
- 4 program cards: dark bg, red top border, icon + name + description
- Before/After: 3 cards each with 2 image placeholders ("BEFORE" / "AFTER" overlaid labels) + result stat
- Booking form: Goal dropdown (Fat Loss / Muscle Gain / Strength / Personal Training), Timing dropdown (Early Morning 5–8am / Morning 8–11am / Evening 5–9pm)
- WhatsApp message template with 💪 emoji from design.md
- 3 testimonials
- Google Maps + "Chat with Trainer" WhatsApp button
- WhatsApp float + GSAP scroll animations
- Mobile hamburger nav

**AC:**
- [ ] Dark theme renders correctly (light text on dark bg)
- [ ] 4 program cards with red top border
- [ ] 3 before/after cards with BEFORE/AFTER labels
- [ ] Booking form validates and opens WhatsApp
- [ ] GSAP animations fire on scroll
- [ ] WhatsApp float pulses
- [ ] No console errors
- [ ] Fully responsive at 320px, 768px, 1280px

---

## TASK-011 — Cross-site QA + git commit

_Requirements:_ US-00 (all sites)
_Skills:_ build-website-web-app, security-review

- Open all 3 sites in browser (Chrome + mobile emulation)
- Verify at 320px, 768px, 1280px viewports
- Test all WhatsApp links open correctly with pre-filled messages
- Test form validation on all 3 forms
- Check no `innerHTML` with user input anywhere in JS
- Check all `encodeURIComponent()` calls are present before WhatsApp URL construction
- Stage and commit: `git add clinic/ real-estate/ gym/ && git commit -m "feat: build all 3 demo websites"`
- Push to remote: `git push -u origin main`

**AC:**
- [ ] All 3 sites pass mobile emulation check
- [ ] All WhatsApp links work
- [ ] No XSS vectors (no raw user input in innerHTML)
- [ ] Git commit created and pushed to bereniketech/demo-websites
