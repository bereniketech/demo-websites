# TASK-009 — Real Estate: Full Site Build

**Site:** `real-estate/`
**Status:** pending
**Requirements:** US-07 – US-12
**Skills:** build-website-web-app, cinematic-website-builder, whatsapp-automation, ui-ux-pro-max
**Depends on:** TASK-008 (Clinic complete — use it as the reference pattern)

---

## Context

Build the complete Real Estate demo site in one task. The Clinic site (TASK-001 to 008) is your structural reference — same 3-file pattern, same GSAP setup, same form + WhatsApp logic. What's different:

- **Tone:** Premium, aspirational, metropolitan. This site sells a feeling of wealth and trust, not clinical safety.
- **Palette:** Deep charcoal + gold (not blue + green).
- **Fonts:** Playfair Display (serif headings) for luxury feel + Inter (body).
- **New sections:** Property listing cards with per-card WhatsApp enquiry, Featured Properties badge, WhatsApp Agent CTA strip, Areas Served pill grid.
- **No doctor profile equivalent** — replaced by the property listings grid.

---

## Files to Create

- `real-estate/index.html`
- `real-estate/style.css`
- `real-estate/script.js`

---

## Design Tokens

```css
:root {
  --primary:  #1A1A2E;   /* Deep charcoal */
  --accent:   #C9A84C;   /* Gold */
  --bg:       #F5F5F0;   /* Warm off-white */
  --text:     #1A1A2E;
  --muted:    #8A8A8A;
  --card-bg:  #FFFFFF;
  --border:   #E8E4D9;
  --shadow:   0 4px 24px rgba(26, 26, 46, 0.08);
  --radius:   12px;
  --radius-sm:8px;
  --transition: 0.25s ease;
}
```

---

## Detailed Instructions

### index.html

Full page structure:

```
DOCTYPE / head / CDN links (Inter + Playfair Display, Font Awesome, GSAP)
└── body
    ├── <nav class="nav"> — logo "LuxEstate", links, CTA "Get Listings"
    ├── <section id="hero"> — cinematic hero
    ├── <section id="listings"> — 4 property cards
    ├── <section id="lead-form"> — lead capture form
    ├── <section id="featured"> — 2 featured property cards
    ├── <section id="agent-cta"> — full-width WhatsApp CTA strip
    ├── <section id="areas"> — areas served + map
    ├── <footer> — logo, links, copyright
    └── .whatsapp-float
```

#### Nav
- Logo: `<i class="fa-solid fa-building"></i> LuxEstate`
- Links: Listings (`#listings`), Featured (`#featured`), Areas (`#areas`), Contact (`#agent-cta`)
- CTA: "Get Listings" → `#lead-form`
- Nav bg: `rgba(26, 26, 46, 0.96)` (charcoal)

#### Hero
- Background image: `https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&q=80`
- Overlay: `linear-gradient(160deg, rgba(26,26,46,0.82) 0%, rgba(26,26,46,0.55) 100%)`
- Trust badge: "Mumbai's #1 Property Consultants"
- Headline: "Find Your Dream Home in Mumbai"
- Subheadline: "Premium apartments, villas & commercial spaces across Mumbai's finest localities."
- CTA: "Get Property Listings" → `#lead-form`
- GSAP entrance: same pattern as Clinic (tag → headline → sub → CTA)

#### Property Listings (4 cards)

Section header: "Properties", subtitle: "Handpicked listings across Mumbai's most sought-after localities."

Property data:
```
1. Type: 2BHK Apartment  | Price: ₹85 Lakhs   | Location: Malad West   | Size: 750 sq ft  | Image: photo-1545324418-cc1a3fa10c00
2. Type: 3BHK Apartment  | Price: ₹1.4 Crore  | Location: Goregaon East| Size: 1100 sq ft | Image: photo-1522708323590-d24dbb6b0267
3. Type: 4BHK Villa      | Price: ₹2.8 Crore  | Location: Andheri West  | Size: 2200 sq ft | Image: photo-1600585154340-be6161a56a0c
4. Type: Studio Apartment| Price: ₹42 Lakhs   | Location: Kandivali East| Size: 380 sq ft  | Image: photo-1502672260266-1c1ef2d93688
```
Unsplash base URL: `https://images.unsplash.com/{photo-id}?w=600&q=80`

Each card structure:
```html
<div class="card property-card" data-animate>
  <div class="property-card__img-wrap">
    <img src="..." alt="..." loading="lazy" />
    <span class="property-card__tag">For Sale</span>
  </div>
  <div class="property-card__body">
    <div class="property-card__price">₹85 Lakhs</div>
    <h3 class="property-card__type">2BHK Apartment</h3>
    <p class="property-card__location"><i class="fa-solid fa-location-dot"></i> Malad West, Mumbai</p>
    <div class="property-card__meta">
      <span><i class="fa-solid fa-ruler-combined"></i> 750 sq ft</span>
      <span><i class="fa-solid fa-bed"></i> 2 BHK</span>
    </div>
    <button class="btn-accent property-card__btn"
            onclick="enquireProperty('2BHK Apartment', 'Malad West', '₹85 Lakhs')">
      View Details <i class="fa-brands fa-whatsapp"></i>
    </button>
  </div>
</div>
```

Cards layout: `grid-template-columns: repeat(2, 1fr)` on desktop (4 cards = 2×2 grid), 1 column on mobile.

#### Lead Capture Form
Section label: "Get Personalised Listings", heading: "Tell Us What You're Looking For"

Fields:
- Full Name (text)
- Phone Number (tel)
- Budget Range (select): Under ₹50L / ₹50L – ₹1Cr / ₹1Cr – ₹2Cr / ₹2Cr+
- Preferred Area (select): Malad / Goregaon / Andheri / Borivali / Kandivali / Other

Submit: "Get Personalised Listings →"

WhatsApp message:
```
Hello! I'm interested in properties. 🏠

Name: {name}
Phone: {phone}
Budget: {budget}
Preferred Area: {area}

Please share matching listings. Thank you!
```

Form background: section bg `var(--bg)`, form card: white.

#### Featured Properties (2 cards)
Section: "Handpicked just for you"
Use 2 of the 4 property card images (cards 2 & 3 — higher value). Add gold "★ Featured" badge top-left of image. Apply elevated shadow `0 8px 32px rgba(201,168,76,0.2)`.

```html
<div class="property-card__featured-badge">★ Featured</div>
```

#### WhatsApp Agent CTA Strip
Full-width section, gold background:
```html
<section id="agent-cta" class="agent-cta">
  <div class="container agent-cta__inner">
    <div>
      <h2>Ready to find your perfect property?</h2>
      <p>Our agents are online now — get personalised guidance in minutes.</p>
    </div>
    <a href="https://wa.me/919XXXXXXXXX?text=Hi!%20I%27m%20looking%20for%20a%20property%20in%20Mumbai.%20Can%20you%20help?"
       class="btn-dark" target="_blank" rel="noopener noreferrer">
      <i class="fa-brands fa-whatsapp"></i> Talk to Agent Now
    </a>
  </div>
</section>
```
Style: `background: var(--accent)`, text: `var(--primary)`, `.btn-dark`: dark button on gold bg.

#### Areas Served + Map
Areas pill grid:
```html
<div class="areas__pills">
  <span class="area-pill">Malad</span>
  <span class="area-pill">Goregaon</span>
  <span class="area-pill">Andheri</span>
  <span class="area-pill">Borivali</span>
  <span class="area-pill">Kandivali</span>
  <span class="area-pill">Dahisar</span>
</div>
```
Map iframe: same Mumbai embed as Clinic.

---

## style.css Key Styles

```css
/* Property card image */
.property-card__img-wrap {
  position: relative;
  height: 220px;
  overflow: hidden;
  border-radius: var(--radius) var(--radius) 0 0;
}
.property-card__img-wrap img {
  width: 100%; height: 100%; object-fit: cover;
  transition: transform 0.4s ease;
}
.property-card:hover .property-card__img-wrap img { transform: scale(1.05); }

.property-card__tag {
  position: absolute; top: 14px; left: 14px;
  background: var(--accent); color: #fff;
  font-size: 0.72rem; font-weight: 700;
  padding: 5px 12px; border-radius: 50px;
}

.property-card__price {
  font-size: 1.3rem; font-weight: 700;
  color: var(--accent);
  font-family: 'Playfair Display', serif;
}

.property-card__meta {
  display: flex; gap: 16px;
  font-size: 0.8rem; color: var(--muted);
}

/* Area pills */
.areas__pills { display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px; }
.area-pill {
  padding: 8px 20px; border-radius: 50px;
  background: var(--card-bg); border: 1.5px solid var(--accent);
  color: var(--primary); font-size: 0.875rem; font-weight: 600;
}

/* Agent CTA strip */
.agent-cta { background: var(--accent); padding: 64px 0; }
.agent-cta__inner {
  display: flex; align-items: center;
  justify-content: space-between; gap: 32px; flex-wrap: wrap;
}
.agent-cta h2 { font-size: 1.8rem; color: var(--primary); }
.agent-cta p  { color: rgba(26,26,46,0.75); margin-top: 8px; }
.btn-dark {
  background: var(--primary); color: #fff;
  padding: 14px 28px; border-radius: 50px;
  font-weight: 600; display: inline-flex; gap: 8px; align-items: center;
  transition: transform var(--transition);
  white-space: nowrap;
}
.btn-dark:hover { transform: translateY(-2px); }
```

---

## script.js

Same structure as Clinic. Key additions:

```js
// Per-property WhatsApp enquiry
function enquireProperty(type, location, price) {
  const message =
    `Hi! I'm interested in the ${type} at ${location} (${price}). 🏡\n` +
    `Can we schedule a site visit?`
  buildWhatsApp('919XXXXXXXXX', message)
}

// Lead form — same validation pattern as Clinic
// Fields: name, phone, budget, area
// Message template from design.md
```

---

## Acceptance Criteria

- [ ] `real-estate/index.html`, `style.css`, `script.js` all created
- [ ] Google Fonts loads Playfair Display + Inter
- [ ] Hero fills 100vh with charcoal overlay and gold CTA
- [ ] All 4 property cards render with image, price in gold, location, meta tags
- [ ] Property card image zooms in on hover
- [ ] "View Details" opens WhatsApp with property-specific message
- [ ] Lead form validates 4 fields; valid submit opens WhatsApp with lead message
- [ ] 2 featured cards have gold "★ Featured" badge
- [ ] Gold agent CTA strip visible with "Talk to Agent Now" WhatsApp button
- [ ] 6 area pills render with gold border
- [ ] Map iframe displays
- [ ] WhatsApp float visible, pulses, links to `wa.me/...`
- [ ] Mobile nav (hamburger) works
- [ ] GSAP scroll animations fire on all `[data-animate]` elements
- [ ] No console errors
- [ ] Fully responsive: 320px, 768px, 1280px

---

## Next Task
→ TASK-010: Build the complete Gym site (`gym/`).
