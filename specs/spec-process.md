---
name: spec-process
description: The process of decomposing an app into specs
status: draft
---

# The Spec Process

How to go from "I want an app" to buildable, agnostic specs.

## The Core Loop

```
1. Start with intent
2. Ask: what does this need?
3. Break it down
4. Repeat until atomic
5. Reference or define
```

## The Process

### Step 1: Start with Intent

User says: "I want an app that does X"

Ask:
- What is the core purpose?
- Who uses it?
- What's the main flow?

### Step 2: Identify Top-Level Needs

An app typically needs:
- Frontend (what users see/interact with)
- Backend (business logic, processing)
- API (how frontend talks to backend)
- Data (what gets stored/retrieved)
- Auth (who can do what)

Based on the use case, determine what's needed. You're the expert.

### Step 3: Break Down Each Need

For each top-level need, ask: what does THIS need?

**Frontend needs:**
- Pages (routable screens)
- Layouts (shared structure)
- Components (reusable UI pieces)
- Flows (navigation, user journeys)
- Theme (design tokens)

**Backend needs:**
- Services (business logic units)
- Jobs (background/scheduled tasks)
- Integrations (external APIs)

**API needs:**
- Endpoints (routes + handlers)
- Auth schemes (how to authenticate)
- Validation (request/response shapes)

**Data needs:**
- Entities (things that exist)
- Relationships (how entities connect)
- Validation rules (constraints)

### Step 4: Keep Breaking Down

Take any piece and ask again: what does THIS need?

**A login feature needs:**
- A page (where it lives)
- A form component (UI)
- An API endpoint (authentication)
- A user entity (data)
- A session/token (auth state)
- Success/error flows (navigation)

**A form component needs:**
- Input fields
- A submit button
- Validation logic
- Loading state
- Error display

**An input field needs:**
- A label
- The input itself
- Error message
- Help text (optional)

### Step 5: Stop When Atomic

Stop decomposing when you hit things that are:
- **Agnostic** - not tied to a specific tech
- **Reusable** - used in many places
- **Primitive** - can't meaningfully break down further

Examples of atomic:
- Button (pattern: clickable action trigger)
- Input (pattern: text entry)
- Entity field (type: string, number, etc.)
- HTTP method (GET, POST, etc.)

### Step 6: Reference or Define

At the atomic level:
- **Reference** if it exists (WAI-ARIA patterns, JSON Schema types, HTTP specs)
- **Define** if it doesn't (custom patterns, domain-specific things)

---

## Questions at Each Level

### For any node, ask:

**Why** - What purpose does this serve?
**Who** - Who interacts with this?
**What** - What is it made of?
**Where** - Where does it live/appear?
**When** - When is it shown/triggered?
**How** - How does it connect to other things?
**Complete When** - What proves this is done? (testable criteria)

### To know if you should break down further:

- Can I build this directly? → Stop, spec it
- Is this still abstract? → Break down more
- Does this have multiple distinct parts? → Break down
- Is this a primitive pattern? → Stop, reference it

---

## Example: Login Feature

```
"I want users to log in"
    │
    ▼
What does login need?
    │
    ├── Page (where it lives)
    │   └── route: /login
    │
    ├── Form Component
    │   ├── username input
    │   ├── password input
    │   ├── submit button
    │   ├── error display
    │   └── loading state
    │
    ├── API Endpoint
    │   ├── POST /auth/login
    │   ├── request: { username, password }
    │   └── response: { token } or { error }
    │
    ├── User Entity
    │   ├── username: string
    │   ├── password: hashed string
    │   └── ...
    │
    └── Flows
        ├── success → redirect to dashboard
        └── error → show message, stay on page
```

Each of these **may or may not** get its own spec.

**It depends on:**
- Can the AI build this reliably in one shot?
- If yes → one spec is enough
- If no → break down further, create referenced specs

**One spec = one thing, complete:**
- A Form spec contains everything about that form:
  - behavior (states, validation logic)
  - design (layout, styling)
  - data (field definitions)
- All in ONE spec, not split across multiple

**Specs reference other specs:**
```
Login Page Spec
    └── references → Login Form Spec
                         ├── contains: behavior, design, data
                         └── references → Button Spec
                                        → Input Spec
```

The page spec doesn't duplicate the form details - it references the form spec.
The form spec doesn't duplicate button details - it references button spec.

**The sizing principle:**
Specs are sized for clarity - what's clear for humans is clear for AI.
Break down into referenced specs until each can be understood and built reliably.
Human and AI are symbiotic - good specs serve both.

---

## The Output

After decomposition, you have:
- A **graph** of specs (nodes + connections)
- Each spec at the **right level** (not too abstract, not too detailed)
- **References** to existing standards where possible
- **Definitions** for app-specific things

This graph IS the app definition. Tech-specific compilation comes after.

---

## What We're NOT Doing

- NOT predefining all possible node types
- NOT limiting what can exist
- NOT forcing a hierarchy
- NOT specifying implementation

We ARE:
- Following a process
- Asking the right questions
- Breaking down until atomic
- Making connections explicit
- Keeping it agnostic
