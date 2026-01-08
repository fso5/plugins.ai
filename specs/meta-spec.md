---
name: meta-spec
description: The grammar for app specs. Defines what can be expressed.
version: 0.1.0
---

# Meta-Spec: A Language for App Specs

## Node Types

Nodes are the things that exist in your app.

```yaml
Component:
  description: UI element that renders and accepts interaction
  properties:
    - inputs: list<field>        # data it receives
    - outputs: list<event>       # events it emits
    - states: list<state>        # internal states
    - layout: layout_token       # how it arranges itself
    - tone: tone_token           # visual feel

Service:
  description: Backend logic that processes data
  properties:
    - inputs: list<field>        # data it accepts
    - outputs: list<field>       # data it returns
    - errors: list<error>        # failure modes

Page:
  description: A routable screen containing components
  properties:
    - route: string              # URL path
    - title: string              # display name
    - contains: list<Component>  # what's on the page

Theme:
  description: Design tokens applied to components
  properties:
    - colors: map<name, color>
    - spacing: spacing_token
    - typography: map<name, font>
```

## Edge Types

Edges are relationships between nodes.

```yaml
uses:
  from: [Component, Page]
  to: [Service]
  meaning: "makes calls to"

navigates:
  from: [Component, Page]
  to: [Page]
  condition: event              # when does navigation happen?
  meaning: "redirects user to"

contains:
  from: [Page]
  to: [Component]
  meaning: "renders within"

styled-by:
  from: [Component, Page]
  to: [Theme]
  meaning: "applies design tokens from"
```

## Vocabulary

Constrained terms for consistency.

```yaml
layout_token:
  - centered      # single column, middle of screen
  - stacked       # vertical stack, full width
  - grid          # multi-column grid
  - sidebar       # main + side panel
  - split         # two equal columns

tone_token:
  - minimal       # lots of whitespace, subtle
  - dense         # compact, information-rich
  - playful       # rounded, colorful, casual
  - corporate     # formal, structured, muted

spacing_token:
  - tight         # 4px / 0.25rem
  - normal        # 8px / 0.5rem
  - relaxed       # 16px / 1rem
  - loose         # 24px / 1.5rem

state:
  - idle          # waiting for input
  - loading       # processing
  - error         # something failed
  - success       # completed successfully
  - disabled      # not interactive
```

## Field Definition

How to define inputs/outputs:

```yaml
field:
  name: string
  type: string | number | boolean | date | email | password | list<T>
  required: boolean
  default: any (optional)
  validation: string (optional, human-readable rule)
```

## Event Definition

How to define outputs/triggers:

```yaml
event:
  name: string
  trigger: string           # what causes it
  payload: list<field>      # data it carries (optional)
```

## Example: Login Form Spec

```yaml
LoginForm:
  type: Component

  inputs:
    - name: redirectUrl
      type: string
      required: false
      default: "/dashboard"

  outputs:
    - name: success
      trigger: "valid credentials submitted"
      payload: [{ name: user, type: User }]
    - name: error
      trigger: "invalid credentials"
      payload: [{ name: message, type: string }]

  states: [idle, loading, error]
  layout: centered
  tone: minimal

  edges:
    - uses: AuthService
    - navigates: Dashboard (on: success)
    - styled-by: themes/default
```

## Validation Rules

A valid spec must:

1. Use only defined node types
2. Use only defined edge types with correct from/to
3. Use only vocabulary tokens (no freeform layout/tone/spacing)
4. Define all required properties for each node type
5. Reference only nodes that exist in the spec (or are imported)
