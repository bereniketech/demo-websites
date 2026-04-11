# Requirements — Demo Websites Portfolio

## Shared Requirements (all 3 sites)

### US-00 — Shared Infrastructure
As a visitor on any device, I want the site to load fast and look great on mobile so I don't bounce before seeing the offer.

**AC:**
- WHEN the page loads, the system shall render above-the-fold content in under 2 seconds on a 4G connection
- WHEN the viewport is below 768px, the system shall display a single-column mobile layout
- WHERE navigation exists, the system shall provide a sticky nav with the primary CTA button always visible
- WHEN a visitor scrolls to any section, the system shall trigger a GSAP fade-in/slide-up reveal animation
- WHERE a WhatsApp CTA exists, the system shall open `wa.me/<number>` in a new tab with a pre-filled message
- WHEN the page loads on mobile, the system shall display a floating WhatsApp button (bottom-right, always visible)

---

## 1. Clinic — "Appointment + Trust Machine"

### US-01 — Hero Section
As a patient landing on the site, I want to immediately understand what the clinic offers and book an appointment so I don't have to search.

**AC:**
- WHEN the page loads, the system shall display a full-viewport hero with a doctor/clinic image, headline "Trusted Care for Your Family", and a "Book Appointment" CTA button
- WHEN the user clicks "Book Appointment", the system shall scroll to the appointment form section

### US-02 — Doctor Profile
As a new patient, I want to see the doctor's credentials and experience so I can trust them before booking.

**AC:**
- WHERE the doctor profile section exists, the system shall display: name, qualifications, years of experience, specialization, and a short credibility statement
- WHERE a profile photo placeholder exists, the system shall display a professional-looking placeholder image

### US-03 — Services
As a patient, I want to see what treatments are available so I know if this clinic can help me.

**AC:**
- WHERE the services section exists, the system shall display at minimum 3 service cards: General Consultation, Skin Treatment, and one additional (Dental Care or Physiotherapy)
- EACH service card shall include: icon, service name, and a 1–2 sentence description

### US-04 — Appointment Booking Form
As a patient, I want to book a consultation by filling in a short form so I can confirm my visit.

**AC:**
- WHERE the booking form exists, the system shall include fields: Name, Phone Number, Problem/Concern (dropdown), Preferred Time
- WHEN the user submits the form, the system shall open WhatsApp with a pre-filled message containing the form values
- IF any required field is empty on submit, the system shall display an inline validation message without page reload

### US-05 — Testimonials
As a first-time visitor, I want to read patient reviews so I feel confident about the clinic's quality.

**AC:**
- WHERE the testimonials section exists, the system shall display at minimum 3 patient reviews with name, review text, and a star rating
- The system shall display testimonials in a horizontally scrollable card row on mobile

### US-06 — Location & Contact
As a patient, I want to find the clinic's location and contact options so I can visit or call.

**AC:**
- WHERE the location section exists, the system shall display a Google Maps embed (iframe) showing a placeholder clinic location
- The system shall display a WhatsApp button ("Chat with Us") and a Call button ("Call Now") with tel: link

---

## 2. Real Estate — "Lead Generation Engine"

### US-07 — Hero Section
As a property buyer/seller, I want to immediately feel this is a premium agency so I trust them with a major financial decision.

**AC:**
- WHEN the page loads, the system shall display a full-viewport hero with a cinematic city/building image, headline "Find Your Dream Home in Mumbai", and a "Get Property Listings" CTA
- WHEN the user clicks the hero CTA, the system shall scroll to the lead capture form

### US-08 — Property Listings
As a buyer, I want to browse available properties so I can shortlist options before contacting an agent.

**AC:**
- WHERE the property listings section exists, the system shall display at minimum 4 property cards
- EACH card shall include: property image, type (e.g. 2BHK Apartment), price (e.g. ₹85L), location, size (sq ft), and a "View Details" button
- WHEN "View Details" is clicked, the system shall open a WhatsApp chat with a pre-filled enquiry for that property

### US-09 — Lead Capture Form
As an agent, I want to collect buyer details so I can follow up with personalised listings.

**AC:**
- WHERE the lead form exists, the system shall include fields: Name, Phone Number, Budget Range (dropdown), Preferred Location
- WHEN submitted, the system shall open WhatsApp with a pre-filled lead summary message
- IF any required field is empty, the system shall show inline validation

### US-10 — Featured Properties
As a buyer, I want to see premium listings highlighted so I know which properties are most desirable.

**AC:**
- WHERE the featured properties section exists, the system shall display 2–3 highlighted cards with a "Featured" badge and slightly elevated card styling

### US-11 — WhatsApp Agent CTA
As a buyer, I want to instantly talk to an agent without filling a form so I can ask questions quickly.

**AC:**
- WHERE the WhatsApp CTA section exists, the system shall display a prominent "Talk to Agent Now" button linking to `wa.me/<number>`
- The system shall display this section between the property listings and the map

### US-12 — Map / Areas Served
As a buyer, I want to know which areas the agency covers so I can decide if they're relevant to me.

**AC:**
- WHERE the map section exists, the system shall display a Google Maps embed and a list of served areas (Malad, Goregaon, Andheri, Borivali, Kandivali)

---

## 3. Gym — "Transformation + Trial System"

### US-13 — Hero Section
As a prospect, I want to immediately feel the energy of the gym and know I can start a free trial so I don't hesitate.

**AC:**
- WHEN the page loads, the system shall display a full-viewport hero with a high-energy gym image, headline "Transform Your Body in 90 Days", and a "Start Free Trial" CTA
- WHEN the user clicks the CTA, the system shall scroll to the booking form

### US-14 — Trainer Profile
As a prospect, I want to see the trainer's credentials so I trust the program before committing.

**AC:**
- WHERE the trainer profile section exists, the system shall display: coach name, years of experience, certifications, and a short trust bio
- The system shall display a trainer photo placeholder

### US-15 — Programs
As a prospect, I want to see what training programs are available so I can pick one that matches my goal.

**AC:**
- WHERE the programs section exists, the system shall display 4 program cards: Fat Loss, Muscle Gain, Strength Training, Personal Training
- EACH card shall include: icon, program name, short description, and a "Learn More" / WhatsApp CTA

### US-16 — Free Trial Booking Form
As a prospect, I want to book a free trial session quickly so I can experience the gym before committing.

**AC:**
- WHERE the booking form exists, the system shall include fields: Name, Phone Number, Fitness Goal (dropdown), Preferred Timing (dropdown)
- WHEN submitted, the system shall open WhatsApp with a pre-filled trial booking message
- IF any required field is empty, the system shall show inline validation

### US-17 — Before / After Transformations
As a sceptical prospect, I want to see real transformation results so I believe the program works.

**AC:**
- WHERE the transformations section exists, the system shall display at minimum 3 before/after image pairs with member name and result stat (e.g. "Lost 12kg in 90 days")
- The system shall use placeholder before/after images with overlaid text labels

### US-18 — Testimonials
As a prospect, I want to read client reviews so I feel confident before signing up.

**AC:**
- WHERE the testimonials section exists, the system shall display at minimum 3 client testimonials with name, review, and star rating

### US-19 — Location & WhatsApp
As a prospect, I want to find the gym and chat with the trainer directly.

**AC:**
- WHERE the location section exists, the system shall display a Google Maps embed
- The system shall display a "Chat with Trainer" WhatsApp button linking to `wa.me/<number>`
