# TASK-006 — Clinic: Booking Form + WhatsApp Submission Logic

**Site:** `clinic/`
**Status:** pending
**Requirements:** US-04
**Skills:** build-website-web-app, whatsapp-automation
**Depends on:** TASK-001, TASK-002, TASK-003 (buildWhatsApp helper)

---

## Context

The booking form is the primary conversion point of the Clinic site. When a patient fills it in and clicks submit, their details are sent directly to the clinic's WhatsApp as a pre-formatted message — no backend required. This task adds the HTML form, its validation logic, and the WhatsApp message builder.

The WhatsApp phone number placeholder `919XXXXXXXXX` must be replaced with the real number before going live — leave it as a placeholder in the code.

---

## Files to Edit

- `clinic/index.html` — fill `#booking` section
- `clinic/style.css` — booking section background
- `clinic/script.js` — form validation + WhatsApp submission

---

## Detailed Instructions

### index.html — Booking Section

Replace the empty `<section id="booking" class="section booking">` with:

```html
<section id="booking" class="section booking">
  <div class="container">
    <p class="section-label text-center">Easy Scheduling</p>
    <h2 class="section-title text-center">Book an Appointment</h2>
    <p class="section-subtitle text-center">
      Fill in your details and we'll confirm your slot via WhatsApp — usually within 15 minutes.
    </p>

    <div class="form-card" data-animate>
      <form id="bookingForm" novalidate>

        <div class="form-row">
          <div class="form-group">
            <label for="name">Full Name <span class="required">*</span></label>
            <input type="text" id="name" name="name" placeholder="e.g. Priya Sharma" autocomplete="name" />
            <span class="form-error" id="nameError">Please enter your full name.</span>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number <span class="required">*</span></label>
            <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" autocomplete="tel" />
            <span class="form-error" id="phoneError">Please enter a valid phone number.</span>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="concern">Your Concern <span class="required">*</span></label>
            <select id="concern" name="concern">
              <option value="">Select your concern</option>
              <option value="General Consultation">General Consultation</option>
              <option value="Skin Issue">Skin Issue</option>
              <option value="Dental">Dental</option>
              <option value="Other">Other</option>
            </select>
            <span class="form-error" id="concernError">Please select a concern.</span>
          </div>
          <div class="form-group">
            <label for="time">Preferred Time <span class="required">*</span></label>
            <select id="time" name="time">
              <option value="">Select a time slot</option>
              <option value="Morning 9am – 12pm">Morning 9am – 12pm</option>
              <option value="Afternoon 12pm – 5pm">Afternoon 12pm – 5pm</option>
              <option value="Evening 5pm – 8pm">Evening 5pm – 8pm</option>
            </select>
            <span class="form-error" id="timeError">Please select a time slot.</span>
          </div>
        </div>

        <button type="submit" class="btn-accent btn-full">
          Book Consultation <i class="fa-solid fa-arrow-right"></i>
        </button>

        <p class="form-note">
          <i class="fa-solid fa-lock"></i>
          Your details are only shared with the clinic via WhatsApp. We never store your data.
        </p>

      </form>
    </div>
  </div>
</section>
```

### style.css — Booking Section Background

```css
/* ── BOOKING ── */
.booking {
  background: linear-gradient(135deg, #EBF4FF 0%, var(--bg) 100%);
}

.required { color: #E53935; font-size: 0.85em; }

.form-note {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 0.78rem;
  color: var(--muted);
  margin-top: 16px;
  justify-content: center;
}

.form-note i { color: var(--accent); }
```

### script.js — Form Validation + WhatsApp Submission

Add this block inside the `window.addEventListener('load', () => { ... })` callback, after the scroll animation setup:

```js
// ── BOOKING FORM — Validation + WhatsApp submit ──
const bookingForm = document.getElementById('bookingForm')

if (bookingForm) {
  bookingForm.addEventListener('submit', e => {
    e.preventDefault()
    let valid = true

    const fields = [
      { id: 'name',    errorId: 'nameError',    check: v => v.trim().length >= 2 },
      { id: 'phone',   errorId: 'phoneError',   check: v => /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim()) },
      { id: 'concern', errorId: 'concernError', check: v => v !== '' },
      { id: 'time',    errorId: 'timeError',    check: v => v !== '' },
    ]

    fields.forEach(({ id, errorId, check }) => {
      const input = document.getElementById(id)
      const error = document.getElementById(errorId)
      if (!check(input.value)) {
        input.classList.add('error')
        error.classList.add('visible')
        valid = false
      } else {
        input.classList.remove('error')
        error.classList.remove('visible')
      }
    })

    if (!valid) return

    // Build WhatsApp message — values come from DOM, encoded before use
    const name    = document.getElementById('name').value.trim()
    const phone   = document.getElementById('phone').value.trim()
    const concern = document.getElementById('concern').value
    const time    = document.getElementById('time').value

    const message = `Hello Dr. Anjali's Clinic! 🏥\nI'd like to book an appointment.\n\nName: ${name}\nPhone: ${phone}\nConcern: ${concern}\nPreferred Time: ${time}\n\nPlease confirm my slot. Thank you!`

    buildWhatsApp('919XXXXXXXXX', message)
  })

  // Clear error state on input change
  bookingForm.querySelectorAll('input, select').forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error')
      const errorEl = document.getElementById(input.id + 'Error')
      if (errorEl) errorEl.classList.remove('visible')
    })
  })
}
```

**Security note:** All user values are passed through `encodeURIComponent()` inside `buildWhatsApp()` — never written to `innerHTML`. No XSS risk.

---

## Acceptance Criteria

- [ ] Form renders with 4 fields in 2 rows of 2
- [ ] Submitting with all empty fields shows 4 red borders + 4 error messages
- [ ] Fixing a field and typing clears its error immediately
- [ ] Submitting with valid data opens a new WhatsApp tab with pre-filled message
- [ ] WhatsApp message contains name, phone, concern, and time slot
- [ ] Page does NOT reload on submit (e.preventDefault confirmed)
- [ ] Phone validation accepts "+91 98765 43210" format
- [ ] "We never store your data" privacy note visible below submit button
- [ ] Form card has scroll animation (`data-animate`)

---

## Next Task
→ TASK-007: Testimonials, location section, and footer.
