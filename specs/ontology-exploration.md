---
name: ontology-exploration
description: Understanding the full picture before building our meta-spec
status: draft
---

# Web App Ontology: Exploration

## Goal

Define a language for specifying web apps that:
- Is complete enough to generate working code
- Is abstract enough to target any tech stack
- Leverages existing standards where possible
- Doesn't reinvent the wheel

---

## Layers to Account For

### Frontend
- Pages / Views / Screens
- Components (UI elements)
- Layout / Design / Theming
- Client-side state
- Navigation / Routing
- Forms / Validation
- Accessibility

### API Layer
- Endpoints (REST, GraphQL, RPC)
- Request/Response schemas
- Authentication headers
- Rate limiting
- Versioning

**Existing spec**: OpenAPI, GraphQL SDL

### Backend
- Services / Business logic
- Data processing
- Background jobs
- Integrations (external APIs)

### Data Layer
- Entities / Models
- Relationships
- Migrations / Schema evolution
- Validation rules

**Existing specs**: JSON Schema, Prisma schema, SQL DDL

### Middleware
- Auth / Session management
- Logging
- Caching
- Error handling

### Infrastructure (maybe out of scope?)
- Hosting
- Environment config
- CI/CD
- Monitoring

---

## Existing Ontologies / Standards

### schema.org
- Vocabulary for structured data
- Focuses on: things in the real world (Person, Organization, Product, Event)
- Could use for: entity definitions, business domain modeling
- URL: https://schema.org

### OpenAPI (Swagger)
- Spec for REST APIs
- Focuses on: endpoints, request/response, auth
- Could use for: API layer, skip defining our own
- URL: https://swagger.io/specification/

### JSON Schema
- Spec for validating JSON structure
- Focuses on: data shapes, validation rules
- Could use for: input/output definitions
- URL: https://json-schema.org

### GraphQL SDL
- Schema definition language for GraphQL
- Focuses on: types, queries, mutations
- Could use for: if targeting GraphQL

### Prisma Schema
- ORM schema definition
- Focuses on: database models, relationships
- Could use for: data layer

### Microsoft CSDL (Common Schema Definition Language)
- Used in OData
- Enterprise-focused
- URL: https://docs.oasis-open.org/odata/odata-csdl-json/v4.01/odata-csdl-json-v4.01.html

### Web Components / Custom Elements
- Standard for component definition
- Focuses on: reusable UI elements

---

## What We Need to Define vs Reuse

| Layer | Reuse? | What exists | What we define |
|-------|--------|-------------|----------------|
| API | Yes | OpenAPI | Just reference it |
| Data models | Partial | JSON Schema | Add relationships, UI hints |
| Entities | Partial | schema.org | Extend for app-specific |
| Frontend | Define | Nothing standard | Components, pages, layout |
| Design | Define | Design tokens spec | Vocabulary for tone/feel |
| Navigation | Define | Nothing standard | Flow, transitions, conditions |
| Business logic | Define | Nothing standard | Services, rules |

---

## Hierarchy / Node Structure

```
Organization (future scope)
└── App
    ├── Config
    │   ├── Theme
    │   ├── Auth strategy
    │   └── Environment
    ├── Pages
    │   └── Components
    ├── Services
    │   └── Business logic
    ├── API (OpenAPI spec or reference)
    ├── Data
    │   └── Entities (schema.org + extensions)
    └── Flows
        └── User journeys
```

---

## Open Questions

1. **Where to draw the line?**
   - Just frontend + API contract?
   - Include backend services?
   - Include database schema?
   - Include infrastructure?

2. **How much to reuse?**
   - Reference OpenAPI for APIs?
   - Embed JSON Schema for data?
   - Extend schema.org for entities?

3. **What's the smallest useful spec?**
   - Probably: Pages + Components + API contract + Entities
   - Skip: Infrastructure, CI/CD, monitoring

4. **How do specs compose?**
   - App spec references API spec (OpenAPI)?
   - App spec references Entity definitions (schema.org/JSON Schema)?
   - Or everything inline?

5. **What's the "App" node?**
   - Name, description
   - Tech targets (React, Vue, etc.)
   - Entry point (home page)
   - Global config (theme, auth)

6. **How do we handle tech-specific things?**
   - Nuxt file conventions
   - Angular module structure
   - React component patterns
   - These go in templates, not specs?

---

## Proposed Scope (v0.1)

Focus on:
- [ ] App (root node)
- [ ] Pages (routable screens)
- [ ] Components (UI elements)
- [ ] Flows (navigation + conditions)
- [ ] Design vocabulary (layout, tone, spacing)
- [ ] Entities (data shapes, reuse JSON Schema)
- [ ] API contract (reference OpenAPI, don't redefine)

Defer:
- [ ] Backend services (implementation detail)
- [ ] Infrastructure
- [ ] Organization/business modeling

---

## Next Steps

1. Research schema.org more - what's reusable?
2. Research OpenAPI - how to reference not embed?
3. Define App node (root of everything)
4. Define relationship between spec layers
5. Build minimal meta-spec based on this understanding
