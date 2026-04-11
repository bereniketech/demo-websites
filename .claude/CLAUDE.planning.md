# Plan: Demo Websites — Clinic · Real Estate · Gym

## Goal
Build 3 standalone static demo websites showcasing the range and quality of client sites that can be built: a clinic appointment site, a real estate lead-gen site, and a gym trial/membership site.

## Constraints
- Pure HTML/CSS/JS — no framework, no build tool required (each site is a single folder)
- Package manager: npm (for any dev tooling / live-server)
- Hosting: Vercel (each subfolder deployed as a separate project)
- No backend — forms submit via WhatsApp deep-link or mailto fallback
- Each site must be fully self-contained in its folder (clinic/, real-estate/, gym/)

## Deliverables
The plan must produce:
- `.spec/plan.md` — high-level project overview: goal, tech stack, architecture diagram, file structure
- `.spec/requirements.md` — user stories and acceptance criteria (EARS format)
- `.spec/design.md` — architecture, visual design system per site, component breakdown, WhatsApp CTA patterns
- `.spec/tasks.md` — ordered task list with acceptance criteria per task

## Instructions
Use /planning-specification-architecture.
Write `plan.md` first as the high-level overview, then follow the skill's 3-phase gated workflow: requirements → user approves → design → user approves → tasks → user approves.
Do not write implementation code. Do not skip approval gates.
Save each artifact only after the user explicitly approves that phase.
