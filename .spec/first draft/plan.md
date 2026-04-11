# Plan: Demo Websites Portfolio

## Goal
Three standalone static demo websites demonstrating the full range of client website capabilities: trust-building appointment booking (Clinic), premium lead generation (Real Estate), and high-energy trial conversion (Gym). Each site is a self-contained proof-of-concept deployable to Vercel.

## Tech Stack

| Layer | Choice | Reason |
|---|---|---|
| Markup | HTML5 | Zero dependencies, instant load |
| Styling | CSS3 + CSS custom properties | Maintainable theming per site |
| Interactions | Vanilla JS | No framework overhead for static sites |
| Animations | GSAP (CDN) | Cinematic scroll/reveal effects |
| Icons | Font Awesome (CDN) | Consistent iconography |
| Maps | Google Maps embed (iframe) | No API key required |
| WhatsApp CTA | `wa.me` deep-link | Direct lead capture without backend |
| Hosting | Vercel | Per-folder deployment, free tier |
| Package Manager | npm | Dev tooling (live-server, etc.) |

## Architecture

```
demo-websites/
├── clinic/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── images/
├── real-estate/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── images/
├── gym/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│       └── images/
├── .claude/
├── .spec/
├── .github/
├── .gitignore
└── idea.md
```

## Site Breakdown

### 1. Clinic — "Appointment + Trust Machine"
- **Palette:** Clean white + medical blue (#0066CC) + soft green accents
- **Tone:** Professional, reassuring, credible
- **Key conversion:** Book Appointment form → WhatsApp link
- **Differentiator:** Doctor profile with credentials, patient testimonials

### 2. Real Estate — "Lead Generation Engine"
- **Palette:** Deep charcoal (#1A1A2E) + gold (#C9A84C) + white
- **Tone:** Premium, aspirational, metropolitan
- **Key conversion:** Lead capture form → WhatsApp "Talk to Agent"
- **Differentiator:** Property cards with price/size, cinematic hero video/image

### 3. Gym — "Transformation + Trial System"
- **Palette:** Black (#0D0D0D) + electric red (#FF2D20) + white
- **Tone:** High-energy, motivational, results-driven
- **Key conversion:** Free Trial booking → WhatsApp "Chat with Trainer"
- **Differentiator:** Before/After section, program cards, urgency copy

## Shared Patterns Across All 3 Sites
- Sticky nav with CTA button
- Hero with full-viewport image/video + headline + CTA
- Social proof section (testimonials / transformations)
- Lead capture form (Name, Phone, Preference, Goal)
- WhatsApp floating button (bottom-right, always visible)
- Google Maps embed
- Mobile-first, fully responsive
- GSAP scroll-reveal animations on section entry

## Deployment Plan
Each subfolder is deployed as a separate Vercel project:
- `vercel --cwd clinic`
- `vercel --cwd real-estate`
- `vercel --cwd gym`
