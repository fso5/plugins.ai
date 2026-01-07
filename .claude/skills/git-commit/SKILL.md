---
name: git-commit
description: Commit staged changes with a well-formatted message. Use when committing code changes.
---

When committing changes:

1. Run `git status` to see what's staged
2. Run `git diff --cached` to understand the changes
3. Write a commit message that:
   - Has a short summary line (50 chars or less)
   - Explains what changed and why
   - Uses imperative mood ("Add feature" not "Added feature")

4. Commit using heredoc format:

```bash
git commit -m "$(cat <<'EOF'
Summary line here

Optional body explaining the changes in more detail.

🤖 Generated with [Claude Code](https://claude.com/claude-code)

Co-Authored-By: Claude <assistant-name> <noreply@anthropic.com>
EOF
)"
```

5. Run `git status` to verify the commit succeeded
