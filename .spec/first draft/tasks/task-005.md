# TASK-005 — Clinic: Services Section

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-03
**Skills:** build-website-web-app
**Depends on:** TASK-001, TASK-002

---

## Context

The services section shows what the clinic offers — three cards in a grid, each with a large icon, service name, description, and a subtle CTA. This reassures visitors they're in the right place before they scroll to the booking form. Cards animate in on scroll using the `data-animate` attribute set up in TASK-003.

---

## Files to Edit

- `clinic/index.html` — fill `#services` section
- `clinic/style.css` — service card styles

---

## Detailed Instructions

### index.html — Services Content

Replace the empty `<section id="services" class="section services">` with:

```html
<section id="services" class="section services">
  <div class="container">
    <p class="section-label text-center">What We Offer</p>
    <h2 class="section-title text-center">Our Services</h2>
    <p class="section-subtitle text-center">
      Comprehensive healthcare solutions for every stage of life — from routine check-ups to specialised treatments.
    </p>

    <div class="card-grid">

      <div class="card service-card" data-animate>
        <div class="service-card__icon">
          <i class="fa-solid fa-stethoscope"></i>
        </div>
        <h3>General Consultation</h3>
        <p>Expert diagnosis for common illnesses and chronic conditions with personalised treatment plans tailored to you.</p>
        <a href="#booking" class="service-card__link">
          Book Now <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="card service-card service-card--featured" data-animate>
        <div class="service-card__badge">Most Popular</div>
        <div class="service-card__icon">
          <i class="fa-solid fa-spa"></i>
        </div>
        <h3>Skin Treatment</h3>
        <p>Advanced dermatology care for acne, pigmentation, eczema, and cosmetic skin concerns with proven results.</p>
        <a href="#booking" class="service-card__link">
          Book Now <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

      <div class="card service-card" data-animate>
        <div class="service-card__icon">
          <i class="fa-solid fa-tooth"></i>
        </div>
        <h3>Dental Care</h3>
        <p>Comprehensive dental services from routine cleaning to cosmetic and restorative procedures for lasting oral health.</p>
        <a href="#booking" class="service-card__link">
          Book Now <i class="fa-solid fa-arrow-right"></i>
        </a>
      </div>

    </div>
  </div>
</section>
```

### style.css — Services Styles

```css
/* ── SERVICES ── */
.services {
  background: var(--bg);
}

.service-card {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  border-top: 4px solid transparent;
  transition: border-color var(--transition), transform var(--transition), box-shadow var(--transition);
}

.service-card:hover {
  border-top-color: var(--accent);
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 102, 204, 0.12);
}

/* Featured card gets accent border by default */
.service-card--featured {
  border-top-color: var(--primary);
  box-shadow: 0 8px 32px rgba(0, 102, 204, 0.1);
}

.service-card__badge {
  position: absolute;
  top: -14px;
  left: 28px;
  background: var(--primary);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  padding: 5px 14px;
  border-radius: 50px;
}

.service-card__icon {
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: #EBF4FF;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  color: var(--primary);
  transition: background var(--transition), color var(--transition);
}

.service-card:hover .service-card__icon {
  background: var(--accent);
  color: #fff;
}

.service-card h3 {
  font-size: 1.1rem;
  font-weight: 700;
  color: var(--text);
}

.service-card p {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.65;
  flex: 1;
}

.service-card__link {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--primary);
  margin-top: auto;
  transition: gap var(--transition), color var(--transition);
}

.service-card__link:hover {
  color: var(--accent);
  gap: 10px;
}
```

---

## Acceptance Criteria

- [ ] 3 service cards render in a row on desktop
- [ ] Cards stack to 2 columns on tablet (≤768px), 1 column on mobile (≤480px)
- [ ] Each card has: icon box, title, description, "Book Now" link
- [ ] Middle card has "Most Popular" badge and slightly elevated style
- [ ] Icon box turns green on hover
- [ ] Card gets green top border on hover and lifts
- [ ] All 3 `data-animate` attributes present — cards animate in on scroll
- [ ] "Book Now" links point to `#booking`

---

## Next Task
→ TASK-006: Booking form with validation and WhatsApp submission logic.
