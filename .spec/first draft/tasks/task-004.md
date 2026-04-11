# TASK-004 — Clinic: Doctor Profile Section

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-02
**Skills:** build-website-web-app
**Depends on:** TASK-001, TASK-002, TASK-003

---

## Context

The doctor profile section builds the primary trust signal for the Clinic site. Visitors need to see who they're booking with before they commit. This section uses a two-column layout (photo left, credentials right) on desktop, stacking vertically on mobile. It uses a placeholder Unsplash photo of a female doctor.

---

## Files to Edit

- `clinic/index.html` — fill `#doctor` section
- `clinic/style.css` — doctor section styles

---

## Detailed Instructions

### index.html — Doctor Section Content

Replace the empty `<section id="doctor" class="section doctor">` with:

```html
<section id="doctor" class="section doctor">
  <div class="container">
    <div class="doctor__inner" data-animate>
      <div class="doctor__photo-wrap">
        <img
          src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80"
          alt="Dr. Anjali Mehta — General Medicine & Dermatology"
          class="doctor__photo"
          loading="lazy"
        />
        <div class="doctor__badge">
          <i class="fa-solid fa-star"></i> Top Rated 2024
        </div>
      </div>

      <div class="doctor__info">
        <span class="section-label">Meet Your Doctor</span>
        <h2 class="doctor__name">Dr. Anjali Mehta</h2>
        <p class="doctor__qual">MBBS, MD — General Medicine & Dermatology</p>

        <div class="doctor__tags">
          <span class="tag"><i class="fa-solid fa-check"></i> 15+ Years Experience</span>
          <span class="tag"><i class="fa-solid fa-check"></i> General Medicine</span>
          <span class="tag"><i class="fa-solid fa-check"></i> Skin Care</span>
        </div>

        <div class="doctor__stats">
          <div class="stat">
            <strong>5,000+</strong>
            <span>Patients Treated</span>
          </div>
          <div class="stat">
            <strong>15+</strong>
            <span>Years Experience</span>
          </div>
          <div class="stat">
            <strong>98%</strong>
            <span>Satisfaction Rate</span>
          </div>
        </div>

        <blockquote class="doctor__quote">
          "Providing compassionate, evidence-based care to families since 2009.
           Your health is my mission — I take time to listen before I prescribe."
        </blockquote>

        <a href="#booking" class="btn-primary">
          Book a Consultation <i class="fa-solid fa-calendar-check"></i>
        </a>
      </div>
    </div>
  </div>
</section>
```

### style.css — Doctor Section Styles

```css
/* ── DOCTOR PROFILE ── */
.doctor {
  background: var(--card-bg);
}

.doctor__inner {
  display: grid;
  grid-template-columns: 340px 1fr;
  gap: 64px;
  align-items: center;
}

/* Photo */
.doctor__photo-wrap {
  position: relative;
  display: inline-block;
}

.doctor__photo {
  width: 320px;
  height: 380px;
  object-fit: cover;
  border-radius: 20px;
  box-shadow: 0 16px 48px rgba(0, 102, 204, 0.15);
  border: 4px solid var(--card-bg);
  outline: 3px solid var(--primary);
  outline-offset: 6px;
}

.doctor__badge {
  position: absolute;
  bottom: -16px;
  left: 50%;
  transform: translateX(-50%);
  background: var(--accent);
  color: #fff;
  font-size: 0.8rem;
  font-weight: 700;
  padding: 8px 18px;
  border-radius: 50px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 6px;
  box-shadow: 0 4px 12px rgba(0,168,107,0.3);
}

/* Info */
.doctor__name {
  font-size: clamp(1.6rem, 3vw, 2rem);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 6px;
}

.doctor__qual {
  font-size: 0.95rem;
  color: var(--muted);
  margin-bottom: 20px;
}

/* Tags */
.doctor__tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 28px;
}

.tag {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: #EBF4FF;
  color: var(--primary);
  font-size: 0.82rem;
  font-weight: 600;
  padding: 7px 14px;
  border-radius: 50px;
  border: 1px solid rgba(0,102,204,0.2);
}

.tag i { color: var(--accent); font-size: 0.75rem; }

/* Stats row */
.doctor__stats {
  display: flex;
  gap: 32px;
  margin-bottom: 28px;
  padding: 20px 0;
  border-top: 1px solid var(--border);
  border-bottom: 1px solid var(--border);
}

.stat strong {
  display: block;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--primary);
}

.stat span {
  font-size: 0.8rem;
  color: var(--muted);
}

/* Quote */
.doctor__quote {
  font-style: italic;
  color: var(--muted);
  font-size: 0.95rem;
  line-height: 1.7;
  border-left: 3px solid var(--accent);
  padding-left: 16px;
  margin-bottom: 28px;
}

/* Responsive */
@media (max-width: 900px) {
  .doctor__inner {
    grid-template-columns: 1fr;
    gap: 48px;
    text-align: center;
  }

  .doctor__photo-wrap { margin: 0 auto; }
  .doctor__photo { width: 240px; height: 280px; }
  .doctor__tags  { justify-content: center; }
  .doctor__stats { justify-content: center; }
  .doctor__quote { text-align: left; }
}
```

---

## Acceptance Criteria

- [ ] Doctor photo renders (Unsplash image loads correctly)
- [ ] Photo is styled with rounded corners, blue outline
- [ ] "Top Rated 2024" badge appears below the photo
- [ ] Name, qualifications, 3 tags, stats row all visible
- [ ] Stats show 3 figures: 5,000+, 15+, 98%
- [ ] Quote has left green border accent
- [ ] "Book a Consultation" button present and links to `#booking`
- [ ] Layout is 2-column on desktop (≥900px)
- [ ] Layout stacks vertically and centers on mobile (≤900px)
- [ ] Section animates in on scroll (`data-animate` on `.doctor__inner`)

---

## Next Task
→ TASK-005: Services section — 3 service cards with icons.
