---
name: create-template
description: Create a new technology template. Use when adding support for a new tech.
---

# Create Template Skill

Universal procedure for creating a template for a new technology.

## What is a Template?

A template contains tech-specific knowledge:
- How to initialize/install
- Config file contents
- File structure conventions
- Code patterns
- Common commands

Templates are atomic - one technology per template. They compose together.

## Procedure

### 1. Identify the Technology

What are we templating?
- Framework (React, Vue, Django)
- Build tool (Vite, Webpack)
- Styling (Tailwind, CSS Modules)
- Backend service (Supabase, Firebase)
- Testing (Vitest, Jest, Pytest)
- Runtime (Node, Bun, Deno)

### 2. Research the Technology

Gather official knowledge:
- Official docs / getting started
- Init commands
- Required config files
- Project structure conventions
- Best practices

### 3. Define Template Sections

Every template should include:

```markdown
---
name: technology-name
type: template
category: framework | build | styling | backend | testing | runtime
---

# Technology Name

## Overview
What it is, when to use it

## Requirements
- Prerequisites (runtime, tools)
- Minimum versions

## Init
How to initialize a new project
- Commands to run
- Prompts to answer

## Config Files
Each required config file:
- Filename
- Contents
- What each part does

## Structure
Expected folder/file structure

## Patterns
Common code patterns:
- How to create a component
- How to handle state
- How to make API calls
- etc.

## Commands
Common commands:
- Dev server
- Build
- Test
- Lint

## Integrates With
Other templates this works with
```

### 4. Write the Template

Fill in each section with:
- Actual code/config (not pseudocode)
- Copy-pasteable examples
- Clear explanations

### 5. Validate the Template

Test it:
- Follow the template from scratch
- Does it produce a working setup?
- Is anything missing?

### 6. Add to Templates

Save to `plugins.ai/templates/{name}.md`

## Quality Checklist

- [ ] One technology only (atomic)
- [ ] Init commands are complete
- [ ] Config files are copy-pasteable
- [ ] Patterns are practical, not theoretical
- [ ] Commands are accurate
- [ ] Tested from scratch

## Output

A complete template file that:
- Can be followed to set up the technology
- Composes with other templates
- Provides patterns for implementation
