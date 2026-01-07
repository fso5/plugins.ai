# plugins.ai

npm for AI. Reusable components for Claude and AI agents.

## Structure

```
skills/      Model-invoked capabilities (Claude uses automatically based on context)
agents/      Specialized agents that run in their own context
prompts/     Reusable prompt templates and procedures
claudes/     CLAUDE.md project templates
commands/    User-invoked slash commands (/review, /deploy, etc.)
```

## Adding Components

Each component is a single `.md` file in the appropriate folder.

### Frontmatter Spec

Every file starts with YAML frontmatter:

```yaml
---
name: component-name
description: One line description of what this does
requires:           # Won't work without these (optional)
  - skills/thing
  - prompts/other
suggests:           # Works better with these (optional)
  - prompts/related
---
```

### Naming

- Lowercase, hyphenated: `supabase-backend.md`, `code-review.md`
- Be explicit: `nextjs-app-router.md` not `nextjs.md`
- No type suffix: folder already indicates type

### Content

After frontmatter, write the component content. Keep it:
- Self-contained (no external dependencies beyond requires/suggests)
- Explicit (no assumptions about context)
- Minimal (only what's needed, nothing extra)

## Using Components

In your project's CLAUDE.md, reference components:

```md
## Plugins
- skills/code-review
- agents/supabase-backend
- prompts/commit-message
```

The AI reads this, fetches from plugins.ai, and applies them.

## Style Rules

1. **No fluff** - Every line should be necessary
2. **No emoji** - Unless the component specifically requires them
3. **Explicit names** - Someone should know what it does from the filename
4. **Flat structure** - No nested folders within component types
5. **Single responsibility** - One component does one thing well

## Contributing

Add your `.md` file to the right folder. Follow the frontmatter spec. Keep it minimal.
