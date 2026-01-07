---
name: session-start
description: Boot sequence for AI agent sessions - load identity, context, and task
suggests:
  - prompts/session-end
---

# Session Start Procedure

Run this at the beginning of every agent session.

## Checklist

### 1. System Orientation
- [ ] Read project's CLAUDE.md or BIOS.md
- [ ] Understand where different types of information live
- [ ] Load system map into working memory

### 2. Identity Check
- [ ] Read `.claude/core/identity.md` (if exists)
- [ ] Read `.claude/core/purpose.md` (if exists)
- [ ] Confirm: Who is this project? Why does it exist?
- [ ] If files missing, ask user for context

### 3. Context Restoration
- [ ] Read `.claude/memory/episodic/recent-streams.md` (if exists)
- [ ] Scan last 3-5 session summaries
- [ ] Note: What was worked on recently? Any blockers? Key decisions?
- [ ] If missing/empty, this is a fresh start

### 4. Task Loading
- [ ] Check `.claude/working-memory/current-session.md`
- [ ] If exists: read task list, identify priorities
- [ ] If not: wait for user to provide objectives

### 5. Environment Check
- [ ] Run `git status` - is state expected?
- [ ] Any obvious issues to address before work?

### 6. Ready Confirmation
Confirm:
- System map loaded
- Identity clear
- Recent context restored
- Task identified
- Environment ready

## Quick Reference

```
1. CLAUDE.md → system map
2. core/ → identity & purpose
3. episodic/ → recent context
4. working-memory/ → today's work
5. git status → environment
```
