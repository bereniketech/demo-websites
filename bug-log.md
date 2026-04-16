# Bug Log — Demo Websites

## [2026-04-16] Missing security attributes on gym WhatsApp float button | What broke: Security review found WhatsApp float link missing `target="_blank"` and `rel="noopener noreferrer"` attributes | Root cause: Gym HTML was generated without these security attributes while clinic and real-estate had them | Fix: Added `target="_blank" rel="noopener noreferrer"` to the WhatsApp float link in gym/index.html | File(s): gym/index.html (line 380)
