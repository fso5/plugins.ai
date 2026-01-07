# plugins.ai

A package registry for AI components. Like npm, but for skills, agents, prompts, and other AI building blocks.

## What's Here

| Folder | Contains |
|--------|----------|
| `skills/` | Model-invoked capabilities (Claude uses automatically) |
| `agents/` | Specialized agents that run in their own context |
| `prompts/` | Reusable prompt templates and procedures |
| `claudes/` | CLAUDE.md project templates |
| `commands/` | User-invoked slash commands |
| `hooks/` | Event handlers (hooks.json + action scripts) |
| `mcps/` | MCP server configurations |

## Usage

Reference components in your project's CLAUDE.md:

```md
## Plugins
- skills/code-review
- agents/supabase-backend
```

Your AI assistant reads this and applies the referenced components.

## Contributing

1. Add a `.md` file to the appropriate folder
2. Include frontmatter with `name`, `description`, and any `requires`/`suggests` dependencies
3. Keep it minimal and explicit

See [claude.md](./claude.md) for detailed style rules.

## License

MIT

---
Created for the AI development community.
