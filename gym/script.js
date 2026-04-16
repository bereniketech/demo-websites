// Hero Entrance Animation
function animateHero() {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const tl = gsap.timeline();
  tl.from('#heroTag', { opacity: 0, y: 20, duration: 0.6 })
    .from('#heroHeadline', { opacity: 0, y: 30, duration: 0.8 }, '-=0.3')
    .from('#heroSub', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4')
    .from('#heroCta', { opacity: 0, y: 20, duration: 0.6 }, '-=0.4');
}

// Scroll Animations for Elements with [data-animate]
function setupScrollAnimations() {
  if (!window.gsap) return;

  gsap.registerPlugin(ScrollTrigger);

  const animateElements = document.querySelectorAll('[data-animate]');
  animateElements.forEach((el) => {
    gsap.to(el, {
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        once: true,
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
    });
  });
}

// Form Validation & WhatsApp Integration
function setupForm() {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  const fields = [
    { id: 'name', errorId: 'nameError', check: (v) => v.trim().length >= 2 },
    { id: 'phone', errorId: 'phoneError', check: (v) => /^[\d\s\+\-\(\)]{7,15}$/.test(v.trim()) },
    { id: 'goal', errorId: 'goalError', check: (v) => v !== '' },
    { id: 'timing', errorId: 'timingError', check: (v) => v !== '' },
  ];

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let isValid = true;
    const values = {};

    fields.forEach(({ id, errorId, check }) => {
      const input = document.getElementById(id);
      const errorEl = document.getElementById(errorId);
      const value = input.value;

      if (!check(value)) {
        input.classList.add('error');
        errorEl.classList.add('show');
        isValid = false;
      } else {
        input.classList.remove('error');
        errorEl.classList.remove('show');
        values[id] = value;
      }
    });

    if (isValid) {
      const { name, phone, goal, timing } = values;
      const message =
        `Hey Coach Rahul! 💪 I want to book a FREE trial.\n\n` +
        `Name: ${name}\n` +
        `Phone: ${phone}\n` +
        `Goal: ${goal}\n` +
        `Preferred Timing: ${timing}\n\n` +
        `Looking forward to starting! 🔥`;

      buildWhatsApp('919XXXXXXXXX', message);
    }
  });

  // Clear errors on input
  fields.forEach(({ id, errorId }) => {
    const input = document.getElementById(id);
    input.addEventListener('input', () => {
      input.classList.remove('error');
      document.getElementById(errorId).classList.remove('show');
    });
  });
}

// WhatsApp Deep Link
function buildWhatsApp(phoneNumber, message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, '_blank');
}

// Mobile Nav Toggle
function setupMobileNav() {
  const toggle = document.getElementById('navToggle');
  const navLinks = document.querySelector('.nav__links');

  if (!toggle) return;

  toggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
  });

  // Close menu on link click
  if (navLinks) {
    navLinks.addEventListener('click', () => {
      navLinks.style.display = 'none';
    });
  }
}

// Smooth Scroll for Anchor Links
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Initialize all on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  animateHero();
  setupScrollAnimations();
  setupForm();
  setupMobileNav();
  setupSmoothScroll();
});
