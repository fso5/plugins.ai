---
name: session-end
description: Consolidation procedure - save work, persist learnings, clear working memory
suggests:
  - prompts/session-start
---

# Session End Procedure

Run this at the end of every agent session. This is where learning happens.

## Checklist

### 1. Save All Work
- [ ] Run `git status`
- [ ] Commit changes or document why uncommitted (WIP, experimental)
- [ ] Confirm: No work will be lost

### 2. Episodic Consolidation

Ask: **Was this session meaningful enough to log?**

Log if:
- Significant feature completed
- Important decisions made
- Major bugs fixed
- New patterns discovered
- Failed experiments with learnings

Skip if:
- Routine maintenance
- Trivial fixes
- No interesting discoveries

If logging, write to `.claude/memory/episodic/recent-streams.md`:

```markdown
## Stream [N]: [Title]
**Date**: YYYY-MM-DD
**Status**: completed/ongoing/blocked

### What Happened
[Key events, not verbose logs]

### What We Learned
[Insights, patterns, mistakes]

### Key Decisions
- [Decision with rationale]

### Follow-up
- [ ] [Action item]
```

### 3. Semantic Extraction

**Patterns**: Did we discover reusable solutions?
- If yes, document in `.claude/memory/semantic/patterns/`

**Decisions**: Did we make architectural choices?
- If yes, create ADR in `.claude/memory/semantic/decisions/`

**Conventions**: Did standards change?
- If yes, update `.claude/memory/semantic/conventions/`

### 4. Procedural Codification

Did we repeat tasks manually?
- If repeatable, create script in `.claude/memory/procedural/scripts/`
- Or checklist in `.claude/memory/procedural/checklists/`

### 5. Clear Working Memory
- [ ] Delete/archive `.claude/working-memory/` contents
- [ ] Leave directory empty for next session

### 6. Maintenance
- [ ] If > 5 streams in recent-streams.md, archive oldest
- [ ] Note any system health issues

## Philosophy

- Not everything persists - only meaningful content
- Quality over quantity
- Like sleep: strengthen important memories, prune unimportant ones
- Don't skip this - it's where learning happens
