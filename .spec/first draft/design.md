# Design — Demo Websites Portfolio

## Architecture

Each site is a self-contained folder with 3 files + assets:
```
clinic/
├── index.html      # All sections, semantic HTML5
├── style.css       # CSS custom properties + mobile-first layout
├── script.js       # GSAP animations + WhatsApp form logic
└── assets/images/  # Placeholder images (Unsplash embeds via URL)
```
Same structure for `real-estate/` and `gym/`.

No build step. Open `index.html` directly or serve with `npx live-server`.

---

## Shared Component System

### Nav
```
[Logo / Clinic Name]         [Services] [About] [Contact]  [Book Now ►]
```
- `position: sticky; top: 0; z-index: 999`
- Background: site primary color at 95% opacity + backdrop-filter blur
- CTA button: accent color, right-aligned
- Mobile: hamburger toggle, full-screen overlay menu

### Hero
- `min-height: 100vh`, background-image with dark overlay (`rgba(0,0,0,0.5)`)
- Headline: `clamp(2rem, 5vw, 3.5rem)`, white, bold
- Subheadline: `1.1rem`, white 80% opacity
- CTA: large pill button, accent color
- GSAP: headline fades up on load (no scroll trigger, fires immediately)

### Section Layout
- `max-width: 1200px; margin: 0 auto; padding: 80px 24px`
- Mobile: `padding: 60px 16px`
- Section title: centered, `2rem`, site primary color
- Section subtitle: centered, `1rem`, muted gray

### Card Grid
- Desktop: `grid-template-columns: repeat(3, 1fr); gap: 24px`
- Tablet: `repeat(2, 1fr)`
- Mobile: `1fr`

### Form
- White card with `border-radius: 12px; box-shadow: 0 4px 24px rgba(0,0,0,0.08)`
- Inputs: `border: 1.5px solid #E0E0E0; border-radius: 8px; padding: 14px`
- Focus: border changes to site accent color
- Submit: full-width button, accent color, `border-radius: 8px`
- Validation: red border + small inline error text below input

### WhatsApp Floating Button
```css
.whatsapp-float {
  position: fixed; bottom: 28px; right: 28px; z-index: 9999;
  width: 56px; height: 56px; border-radius: 50%;
  background: #25D366; box-shadow: 0 4px 16px rgba(37,211,102,0.4);
}
```
- Icon: Font Awesome `fa-whatsapp`
- Pulse animation: `box-shadow` keyframe every 2s

### GSAP Scroll Animations
Applied to every section via `data-animate` attribute:
```js
gsap.from('[data-animate]', {
  scrollTrigger: { trigger: el, start: 'top 85%' },
  y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power2.out'
})
```

### WhatsApp Link Builder (shared JS utility)
```js
function buildWhatsApp(phone, message) {
  const encoded = encodeURIComponent(message)
  window.open(`https://wa.me/${phone}?text=${encoded}`, '_blank')
}
```

---

## Site 1 — Clinic Design

### Design Tokens
```css
--primary:    #0066CC;   /* Medical blue */
--accent:     #00A86B;   /* Trust green */
--bg:         #F8FAFF;   /* Off-white */
--text:        #1A1A2A;
--muted:       #6B7280;
--card-bg:    #FFFFFF;
```

### Typography
- Font: `'Inter', sans-serif` (Google Fonts CDN)
- Headings: 700 weight, `--primary`
- Body: 400 weight, `--text`

### Section Order
```
Nav → Hero → Doctor Profile → Services → Booking Form →
Testimonials → Location & Contact → Footer
```

### Hero Image
Unsplash URL: doctor in white coat, bright clinical background
`https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600`

### Doctor Profile Layout
```
[Photo — 200px circle]  |  Dr. Anjali Mehta, MBBS, MD
                         |  15+ Years Experience
                         |  General Medicine & Skin Care
                         |  "Providing compassionate, evidence-based care..."
```

### Services Cards (3)
| Icon | Service | Description |
|---|---|---|
| fa-stethoscope | General Consultation | Expert diagnosis for common illnesses and chronic conditions |
| fa-spa | Skin Treatment | Advanced dermatology care for acne, pigmentation, and more |
| fa-tooth | Dental Care | Comprehensive dental services from cleaning to cosmetic procedures |

### Booking Form — WhatsApp Message Template
```
Hello Dr. Anjali's Clinic! 🏥
I'd like to book an appointment.

Name: {name}
Phone: {phone}
Concern: {concern}
Preferred Time: {time}

Please confirm my slot. Thank you!
```

### Testimonials (3 cards)
- Ravi Sharma — "Quick diagnosis, very professional. Felt at ease immediately." ★★★★★
- Priya Nair — "Dr. Anjali explained everything clearly. Highly recommend!" ★★★★★
- Arjun Patel — "Excellent skin treatment. Saw results in 2 weeks." ★★★★☆

---

## Site 2 — Real Estate Design

### Design Tokens
```css
--primary:    #1A1A2E;   /* Deep charcoal */
--accent:     #C9A84C;   /* Gold */
--bg:         #F5F5F0;   /* Warm off-white */
--text:        #1A1A2E;
--muted:       #8A8A8A;
--card-bg:    #FFFFFF;
```

### Typography
- Font: `'Playfair Display', serif` (headings) + `'Inter', sans-serif` (body)
- Headings: 700, `--primary`
- Accent text (price, badges): `--accent`

### Section Order
```
Nav → Hero → Property Listings → Lead Capture Form →
Featured Properties → WhatsApp Agent CTA → Areas Served + Map → Footer
```

### Hero Image
Unsplash: premium Mumbai skyline / high-rise building
`https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600`

### Property Cards (4)
| Image | Type | Price | Location | Size |
|---|---|---|---|---|
| Apartment exterior | 2BHK Apartment | ₹85L | Malad West | 750 sq ft |
| Modern interior | 3BHK Apartment | ₹1.4Cr | Goregaon East | 1100 sq ft |
| Villa exterior | 4BHK Villa | ₹2.8Cr | Andheri West | 2200 sq ft |
| Studio photo | Studio Apartment | ₹42L | Kandivali East | 380 sq ft |

### Lead Form — WhatsApp Message Template
```
Hello! I'm interested in properties. 🏠

Name: {name}
Phone: {phone}
Budget: {budget}
Preferred Area: {location}

Please share matching listings. Thank you!
```

### Property Enquiry — WhatsApp Message Template
```
Hi! I'm interested in the {type} at {location} (₹{price}). 🏡
Can we schedule a visit?
```

### Featured Properties
Badge: gold pill label "★ Featured" in top-left of card
Elevated with `box-shadow: 0 8px 32px rgba(201,168,76,0.2)`

### Areas Served Section
Grid of area pills: Malad · Goregaon · Andheri · Borivali · Kandivali · Dahisar

---

## Site 3 — Gym Design

### Design Tokens
```css
--primary:    #0D0D0D;   /* Near black */
--accent:     #FF2D20;   /* Electric red */
--secondary:  #FFD700;   /* Energy yellow (highlights) */
--bg:         #111111;   /* Dark bg */
--text:        #F0F0F0;  /* Light text */
--muted:       #888888;
--card-bg:    #1A1A1A;
```

### Typography
- Font: `'Bebas Neue', cursive` (headings) + `'Inter', sans-serif` (body)
- Headings: uppercase, `--text` or `--accent`
- Body: 400, `--text`

### Section Order
```
Nav → Hero → Trainer Profile → Programs → Booking Form →
Before/After Transformations → Testimonials → Location & WhatsApp → Footer
```

### Hero Image
Unsplash: intense gym training, dark atmosphere
`https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600`

### Trainer Profile Layout
```
[Photo — 200px circle with red border]  |  Coach Rahul Singh
                                         |  10+ Years | ISSA Certified
                                         |  Strength & Conditioning Specialist
                                         |  "I don't just train bodies — I build mindsets..."
```

### Programs (4 cards) — dark cards with red accent top border
| Icon | Program | Description |
|---|---|---|
| fa-fire | Fat Loss | Science-backed cardio + nutrition for maximum fat burn |
| fa-dumbbell | Muscle Gain | Progressive overload programs for serious size and strength |
| fa-bolt | Strength Training | Powerlifting-inspired training to build raw functional strength |
| fa-user | Personal Training | 1-on-1 coaching tailored exactly to your body and goals |

### Booking Form — WhatsApp Message Template
```
Hey Coach Rahul! 💪 I want to book a FREE trial.

Name: {name}
Phone: {phone}
Goal: {goal}
Preferred Time: {timing}

Looking forward to starting! 🔥
```

### Before/After Cards (3)
Layout: side-by-side image placeholders with "BEFORE" / "AFTER" overlay labels
- Amit K. — "Lost 12kg in 90 Days"
- Sneha R. — "Gained 6kg Muscle in 4 Months"
- Karan M. — "Went from 28% to 14% Body Fat"

Dark cards: `background: --card-bg`, red accent border-top `4px solid --accent`

---

## Error Handling
- Form validation: client-side only (no backend), red border + text below field
- Images: `loading="lazy"` on all `<img>` tags; Unsplash URLs as `src` (no download needed)
- WhatsApp: if phone number placeholder not replaced, log warning to console only

## Performance
- All dependencies via CDN (GSAP, Font Awesome, Google Fonts) — no npm build
- Images: Unsplash with `?w=1600&q=80` for compression
- CSS: single file per site, no preprocessor

## Security
- No user data stored or transmitted except via WhatsApp deep-link (client opens their own WA)
- No eval(), no innerHTML with user input — form values encoded via encodeURIComponent()
- No external scripts beyond trusted CDNs (GSAP, FA, Google Fonts)
