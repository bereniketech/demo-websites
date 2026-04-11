# TASK-010 — Gym: Full Site Build

**Site:** `gym/`
**Status:** pending
**Requirements:** US-13 – US-19
**Skills:** build-website-web-app, cinematic-website-builder, whatsapp-automation, ui-ux-pro-max
**Depends on:** TASK-008 (Clinic complete — use as structural reference)

---

## Context

Build the complete Gym demo site. This is the most visually aggressive of the three sites — dark theme, electric red accents, bold uppercase headings using Bebas Neue. The goal is energy and urgency: get the visitor to book a free trial before they leave the page.

Key differences from Clinic and Real Estate:
- **Dark site** — near-black background, light text throughout. Every color decision must ensure sufficient contrast on dark backgrounds.
- **Bebas Neue** for all headings (uppercase, wide tracking, high impact).
- **Before/After cards** — unique section not in other sites. Side-by-side placeholder images with overlaid BEFORE/AFTER labels.
- **Programs section** — 4 cards with red top-border accent (not icon-box style).
- The tone is motivational, direct, and result-focused. Copy should feel like a coach talking, not a brochure.

---

## Files to Create

- `gym/index.html`
- `gym/style.css`
- `gym/script.js`

---

## Design Tokens

```css
:root {
  --primary:    #0D0D0D;   /* Near black */
  --accent:     #FF2D20;   /* Electric red */
  --secondary:  #FFD700;   /* Energy yellow — used sparingly for stats/highlights */
  --bg:         #111111;   /* Page background */
  --text:       #F0F0F0;   /* Body text — light */
  --muted:      #888888;   /* Secondary text */
  --card-bg:    #1A1A1A;   /* Card backgrounds */
  --border:     #2A2A2A;   /* Subtle borders */
  --shadow:     0 4px 24px rgba(255, 45, 32, 0.08);
  --radius:     12px;
  --radius-sm:  8px;
  --transition: 0.25s ease;
}
```

---

## Detailed Instructions

### index.html — Full Page Structure

```
DOCTYPE / head / CDN links (Bebas Neue + Inter, Font Awesome, GSAP)
└── body
    ├── <nav class="nav"> — "IronEdge Gym", links, CTA "Start Free Trial"
    ├── <section id="hero"> — full-viewport dark hero
    ├── <section id="trainer"> — trainer profile
    ├── <section id="programs"> — 4 program cards
    ├── <section id="booking"> — free trial booking form
    ├── <section id="transformations"> — before/after section
    ├── <section id="testimonials"> — 3 testimonial cards
    ├── <section id="location"> — map + WhatsApp CTA
    ├── <footer> — logo, links, copyright
    └── .whatsapp-float
```

---

### CDN Links (head)

```html
<!-- Google Fonts: Bebas Neue + Inter -->
<link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

<!-- Font Awesome 6 -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />

<!-- GSAP + ScrollTrigger -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js" defer></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js" defer></script>
```

---

### Nav

- Logo: `<i class="fa-solid fa-dumbbell"></i> IronEdge Gym`
- Links: Programs (`#programs`), Trainers (`#trainer`), Results (`#transformations`), Contact (`#location`)
- CTA button: "Start Free Trial" → `#booking`
- Nav bg: `rgba(13, 13, 13, 0.96)` with red bottom border `border-bottom: 2px solid var(--accent)`

---

### Hero

```html
<section id="hero" class="hero">
  <div class="hero__overlay"></div>
  <div class="hero__content">
    <p class="hero__tag" id="heroTag">
      <i class="fa-solid fa-fire"></i> 500+ Members Transformed
    </p>
    <h1 class="hero__headline" id="heroHeadline">
      Transform Your Body<br />in 90 Days
    </h1>
    <p class="hero__sub" id="heroSub">
      Science-backed training. Expert coaching. Real results — guaranteed.
    </p>
    <a href="#booking" class="btn-accent hero__cta" id="heroCta">
      Start Free Trial <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
</section>
```

- Background image: `https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&q=80`
- Overlay: `linear-gradient(160deg, rgba(13,13,13,0.88) 0%, rgba(255,45,32,0.25) 100%)`
- Hero tag badge bg: `rgba(255,45,32,0.2)`, border: `1px solid rgba(255,45,32,0.4)`, color: `var(--accent)`
- GSAP entrance: same timeline pattern (tag → headline → sub → CTA)

---

### Trainer Profile

```html
<section id="trainer" class="section trainer">
  <div class="container">
    <div class="trainer__inner" data-animate>
      <div class="trainer__photo-wrap">
        <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&q=80"
             alt="Coach Rahul Singh" class="trainer__photo" loading="lazy" />
        <div class="trainer__badge">
          <i class="fa-solid fa-trophy"></i> ISSA Certified
        </div>
      </div>
      <div class="trainer__info">
        <span class="section-label">Your Coach</span>
        <h2 class="trainer__name">Coach Rahul Singh</h2>
        <p class="trainer__title">Strength & Conditioning Specialist</p>
        <div class="trainer__tags">
          <span class="tag"><i class="fa-solid fa-check"></i> 10+ Years Experience</span>
          <span class="tag"><i class="fa-solid fa-check"></i> ISSA Certified</span>
          <span class="tag"><i class="fa-solid fa-check"></i> 500+ Transformations</span>
        </div>
        <div class="trainer__stats">
          <div class="stat">
            <strong>500+</strong>
            <span>Members Transformed</span>
          </div>
          <div class="stat">
            <strong>10+</strong>
            <span>Years Coaching</span>
          </div>
          <div class="stat">
            <strong>98%</strong>
            <span>Goal Achievement</span>
          </div>
        </div>
        <blockquote class="trainer__quote">
          "I don't just train bodies — I build mindsets. Every rep, every session brings you closer to the version of yourself you know you can be."
        </blockquote>
        <a href="#booking" class="btn-accent">
          Train With Me <i class="fa-solid fa-dumbbell"></i>
        </a>
      </div>
    </div>
  </div>
</section>
```

Photo styling: `border: 3px solid var(--accent)` circle. Badge: red background.

---

### Programs (4 cards)

```html
<section id="programs" class="section programs">
  <div class="container">
    <p class="section-label text-center">What We Train</p>
    <h2 class="section-title text-center">Our Programs</h2>
    <p class="section-subtitle text-center">Every program is built around your goal, your schedule, and your body.</p>
    <div class="programs__grid">

      <div class="program-card" data-animate>
        <div class="program-card__icon"><i class="fa-solid fa-fire"></i></div>
        <h3>Fat Loss</h3>
        <p>Science-backed cardio and nutrition protocols for maximum, sustainable fat burn.</p>
        <a href="#booking" class="program-card__link">Start Now <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="program-card program-card--featured" data-animate>
        <div class="program-card__badge">Most Popular</div>
        <div class="program-card__icon"><i class="fa-solid fa-dumbbell"></i></div>
        <h3>Muscle Gain</h3>
        <p>Progressive overload programming for serious hypertrophy, size and functional strength.</p>
        <a href="#booking" class="program-card__link">Start Now <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="program-card" data-animate>
        <div class="program-card__icon"><i class="fa-solid fa-bolt"></i></div>
        <h3>Strength Training</h3>
        <p>Powerlifting-inspired training to build raw, functional strength from the ground up.</p>
        <a href="#booking" class="program-card__link">Start Now <i class="fa-solid fa-arrow-right"></i></a>
      </div>

      <div class="program-card" data-animate>
        <div class="program-card__icon"><i class="fa-solid fa-user"></i></div>
        <h3>Personal Training</h3>
        <p>Fully tailored 1-on-1 coaching built around your unique body, goals, and lifestyle.</p>
        <a href="#booking" class="program-card__link">Start Now <i class="fa-solid fa-arrow-right"></i></a>
      </div>

    </div>
  </div>
</section>
```

---

### Booking Form (Free Trial)

```html
<section id="booking" class="section booking">
  <div class="container">
    <p class="section-label text-center">Get Started</p>
    <h2 class="section-title text-center">Book Your Free Trial</h2>
    <p class="section-subtitle text-center">
      One free session. No commitment. Just show up and let the results speak.
    </p>
    <div class="form-card" data-animate>
      <form id="bookingForm" novalidate>
        <div class="form-row">
          <div class="form-group">
            <label for="name">Full Name <span class="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="e.g. Amit Kumar" />
            <span class="form-error" id="nameError">Please enter your full name.</span>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number <span class="required">*</span></label>
            <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
            <span class="form-error" id="phoneError">Please enter a valid phone number.</span>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="goal">Fitness Goal <span class="required">*</span></label>
            <select id="goal" name="goal">
              <option value="">Select your goal</option>
              <option value="Fat Loss">Fat Loss</option>
              <option value="Muscle Gain">Muscle Gain</option>
              <option value="Strength Training">Strength Training</option>
              <option value="Personal Training">Personal Training</option>
            </select>
            <span class="form-error" id="goalError">Please select your fitness goal.</span>
          </div>
          <div class="form-group">
            <label for="timing">Preferred Timing <span class="required">*</span></label>
            <select id="timing" name="timing">
              <option value="">Select a time slot</option>
              <option value="Early Morning 5am – 8am">Early Morning 5am – 8am</option>
              <option value="Morning 8am – 11am">Morning 8am – 11am</option>
              <option value="Evening 5pm – 9pm">Evening 5pm – 9pm</option>
            </select>
            <span class="form-error" id="timingError">Please select a timing.</span>
          </div>
        </div>
        <button type="submit" class="btn-accent btn-full">
          Book Free Trial <i class="fa-solid fa-dumbbell"></i>
        </button>
        <p class="form-note">
          <i class="fa-solid fa-lock"></i> No payment required. We'll confirm via WhatsApp.
        </p>
      </form>
    </div>
  </div>
</section>
```

WhatsApp message template:
```
Hey Coach Rahul! 💪 I want to book a FREE trial.

Name: {name}
Phone: {phone}
Goal: {goal}
Preferred Timing: {timing}

Looking forward to starting! 🔥
```

Form validation field IDs: `name`, `phone`, `goal`, `timing` (note: `goal` and `timing` instead of `concern` and `time`).

---

### Before/After Transformations

```html
<section id="transformations" class="section transformations">
  <div class="container">
    <p class="section-label text-center">Proof It Works</p>
    <h2 class="section-title text-center">Real Transformations</h2>
    <p class="section-subtitle text-center">
      These aren't stock photos. These are our members — before they started and 90 days later.
    </p>
    <div class="transformations__grid" data-animate>

      <div class="transformation-card">
        <div class="transformation-card__images">
          <div class="ba-img">
            <img src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=300&q=80" alt="Before" loading="lazy" />
            <span class="ba-label ba-label--before">BEFORE</span>
          </div>
          <div class="ba-img">
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&q=80" alt="After" loading="lazy" />
            <span class="ba-label ba-label--after">AFTER</span>
          </div>
        </div>
        <div class="transformation-card__info">
          <strong>Amit K.</strong>
          <span class="transformation-result">Lost 12kg in 90 Days</span>
        </div>
      </div>

      <div class="transformation-card">
        <div class="transformation-card__images">
          <div class="ba-img">
            <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&q=80" alt="Before" loading="lazy" />
            <span class="ba-label ba-label--before">BEFORE</span>
          </div>
          <div class="ba-img">
            <img src="https://images.unsplash.com/photo-1609899463726-4c89eb5c1e38?w=300&q=80" alt="After" loading="lazy" />
            <span class="ba-label ba-label--after">AFTER</span>
          </div>
        </div>
        <div class="transformation-card__info">
          <strong>Sneha R.</strong>
          <span class="transformation-result">Gained 6kg Muscle in 4 Months</span>
        </div>
      </div>

      <div class="transformation-card">
        <div class="transformation-card__images">
          <div class="ba-img">
            <img src="https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=300&q=80" alt="Before" loading="lazy" />
            <span class="ba-label ba-label--before">BEFORE</span>
          </div>
          <div class="ba-img">
            <img src="https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=300&q=80" alt="After" loading="lazy" />
            <span class="ba-label ba-label--after">AFTER</span>
          </div>
        </div>
        <div class="transformation-card__info">
          <strong>Karan M.</strong>
          <span class="transformation-result">28% → 14% Body Fat in 3 Months</span>
        </div>
      </div>

    </div>
  </div>
</section>
```

---

### Testimonials

Same 3-card structure as Clinic. Adjust for dark theme (card bg `var(--card-bg)`, text `var(--text)`, stars amber).

Members:
- Amit K. ★★★★★ — "Best decision I ever made. Coach Rahul doesn't let you make excuses — he helps you eliminate them."
- Sneha R. ★★★★★ — "I was nervous to join. 3 months later I'm stronger than I've ever been. The women here are incredibly supportive."
- Karan M. ★★★★☆ — "The programming is legit. No fluff, no gimmicks — just solid science-backed training that actually works."

---

### Location

Same structure as Clinic. Buttons:
- "Chat with Trainer" → WhatsApp
- "Call Now" → tel:

---

### Footer

Logo: `<i class="fa-solid fa-dumbbell"></i> IronEdge Gym`
Links: Programs, About, Trial, Contact
Copyright: `© 2025 IronEdge Gym. All rights reserved.`

---

## style.css — Key Unique Styles

### Dark Base
```css
body { background: var(--bg); color: var(--text); }

/* Sections alternate between bg shades */
.trainer      { background: var(--primary); }
.programs     { background: var(--bg); }
.booking      { background: var(--primary); }
.transformations { background: var(--bg); }
.testimonials { background: var(--primary); }
.location     { background: var(--bg); }
.footer       { background: #000; }
```

### Headings — Bebas Neue
```css
h1, h2, h3, .section-title { font-family: 'Bebas Neue', cursive; letter-spacing: 0.04em; }
h1 { font-size: clamp(2.8rem, 7vw, 5rem); }
h2.section-title { font-size: clamp(2rem, 4vw, 2.8rem); }
```

### Trainer Photo
```css
.trainer__photo {
  width: 300px; height: 360px; object-fit: cover;
  border-radius: 20px;
  border: 3px solid var(--accent);
  box-shadow: 0 0 40px rgba(255,45,32,0.25);
}
```

### Tags (dark variant)
```css
.tag {
  background: rgba(255,45,32,0.1);
  color: var(--text);
  border: 1px solid rgba(255,45,32,0.3);
}
.tag i { color: var(--accent); }
```

### Stat values — yellow highlight
```css
.stat strong { color: var(--secondary); }
```

### Program Cards
```css
.programs__grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}

.program-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  border-top: 4px solid var(--accent);
  padding: 28px 24px;
  display: flex; flex-direction: column; gap: 14px;
  position: relative;
  transition: transform var(--transition), box-shadow var(--transition);
}

.program-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 32px rgba(255,45,32,0.15);
}

.program-card--featured {
  border-top-color: var(--secondary);
  box-shadow: 0 4px 24px rgba(255,215,0,0.1);
}

.program-card__badge {
  position: absolute; top: -14px; left: 20px;
  background: var(--secondary); color: #000;
  font-size: 0.7rem; font-weight: 800;
  padding: 4px 12px; border-radius: 50px;
  letter-spacing: 0.06em; text-transform: uppercase;
}

.program-card__icon {
  font-size: 1.8rem; color: var(--accent);
}

.program-card h3 { font-size: 1.2rem; color: var(--text); }
.program-card p  { font-size: 0.875rem; color: var(--muted); line-height: 1.6; flex: 1; }

.program-card__link {
  color: var(--accent); font-size: 0.875rem; font-weight: 600;
  display: inline-flex; align-items: center; gap: 6px;
  transition: gap var(--transition);
}
.program-card__link:hover { gap: 10px; }

@media (max-width: 900px) { .programs__grid { grid-template-columns: repeat(2, 1fr); } }
@media (max-width: 480px) { .programs__grid { grid-template-columns: 1fr; } }
```

### Before/After Cards
```css
.transformations__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}

.transformation-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  overflow: hidden;
  border: 1px solid var(--border);
}

.transformation-card__images {
  display: grid; grid-template-columns: 1fr 1fr;
}

.ba-img {
  position: relative; height: 220px; overflow: hidden;
}

.ba-img img {
  width: 100%; height: 100%; object-fit: cover;
  filter: brightness(0.85);
}

.ba-label {
  position: absolute; bottom: 10px; left: 50%;
  transform: translateX(-50%);
  font-family: 'Bebas Neue', cursive;
  font-size: 1rem; letter-spacing: 0.1em;
  padding: 4px 14px; border-radius: 4px;
}

.ba-label--before {
  background: rgba(0,0,0,0.75); color: var(--muted);
}

.ba-label--after {
  background: var(--accent); color: #fff;
}

.transformation-card__info {
  padding: 16px 20px;
  display: flex; justify-content: space-between; align-items: center;
}

.transformation-card__info strong { color: var(--text); font-size: 0.95rem; }

.transformation-result {
  font-size: 0.8rem; color: var(--accent); font-weight: 600;
}

@media (max-width: 768px) { .transformations__grid { grid-template-columns: 1fr; } }
```

### Dark Form Inputs
```css
/* Gym dark form overrides */
.form-card {
  background: var(--card-bg);
  border: 1px solid var(--border);
}

.form-group input,
.form-group select {
  background: #222;
  border-color: var(--border);
  color: var(--text);
}

.form-group input:focus,
.form-group select:focus { border-color: var(--accent); }

.form-group input.error,
.form-group select.error { border-color: #E53935; }

.form-group label { color: var(--text); }
```

### Dark Testimonial Cards
```css
.testimonial-card { background: var(--card-bg); border-color: var(--border); }
.testimonial-card__text { color: var(--muted); }
.author-avatar { background: var(--accent); }
.author-info strong { color: var(--text); }
```

---

## script.js

Same structure as Clinic, with these field ID changes for the booking form:

```js
const fields = [
  { id: 'name',   errorId: 'nameError',   check: v => v.trim().length >= 2 },
  { id: 'phone',  errorId: 'phoneError',  check: v => /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim()) },
  { id: 'goal',   errorId: 'goalError',   check: v => v !== '' },
  { id: 'timing', errorId: 'timingError', check: v => v !== '' },
]

// WhatsApp message
const message =
  `Hey Coach Rahul! 💪 I want to book a FREE trial.\n\n` +
  `Name: ${name}\n` +
  `Phone: ${phone}\n` +
  `Goal: ${goal}\n` +
  `Preferred Timing: ${timing}\n\n` +
  `Looking forward to starting! 🔥`

buildWhatsApp('919XXXXXXXXX', message)
```

---

## Acceptance Criteria

- [ ] `gym/index.html`, `style.css`, `script.js` all created
- [ ] Google Fonts loads Bebas Neue + Inter
- [ ] All headings use Bebas Neue (bold, uppercase feel)
- [ ] Dark theme throughout — light text on dark backgrounds, no contrast failures
- [ ] Hero: dark overlay with red-tinted gradient, red trust badge
- [ ] Trainer profile: circular red-bordered photo, ISSA badge, stats in yellow
- [ ] 4 program cards render in a row on desktop (2×2 on tablet, 1 on mobile)
- [ ] Each program card has red top border; "Muscle Gain" card has yellow "Most Popular" badge
- [ ] Booking form validates 4 fields; valid submit opens WhatsApp with 💪 emoji message
- [ ] 3 before/after cards render — each with 2 image halves, BEFORE/AFTER labels
- [ ] AFTER label is red, BEFORE label is dark/muted
- [ ] 3 testimonials render correctly on dark card bg
- [ ] Location section: map iframe + "Chat with Trainer" WhatsApp button
- [ ] WhatsApp float visible, red-adjacent pulse (green float works fine on dark bg)
- [ ] Mobile nav hamburger works
- [ ] GSAP scroll animations fire on `[data-animate]` elements
- [ ] No console errors
- [ ] Fully responsive: 320px, 768px, 1280px

---

## Next Task
→ TASK-011: Cross-site QA, security check, git commit, and push to bereniketech/demo-websites.
