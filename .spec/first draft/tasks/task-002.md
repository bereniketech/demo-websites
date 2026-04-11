# TASK-002 — Clinic: CSS Foundation + Design Tokens

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-00
**Skills:** build-website-web-app, ui-ux-pro-max
**Depends on:** TASK-001 (index.html must exist)

---

## Context

Create the complete `clinic/style.css`. This file powers every visual element of the Clinic site. It establishes the design token system, resets, typography, nav, section wrappers, card/form/button utilities, responsive breakpoints, and the WhatsApp float styles.

No section-specific content styles yet (hero image, doctor layout, etc.) — those come in later tasks. This task is purely the foundation layer that later tasks build on.

---

## Files to Create

- `clinic/style.css`

---

## Detailed Instructions

### 1. CSS Reset
```css
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
```

### 2. Design Tokens (CSS Custom Properties)
Define on `:root`:
```css
:root {
  --primary:   #0066CC;   /* Medical blue — headings, icons, links */
  --accent:    #00A86B;   /* Trust green — CTA buttons, highlights */
  --bg:        #F8FAFF;   /* Page background — off-white with blue tint */
  --text:      #1A1A2A;   /* Body text — near black */
  --muted:     #6B7280;   /* Secondary text, subtitles */
  --card-bg:   #FFFFFF;   /* Card and form backgrounds */
  --border:    #E5E9F0;   /* Card borders, input borders */
  --shadow:    0 4px 24px rgba(0, 102, 204, 0.08);
  --radius:    12px;
  --radius-sm: 8px;
  --transition: 0.25s ease;
}
```

### 3. Base Styles
```css
html { scroll-behavior: smooth; }

body {
  font-family: 'Inter', sans-serif;
  background: var(--bg);
  color: var(--text);
  line-height: 1.6;
  overflow-x: hidden;
}

img {
  max-width: 100%;
  display: block;
}

a { text-decoration: none; color: inherit; }
ul { list-style: none; }
```

### 4. Button Utilities
```css
.btn-primary, .btn-accent {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 14px 28px;
  border-radius: 50px;   /* pill shape */
  font-weight: 600;
  font-size: 0.95rem;
  border: none;
  cursor: pointer;
  transition: transform var(--transition), box-shadow var(--transition);
}

.btn-primary {
  background: var(--primary);
  color: #fff;
}

.btn-accent {
  background: var(--accent);
  color: #fff;
}

.btn-primary:hover, .btn-accent:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.15);
}

.btn-full { width: 100%; justify-content: center; border-radius: var(--radius-sm); }
```

### 5. Section + Container
```css
.section { padding: 90px 0; }

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.section-label {
  display: block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--accent);
  margin-bottom: 10px;
}

.section-title {
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 12px;
}

.section-subtitle {
  font-size: 1rem;
  color: var(--muted);
  max-width: 560px;
  margin-bottom: 48px;
}

.text-center { text-align: center; }
.text-center.section-subtitle { margin-left: auto; margin-right: auto; }
```

### 6. Card Utility
```css
.card {
  background: var(--card-bg);
  border-radius: var(--radius);
  border: 1px solid var(--border);
  box-shadow: var(--shadow);
  padding: 32px 28px;
  transition: transform var(--transition), box-shadow var(--transition);
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 36px rgba(0, 102, 204, 0.12);
}
```

### 7. Card Grid (3-column)
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
}
```

### 8. Nav
```css
.nav {
  position: sticky;
  top: 0;
  z-index: 999;
  background: rgba(0, 102, 204, 0.96);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
}

.nav__inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
  height: 68px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav__logo {
  font-weight: 700;
  font-size: 1.1rem;
  color: #fff;
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
}

.nav__links {
  display: flex;
  gap: 28px;
  margin-right: auto;
}

.nav__links a {
  color: rgba(255,255,255,0.85);
  font-size: 0.9rem;
  font-weight: 500;
  transition: color var(--transition);
}

.nav__links a:hover { color: #fff; }

.nav__cta { padding: 10px 22px; font-size: 0.9rem; }

/* Hamburger — hidden on desktop */
.nav__hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 6px;
  margin-left: auto;
}
.nav__hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  border-radius: 2px;
  transition: transform var(--transition), opacity var(--transition);
}

/* Mobile overlay */
.nav__overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: var(--primary);
  z-index: 998;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
}
.nav__overlay ul {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 28px;
}
.nav__overlay a {
  color: #fff;
  font-size: 1.4rem;
  font-weight: 600;
}
```

### 9. WhatsApp Float
```css
.whatsapp-float {
  position: fixed;
  bottom: 28px;
  right: 28px;
  z-index: 9999;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #25D366;
  color: #fff;
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 16px rgba(37, 211, 102, 0.45);
  animation: waPulse 2s infinite;
  transition: transform var(--transition);
}
.whatsapp-float:hover { transform: scale(1.1); }

@keyframes waPulse {
  0%, 100% { box-shadow: 0 4px 16px rgba(37,211,102,0.45); }
  50%       { box-shadow: 0 4px 32px rgba(37,211,102,0.75); }
}
```

### 10. Form Styles (shared)
```css
.form-card {
  background: var(--card-bg);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 40px;
  max-width: 700px;
  margin: 0 auto;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.form-group label {
  font-size: 0.875rem;
  font-weight: 600;
  color: var(--text);
}

.form-group input,
.form-group select {
  padding: 13px 16px;
  border: 1.5px solid var(--border);
  border-radius: var(--radius-sm);
  font-family: inherit;
  font-size: 0.95rem;
  color: var(--text);
  background: #fff;
  transition: border-color var(--transition);
  outline: none;
}

.form-group input:focus,
.form-group select:focus {
  border-color: var(--accent);
}

.form-group input.error,
.form-group select.error {
  border-color: #E53935;
}

.form-error {
  display: none;
  font-size: 0.78rem;
  color: #E53935;
  margin-top: 2px;
}

.form-error.visible { display: block; }
```

### 11. Footer
```css
.footer {
  background: var(--primary);
  color: rgba(255,255,255,0.85);
  padding: 40px 0;
}

.footer__inner {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  justify-content: space-between;
}

.footer__logo { color: #fff; }

.footer__links {
  display: flex;
  gap: 24px;
}
.footer__links a {
  color: rgba(255,255,255,0.75);
  font-size: 0.875rem;
  transition: color var(--transition);
}
.footer__links a:hover { color: #fff; }

.footer__copy {
  font-size: 0.8rem;
  color: rgba(255,255,255,0.55);
  width: 100%;
  text-align: center;
  margin-top: 8px;
}
```

### 12. Responsive Breakpoints

**Tablet (≤ 768px):**
```css
@media (max-width: 768px) {
  .nav__links { display: none; }
  .nav__cta   { display: none; }
  .nav__hamburger { display: flex; }

  .card-grid { grid-template-columns: repeat(2, 1fr); }
  .form-row  { grid-template-columns: 1fr; }
  .section   { padding: 64px 0; }

  .footer__inner { flex-direction: column; text-align: center; }
  .footer__links { justify-content: center; }
}
```

**Mobile (≤ 480px):**
```css
@media (max-width: 480px) {
  .card-grid { grid-template-columns: 1fr; }
  .form-card { padding: 24px 16px; }
  .container { padding: 0 16px; }
}
```

### 13. Mobile Nav Open State
```css
body.nav-open .nav__overlay { display: flex; }
body.nav-open .nav__hamburger span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
body.nav-open .nav__hamburger span:nth-child(2) { opacity: 0; }
body.nav-open .nav__hamburger span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }
```

---

## Acceptance Criteria

- [ ] All CSS custom properties defined on `:root`
- [ ] No horizontal scroll at 320px, 480px, 768px, 1280px viewport widths
- [ ] Nav is blue, sticky, shows all links + CTA on desktop
- [ ] Nav collapses to hamburger icon below 768px
- [ ] `.btn-primary` renders blue pill, `.btn-accent` renders green pill
- [ ] `.card` has white bg, border, shadow, hover lift
- [ ] `.form-group input` shows green border on focus
- [ ] `.form-group input.error` shows red border
- [ ] WhatsApp float is visible, green, circular, bottom-right
- [ ] `@keyframes waPulse` defined and applied to float
- [ ] Footer renders with blue background
- [ ] `body.nav-open` triggers overlay + hamburger X animation

---

## Next Task
→ TASK-003: Fill the hero section with image, headline, subheadline, CTA, and GSAP load animation.
