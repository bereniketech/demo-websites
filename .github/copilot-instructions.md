# Demo Websites — Clinic · Real Estate · Gym

## Skills — Read These Files for Coding Standards
When implementing tasks, read these files for detailed coding standards:
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/development/code-writing-software-development/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/continuous-learning/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/strategic-compact/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/planning/autonomous-agents-task-automation/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/testing-quality/tdd-workflow/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/testing-quality/security-review/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/development/build-website-web-app/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/ui-design/cinematic-website-builder/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/ui-design/ui-ux-pro-max/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/integrations/whatsapp-automation/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/ai-platform/notebooklm/SKILL.md
- C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/wrapup/SKILL.md

## Second Brain — NotebookLM
**ALWAYS check the AI Brain BEFORE searching the codebase.**
When you need context about past decisions, patterns, architecture, or session history:
1. Read the Brain notebook ID from `.claude/memory/` files (look for `reference_brain_notebook.md`)
2. If the NotebookLM CLI is available, query: `notebooklm ask "your question" --notebook <BRAIN_NOTEBOOK_ID>`
3. Also check memory files in `.claude/memory/` and planning artifacts in `.spec/`
4. If the Brain or memory files return relevant context → use it directly, DO NOT search the codebase
5. Only if prior sources have no match → fall back to codebase search

## Active Feature
Feature: initial build
Tasks: .spec/tasks/
Current task: .spec/tasks/task-001.md
Branch: main

## Start Here
1. Read `## Active Feature` above — note the current task path.
2. Open the current task file — it is self-contained.
3. Read the skill files listed in ## Skills above for coding standards.
4. Implement. Run `/task-handoff` when done.
5. Run `/wrapup` at end of session to save context to the AI Brain.

## Reference
- Agents: `.claude/agents/` — invoke with `@agent-name`; use only when task specifies
- Config: `.claude/project-config.md` — deployment targets, env vars, hosting
- Rules: `.claude/rules/` — applied automatically

## Key Commands
When the user types `/command-name`, read the corresponding file and follow its instructions exactly.

### Core Workflow
- `/checkpoint` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/core/checkpoint.md
- `/save-session` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/core/save-session.md
- `/resume-session` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/core/resume-session.md
- `/task-handoff` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/core/task-handoff.md
- `/sessions` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/core/sessions.md
- `/aside` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/core/aside.md
- `/wrapup` → C:/Users/Hp/Desktop/Experiment/claude_kit/skills/core/wrapup/SKILL.md

### Development
- `/verify` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/development/verify.md
- `/code-review` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/development/code-review.md
- `/build-fix` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/development/build-fix.md
- `/refactor-clean` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/development/refactor-clean.md
- `/update-docs` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/development/update-docs.md

### Testing & Quality
- `/tdd` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/testing-quality/tdd.md
- `/e2e` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/testing-quality/e2e.md

### Planning
- `/plan` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/planning/plan.md
- `/orchestrate` → C:/Users/Hp/Desktop/Experiment/claude_kit/commands/planning/orchestrate.md

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
