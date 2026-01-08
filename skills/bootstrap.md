---
name: bootstrap
description: Set up a project to run. Use when starting implementation from a spec.
---

# Bootstrap Skill

Universal procedure for getting a project running. Tech-specific details come from templates.

## Procedure

### 1. Identify the Stack

From the spec or user, determine:
- Language (JavaScript, Python, Ruby, etc.)
- Runtime (Node, Bun, Deno, etc.)
- Framework (React, Vue, FastAPI, Rails, etc.)
- Build tool (Vite, Webpack, etc.)
- Styling (Tailwind, CSS modules, etc.)
- Backend services (Supabase, Firebase, etc.)

### 2. Load Templates

For each technology in the stack:
- Find the corresponding template
- Templates contain: init commands, config files, patterns

### 3. Check Environment

- Is the package manager available? (npm, bun, pip, gem)
- Is the runtime installed? (node, python, ruby)
- Any required global tools? (vite, create-react-app, etc.)

### 4. Initialize Project

Follow this sequence:
1. Create project directory (if needed)
2. Run init command (npm init, etc.)
3. Install dependencies
4. Create config files (from templates)
5. Create entry points (from templates)
6. Set up folder structure

### 5. Wire Up the Spec

Connect the spec to the project:
- Create files for each spec node (pages, components, etc.)
- Follow template patterns for file naming/structure
- Stub out the pieces before implementing

### 6. Verify Bootstrap

Before implementing features:
- Run the dev server
- Confirm it starts without errors
- Confirm the base renders (even if empty)

## Output

A running project with:
- All dependencies installed
- Config files in place
- Folder structure ready
- Dev server working
- Ready for implementation

## References

Tech-specific details come from templates:
- templates/react.md
- templates/vite.md
- templates/tailwind.md
- etc.
