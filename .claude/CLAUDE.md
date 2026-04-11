# Demo Websites — Clinic · Real Estate · Gym

Pure HTML/CSS/JS, no framework. Self-contained folders: `clinic/`, `real-estate/`, `gym/`. Deployed per-folder on Vercel. Forms use WhatsApp deep-link or mailto — no backend.

## Task Workflow (read this first)
1. Tasks live in `.spec/first draft/tasks/task-NNN.md` and are **self-contained** — the task file lists required skills, files, and acceptance criteria.
2. **Run each task in a Task subagent** (`general-purpose` type) with the task file path as the prompt. This isolates task context from the main loop.
3. Main loop loads skills **on demand** via the `Skill` tool — nothing is `@import`ed.
4. Run `/clear` between tasks to reset context.
5. End of session: invoke the `wrapup` skill.

## Brain Check (before non-trivial work)
1. Read Brain notebook ID from `memory/reference_brain_notebook.md`
2. Load the `notebooklm` skill, then: `notebooklm ask "<question>" --notebook <ID>`
3. If Brain has relevant context → use directly. Only fall back to codebase search if Brain has no match.

## Self-Check (before marking task done)
1. Acceptance Criteria in task file — all pass?
2. Hardcoded values that should be env vars?
3. Upstream/downstream breakage?
4. `bug-log.md` updated if errors occurred?

## Bug Log
On fix: `## [YYYY-MM-DD] title | What broke: … | Root cause: … | Fix: … | File(s): …`

## Output Discipline
Lead with the action. No preamble, no post-summary. Bullets over prose.
