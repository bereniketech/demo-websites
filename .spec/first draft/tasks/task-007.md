# TASK-007 — Clinic: Testimonials + Location + Footer

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-05, US-06
**Skills:** build-website-web-app
**Depends on:** TASK-001, TASK-002

---

## Context

Three finishing sections for the Clinic site:

1. **Testimonials** — 3 patient review cards. Builds final trust before the visitor leaves the page. Mobile: horizontal scroll so all 3 cards are accessible.
2. **Location** — Google Maps embed + address details + WhatsApp and Call buttons. Converts visitors who want to physically visit.
3. **Footer** — Minimal, branded. Logo, nav links, copyright.

---

## Files to Edit

- `clinic/index.html` — fill `#testimonials`, `#location`, `<footer>`
- `clinic/style.css` — testimonial, location, footer styles

---

## Detailed Instructions

### index.html — Testimonials

Replace empty `<section id="testimonials" class="section testimonials">` with:

```html
<section id="testimonials" class="section testimonials">
  <div class="container">
    <p class="section-label text-center">Patient Reviews</p>
    <h2 class="section-title text-center">What Our Patients Say</h2>
    <p class="section-subtitle text-center">
      Real feedback from real patients. We're proud of the care we deliver every day.
    </p>

    <div class="testimonials__track" data-animate>

      <div class="card testimonial-card">
        <div class="testimonial-card__stars">★★★★★</div>
        <p class="testimonial-card__text">
          "Quick diagnosis, very professional. Felt completely at ease immediately.
           Dr. Anjali took the time to explain everything in plain language — no jargon."
        </p>
        <div class="testimonial-card__author">
          <div class="author-avatar">RS</div>
          <div class="author-info">
            <strong>Ravi Sharma</strong>
            <span>Verified Patient · General Consultation</span>
          </div>
        </div>
      </div>

      <div class="card testimonial-card">
        <div class="testimonial-card__stars">★★★★★</div>
        <p class="testimonial-card__text">
          "Dr. Anjali explained everything clearly. The clinic is spotless and the staff
           is so kind. I've recommended this clinic to my entire family."
        </p>
        <div class="testimonial-card__author">
          <div class="author-avatar">PN</div>
          <div class="author-info">
            <strong>Priya Nair</strong>
            <span>Verified Patient · Skin Treatment</span>
          </div>
        </div>
      </div>

      <div class="card testimonial-card">
        <div class="testimonial-card__stars">★★★★☆</div>
        <p class="testimonial-card__text">
          "Excellent skin treatment. Saw visible results in just 2 weeks.
           The follow-up care and reminders were exceptional too."
        </p>
        <div class="testimonial-card__author">
          <div class="author-avatar">AP</div>
          <div class="author-info">
            <strong>Arjun Patel</strong>
            <span>Verified Patient · Dermatology</span>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
```

### index.html — Location

Replace empty `<section id="location" class="section location">` with:

```html
<section id="location" class="section location">
  <div class="container">
    <p class="section-label text-center">Find Us</p>
    <h2 class="section-title text-center">Our Location</h2>

    <div class="location__inner" data-animate>

      <div class="location__map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
          width="100%"
          height="360"
          style="border:0; border-radius: var(--radius);"
          allowfullscreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="MediCare Clinic Location">
        </iframe>
      </div>

      <div class="location__info">
        <div class="location__detail">
          <div class="location__icon"><i class="fa-solid fa-location-dot"></i></div>
          <div>
            <strong>Address</strong>
            <p>12, Health Avenue, Andheri West,<br />Mumbai – 400053, Maharashtra</p>
          </div>
        </div>

        <div class="location__detail">
          <div class="location__icon"><i class="fa-solid fa-clock"></i></div>
          <div>
            <strong>Clinic Hours</strong>
            <p>Mon – Sat: 9:00 am – 8:00 pm<br />Sunday: 10:00 am – 2:00 pm</p>
          </div>
        </div>

        <div class="location__detail">
          <div class="location__icon"><i class="fa-solid fa-phone"></i></div>
          <div>
            <strong>Phone</strong>
            <p>+91 98765 43210</p>
          </div>
        </div>

        <div class="location__btns">
          <a href="https://wa.me/919XXXXXXXXX?text=Hello%20MediCare%20Clinic%2C%20I%20need%20directions."
             class="btn-accent" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-whatsapp"></i> Chat with Us
          </a>
          <a href="tel:+919XXXXXXXXX" class="btn-primary">
            <i class="fa-solid fa-phone"></i> Call Now
          </a>
        </div>
      </div>

    </div>
  </div>
</section>
```

### index.html — Footer

Replace empty `<footer class="footer">` with:

```html
<footer class="footer">
  <div class="container footer__inner">
    <a href="#" class="nav__logo footer__logo">
      <i class="fa-solid fa-heart-pulse"></i> MediCare Clinic
    </a>
    <ul class="footer__links">
      <li><a href="#services">Services</a></li>
      <li><a href="#doctor">About</a></li>
      <li><a href="#booking">Book</a></li>
      <li><a href="#location">Contact</a></li>
    </ul>
    <p class="footer__copy">© 2025 MediCare Clinic. All rights reserved.</p>
  </div>
</footer>
```

### style.css — Testimonials

```css
/* ── TESTIMONIALS ── */
.testimonials {
  background: var(--bg);
}

.testimonials__track {
  display: flex;
  gap: 24px;
}

.testimonial-card {
  flex: 1;
  min-width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.testimonial-card__stars {
  font-size: 1.1rem;
  color: #F59E0B;
  letter-spacing: 2px;
}

.testimonial-card__text {
  font-size: 0.9rem;
  color: var(--muted);
  line-height: 1.7;
  flex: 1;
  font-style: italic;
}

.testimonial-card__author {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: auto;
}

.author-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: var(--primary);
  color: #fff;
  font-size: 0.75rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.author-info strong {
  display: block;
  font-size: 0.875rem;
  color: var(--text);
}

.author-info span {
  font-size: 0.75rem;
  color: var(--muted);
}

/* Mobile: horizontal scroll */
@media (max-width: 768px) {
  .testimonials__track {
    overflow-x: auto;
    padding-bottom: 16px;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
  }
  .testimonials__track::-webkit-scrollbar { display: none; }
  .testimonial-card { min-width: 260px; flex: 0 0 260px; }
}
```

### style.css — Location

```css
/* ── LOCATION ── */
.location {
  background: var(--card-bg);
}

.location__inner {
  display: grid;
  grid-template-columns: 1fr 380px;
  gap: 48px;
  align-items: start;
}

.location__info {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.location__detail {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.location__icon {
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: #EBF4FF;
  color: var(--primary);
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.location__detail strong {
  display: block;
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
  margin-bottom: 4px;
}

.location__detail p {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.6;
}

.location__btns {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@media (max-width: 900px) {
  .location__inner {
    grid-template-columns: 1fr;
  }
}
```

---

## Acceptance Criteria

- [ ] 3 testimonial cards render with star ratings, review text, author avatar initials
- [ ] Stars are amber/yellow color
- [ ] On mobile (≤768px), testimonial cards scroll horizontally (overflow-x: auto)
- [ ] Scrollbar hidden on mobile testimonials track
- [ ] Location section shows map iframe + 3 detail rows (address, hours, phone)
- [ ] "Chat with Us" opens WhatsApp link
- [ ] "Call Now" uses `tel:` protocol link
- [ ] Footer shows logo, 4 links, copyright text
- [ ] Footer has primary blue background
- [ ] Both sections have `data-animate` and animate in on scroll

---

## Next Task
→ TASK-008: WhatsApp float button + GSAP scroll animations + mobile nav toggle (final polish pass).
