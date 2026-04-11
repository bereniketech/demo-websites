# TASK-011 — Cross-Site QA + Security Check + Git Commit + Push

**Sites:** `clinic/`, `real-estate/`, `gym/`
**Status:** pending
**Requirements:** US-00 (all sites)
**Skills:** build-website-web-app, security-review
**Depends on:** TASK-008, TASK-009, TASK-010 (all 3 sites complete)

---

## Context

Final task. All 3 sites are built — now verify everything works correctly across all of them before committing and pushing to GitHub. This task covers:

1. **Visual QA** — all 3 sites at 3 viewport widths
2. **Functional QA** — forms, WhatsApp links, animations, nav
3. **Security review** — XSS vectors, input handling
4. **Git commit + push** — clean history, correct remote

---

## QA Checklist — Run for Each Site

Open each `index.html` in Chrome. Use DevTools (F12).

### A. Console & Network
- [ ] **Clinic** — Zero console errors. All CDN resources load (200 status in Network tab)
- [ ] **Real Estate** — Zero console errors. All CDN resources load
- [ ] **Gym** — Zero console errors. All CDN resources load

### B. Viewport Testing (use DevTools Device Toolbar)

Test each site at: **320px** (small phone), **768px** (tablet), **1280px** (desktop)

| Check | Clinic | Real Estate | Gym |
|---|---|---|---|
| No horizontal scroll | ☐ | ☐ | ☐ |
| Hero fills 100vh | ☐ | ☐ | ☐ |
| Nav sticks at top | ☐ | ☐ | ☐ |
| Card grids reflow correctly | ☐ | ☐ | ☐ |
| Form rows stack to single column ≤768px | ☐ | ☐ | ☐ |
| Text readable (not too small) | ☐ | ☐ | ☐ |
| Buttons tappable (≥44px height) | ☐ | ☐ | ☐ |

### C. Mobile Nav
- [ ] **All 3 sites**: hamburger visible at 768px and below
- [ ] Hamburger click opens full-screen overlay
- [ ] Overlay link click scrolls to section and closes overlay
- [ ] Hamburger animates to X when overlay open

### D. Hero Animations
- [ ] **All 3 sites**: trust badge → headline → subheadline → CTA animate in sequentially on load
- [ ] Elements do NOT flash at wrong opacity before animating (check GSAP `set()` called before `to()`)

### E. Scroll Animations
- [ ] **All 3 sites**: each `[data-animate]` section fades+slides up as it enters viewport
- [ ] No sections visible before scroll (opacity 0 until triggered)
- [ ] Animations don't re-trigger on scroll-up then scroll-down

### F. Forms & WhatsApp

#### Clinic Booking Form:
- [ ] Submit empty → 4 red borders + 4 error messages shown simultaneously
- [ ] Type in a field → its error clears immediately
- [ ] Fill all fields correctly → submit → WhatsApp opens in new tab
- [ ] WhatsApp message contains: clinic greeting, name, phone, concern, preferred time
- [ ] Message is URL-encoded (no raw spaces in `wa.me` URL)
- [ ] Page does NOT reload on submit

#### Real Estate Lead Form:
- [ ] Submit empty → 4 field errors shown
- [ ] Valid submit → WhatsApp opens with property lead message (budget + area included)
- [ ] Per-property "View Details" button → WhatsApp with property-specific message (type, location, price)

#### Gym Booking Form:
- [ ] Submit empty → 4 field errors shown (name, phone, goal, timing)
- [ ] Valid submit → WhatsApp opens with 💪 emoji trial booking message
- [ ] Message contains: name, phone, goal, timing

### G. WhatsApp Float Button
- [ ] **All 3 sites**: green circular button visible bottom-right on all scroll positions
- [ ] Pulse animation active (shadow grows/shrinks every 2s)
- [ ] Click opens `wa.me/...` in new tab
- [ ] `rel="noopener noreferrer"` present on all WhatsApp links

### H. Location Sections
- [ ] **All 3 sites**: Google Maps iframe renders (may show satellite view or map)
- [ ] "Chat with Us" / "Chat with Trainer" button → WhatsApp
- [ ] "Call Now" button → `tel:` link (on desktop: may prompt to open a call app)

### I. Imagery
- [ ] **All 3 sites**: Unsplash images load (no broken image icons)
- [ ] Images have `loading="lazy"` attribute
- [ ] Images have descriptive `alt` text (not empty)
- [ ] Real Estate property card images zoom on card hover

---

## Security Review

Run these checks on all 3 `script.js` files:

### XSS Prevention
- [ ] Search for `innerHTML` in all 3 script files — confirm it is NOT used with any user input variable
- [ ] Confirm all form field values pass through `encodeURIComponent()` inside `buildWhatsApp()` before use in URL
- [ ] Confirm `buildWhatsApp()` uses `window.open(...)` not `document.write(...)` or `location.href = ...`

### Input Handling
- [ ] `novalidate` on all `<form>` tags (disables native browser validation — custom validation used instead)
- [ ] No `eval()` anywhere in JS files
- [ ] No `document.write()` anywhere in JS files

### External Links
- [ ] All `target="_blank"` links also have `rel="noopener noreferrer"`
- [ ] CDN links point to trusted origins only: `fonts.googleapis.com`, `cdnjs.cloudflare.com`

### Quick grep commands to run:
```bash
grep -n "innerHTML" clinic/script.js real-estate/script.js gym/script.js
grep -n "eval(" clinic/script.js real-estate/script.js gym/script.js
grep -n "document.write" clinic/script.js real-estate/script.js gym/script.js
```
Expected result for all three: no matches (or only safe uses not involving user input).

---

## Bug Fixes

If any QA check fails, fix it before proceeding to the git step. Log each fix in `bug-log.md`:

```markdown
## [2025-XX-XX] {title} | What broke: … | Root cause: … | Fix: … | File(s): …
```

Create `bug-log.md` in the project root if it doesn't exist.

---

## Git Commit + Push

Once all QA checks pass:

### Step 1 — Verify git status
```bash
git -C "c:/Users/Hp/Desktop/Experiment/demo-websites" status
```
Expected: 3 new site folders + scaffold files untracked or modified.

### Step 2 — Stage files
```bash
cd "c:/Users/Hp/Desktop/Experiment/demo-websites"
git add clinic/ real-estate/ gym/ .gitignore .claude/ .spec/ .github/ idea.md
```
Do NOT add `.env` files (there are none, but confirm).

### Step 3 — Commit
```bash
git commit -m "feat: build clinic, real-estate and gym demo websites

- Clinic: appointment booking site (blue/green, Inter font)
- Real Estate: lead gen site (charcoal/gold, Playfair Display)
- Gym: transformation trial site (dark, Bebas Neue, electric red)
- All 3: GSAP scroll animations, WhatsApp form submission, mobile nav
- Scaffold: .claude/ junctions, .spec/ plan/requirements/design/tasks

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
```

### Step 4 — Push
```bash
git push -u origin main
```

Confirm push succeeds (no authentication errors). If push fails due to auth, the user needs to set up a GitHub personal access token or SSH key — do not force push.

---

## Post-Push Verification

After push succeeds:
- [ ] Visit `https://github.com/bereniketech/demo-websites` and confirm all 3 site folders are present
- [ ] Confirm commit message is visible in the GitHub UI
- [ ] (Optional) Deploy to Vercel: `vercel --cwd clinic` — requires Vercel CLI installed and logged in

---

## Acceptance Criteria

- [ ] All QA checklist items above checked off
- [ ] No console errors on any of the 3 sites
- [ ] No XSS vectors found in security review
- [ ] `bug-log.md` created and populated if any bugs were fixed (or confirmed empty if no bugs)
- [ ] `git status` shows clean working tree after commit
- [ ] `git push` completes successfully
- [ ] All 3 site folders visible at `https://github.com/bereniketech/demo-websites`

---

## Done

All 3 demo websites are built, QA'd, secured, and pushed to GitHub. The spec is complete.
