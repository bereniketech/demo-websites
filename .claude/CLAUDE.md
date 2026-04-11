# Demo Websites — Clinic · Real Estate · Gym

@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/development/code-writing-software-development/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/continuous-learning/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/strategic-compact/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/planning/autonomous-agents-task-automation/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/testing-quality/tdd-workflow/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/testing-quality/security-review/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/development/build-website-web-app/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/ui-design/cinematic-website-builder/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/ui-design/ui-ux-pro-max/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/integrations/whatsapp-automation/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/ai-platform/notebooklm/SKILL.md
@C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/wrapup/SKILL.md

## Second Brain — NotebookLM
**ALWAYS check the AI Brain notebook BEFORE searching the codebase.**
When you need context about past decisions, patterns, architecture, or session history:
1. Read Brain notebook ID from memory files (`reference_brain_notebook.md`)
2. Query: `notebooklm ask "your question" --notebook <BRAIN_NOTEBOOK_ID>`
3. If the Brain returns relevant context → use it directly, DO NOT search the codebase
4. Only if the Brain has no match → fall back to codebase search, memory files, and .spec/ artifacts
This is mandatory. Skipping the Brain check wastes tokens re-reading files that have already been summarized.

## Active Agent Team
- Software tasks (frontend, UI, components, bug fixes) → @software-cto — routes to web-frontend-expert, ui-design-expert
- Marketing tasks (CRO, lead gen, WhatsApp CTAs, copywriting) → @chief-marketing-officer — routes to growth-marketing-expert, brand-expert

## Project Structure
```
demo-websites/
├── clinic/          # Clinic appointment + trust site
├── real-estate/     # Real estate lead generation site
├── gym/             # Gym transformation + trial site
├── .claude/         # Claude config, junctions
├── .spec/           # Planning artifacts
└── .github/         # Copilot instructions
```

## Active Feature
Feature: initial build
Tasks: .spec/tasks/
Current task: .spec/tasks/task-001.md
Branch: main

## Start Here
1. Read `## Active Feature` above — note the current task path.
2. Open the current task file — it is self-contained.
3. Skills are already loaded via @imports above — no need to load them manually.
4. Implement. Run `/task-handoff` when done.
5. Run `/wrapup` at end of session to save context to the AI Brain.

## Reference (load on demand — do not read at session start)
- Agents: `.claude/agents/` — invoke with `@agent-name`; use only when task specifies
- Commands: `.claude/commands/` — key ones: `/verify`, `/task-handoff`, `/save-session`, `/tdd`, `/code-review`, `/wrapup`
- Config: `.claude/project-config.md` — deployment targets, env vars, hosting
- Rules: `.claude/rules/` — applied automatically

## Bug Log
Append to `bug-log.md` immediately after any fix:
`## [YYYY-MM-DD] title | What broke: … | Root cause: … | Fix: … | File(s): …`

## Self-Check (before marking task done)
1. Acceptance Criteria in current task file — all pass?
2. Hardcoded values that should be env vars?
3. Upstream/downstream breakage?
4. `bug-log.md` updated if errors occurred?

## End of Session
Run `/wrapup` after `/task-handoff` or when ending any work session.

## Output Discipline
Lead with the action. No preamble, no post-summary. Bullet points over prose.
