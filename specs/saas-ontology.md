---
name: saas-ontology
description: Comprehensive list of concepts in a SaaS web app
status: draft
---

# SaaS Web App Ontology

Everything that might need to be spec'd when building a SaaS web app.

---

## Frontend

### Pages & Navigation
- Landing page
- Home / Dashboard
- Auth pages (login, register, forgot password, reset password)
- Settings pages (profile, account, billing, team)
- Feature pages (app-specific)
- Admin pages
- Error pages (404, 500, 403)
- Onboarding flow

### Layouts
- Public layout (marketing)
- Auth layout (login/register)
- App layout (logged in)
- Admin layout
- Empty/focused layout (onboarding, checkout)

### Components
- Navigation (header, sidebar, breadcrumbs, tabs)
- Forms (inputs, selects, checkboxes, radios, toggles)
- Buttons (primary, secondary, destructive, loading)
- Data display (tables, lists, cards, grids)
- Feedback (alerts, toasts, notifications, progress)
- Overlays (modals, dialogs, drawers, popovers, tooltips)
- Media (images, avatars, icons, file upload)
- Typography (headings, paragraphs, labels, links)

### State
- Local state (component)
- Global state (app-wide)
- Server state (cached API data)
- URL state (query params, route params)
- Form state (values, errors, touched)

### Theming
- Colors (primary, secondary, accent, semantic)
- Typography (fonts, sizes, weights)
- Spacing (scale)
- Borders, Shadows
- Dark mode
- Responsive breakpoints

---

## Backend

### Services
- Auth service
- User service
- Team/Org service
- Billing service
- Email service
- File service
- Search service
- Notification service
- Analytics service
- Feature-specific services

### Jobs / Background Tasks
- Email sending
- Report generation
- Data sync
- Cleanup tasks
- Scheduled tasks (cron)
- Webhooks processing

### Caching
- Query caching
- Session caching
- Rate limit counters
- Feature flags

### File Handling
- Upload
- Storage (local, S3, etc.)
- Processing (resize, convert)
- Delivery (CDN)

---

## API

### Endpoints
- RESTful resources (CRUD)
- Custom actions
- Bulk operations
- Search/filter
- Export/import

### Authentication
- Login / Logout
- Token refresh
- API keys
- OAuth flows

### Authorization
- Role-based (admin, member, viewer)
- Permission-based (can:read, can:write, can:delete)
- Resource-based (own resources only)
- Team/Org scoping

### API Features
- Pagination
- Sorting
- Filtering
- Field selection
- Rate limiting
- Versioning
- Error format

### Real-time
- WebSockets
- Server-sent events
- Polling

### Webhooks
- Outgoing (notify external systems)
- Incoming (receive from external)

---

## Data

### Core Entities
- User
- Session
- Team / Organization / Workspace
- Membership (user <-> team)
- Invite
- Role / Permission

### SaaS Entities
- Plan / Tier
- Subscription
- Invoice
- Payment method
- Usage record
- Feature flag

### Content Entities
- Notification
- Activity / Audit log
- File / Attachment
- Comment
- Tag / Label

### App-specific Entities
- (Whatever the app does)

### Relationships
- One-to-one
- One-to-many
- Many-to-many
- Polymorphic
- Self-referential (tree, graph)

### Data Features
- Soft deletes
- Timestamps (created, updated)
- Versioning / History
- Full-text search
- Unique constraints
- Indexes

---

## Auth & Identity

### Authentication Methods
- Email + Password
- Magic link (passwordless)
- OAuth (Google, GitHub, etc.)
- SSO / SAML
- Two-factor (2FA/MFA)
- API keys

### Auth Flows
- Register
- Login
- Logout
- Forgot password
- Reset password
- Email verification
- Invite acceptance
- OAuth callback

### Session Management
- Token storage
- Refresh tokens
- Session expiry
- Device tracking
- Revocation

---

## Multi-tenancy (SaaS-specific)

### Models
- Single tenant
- Multi-tenant (shared DB)
- Multi-tenant (separate DBs)

### Concepts
- Organization / Workspace / Team
- Membership
- Roles within org
- Switching between orgs
- Org-level settings
- Data isolation

---

## Billing & Monetization

### Models
- Free
- Freemium
- Subscription (monthly/yearly)
- Usage-based
- Per-seat
- One-time purchase
- Hybrid

### Concepts
- Plans / Tiers
- Features per plan
- Limits / Quotas
- Trials
- Upgrades / Downgrades
- Cancellation
- Invoices
- Payment methods
- Tax handling

### Integrations
- Stripe
- Paddle
- LemonSqueezy
- etc.

---

## Communication

### Email
- Transactional (welcome, reset password, invoice)
- Notification (activity, alerts)
- Marketing (newsletters, announcements)
- Templates
- Delivery tracking

### In-App Notifications
- Toast messages
- Notification center
- Badge counts
- Read/unread state

### Real-time Updates
- Live data refresh
- Presence (who's online)
- Collaborative features

---

## Admin & Operations

### Admin Features
- User management
- Team management
- Impersonation
- Feature flags
- System settings
- Audit logs

### Monitoring
- Error tracking
- Performance monitoring
- Uptime monitoring
- Log aggregation

### Analytics
- User analytics
- Feature usage
- Business metrics
- Funnel tracking

---

## Infrastructure

### Hosting
- Server / Serverless
- Database hosting
- File storage
- CDN

### DevOps
- CI/CD
- Environments (dev, staging, prod)
- Secrets management
- Backups

### Domain & SSL
- Custom domains
- SSL certificates
- DNS

---

## Legal & Compliance

### Pages
- Terms of Service
- Privacy Policy
- Cookie Policy
- Acceptable Use Policy

### Features
- Cookie consent
- Data export (GDPR)
- Account deletion
- Consent tracking

### Compliance
- GDPR
- CCPA
- SOC 2
- HIPAA (if applicable)

---

## Content / Marketing

### Pages
- Landing page
- Pricing page
- Features page
- About page
- Contact page
- Blog
- Documentation / Help
- Changelog

### Components
- Hero sections
- Feature showcases
- Testimonials
- CTAs
- Pricing tables
- FAQ

---

## Onboarding

### Flows
- Welcome screen
- Profile setup
- Team creation
- Invite teammates
- First task / Quick start
- Feature tour

### Concepts
- Progress tracking
- Skippable steps
- Checklists
- Empty states
- Tooltips / Hints

---

## Primitives (Atomic Elements)

These are the building blocks - reference, don't redefine.

### Inputs
- Text (single line)
- Textarea (multi-line)
- Number
- Email
- Password
- Phone
- URL
- Date / Time / DateTime
- Color
- File upload
- Hidden

### Selection
- Select / Dropdown
- Multi-select
- Combobox (searchable select)
- Checkbox
- Radio
- Toggle / Switch
- Slider / Range
- Rating

### Buttons
- Primary
- Secondary
- Tertiary / Ghost
- Destructive
- Icon button
- Loading state
- Disabled state

### Links
- Inline link
- Navigation link
- External link
- Button-styled link

### Typography
- Heading (h1-h6)
- Paragraph
- Label
- Helper text
- Error text
- Caption
- Code / Monospace

### Data Display
- Badge / Tag
- Chip
- Avatar
- Icon
- Image
- Video
- Stat / Metric
- Progress bar
- Skeleton loader

### Containers
- Card
- Panel
- Section
- Divider
- Spacer

### Interactive
- Accordion
- Tabs
- Carousel
- Pagination
- Stepper / Wizard steps

### Feedback
- Alert / Banner
- Toast / Snackbar
- Tooltip
- Popover
- Loading spinner

### Overlays
- Modal / Dialog
- Drawer / Slide-over
- Dropdown menu
- Context menu
- Command palette

### Navigation
- Header / Navbar
- Sidebar
- Breadcrumbs
- Tabs
- Footer
- Menu item

### Forms (composite)
- Form field (label + input + error)
- Form group
- Form section
- Form actions (submit, cancel)

### Outputs
- Success message
- Error message
- Empty state
- Loading state
- Data table row
- List item
- Card content

---

## Common Patterns

### CRUD
- Create
- Read (single)
- List (multiple, paginated)
- Update
- Delete

### List Views
- Table
- Cards
- Grid
- Kanban
- Calendar

### Forms
- Single-step
- Multi-step / Wizard
- Inline edit
- Autosave

### Actions
- Single item actions
- Bulk actions
- Confirm dialogs
- Undo

### Search & Filter
- Global search
- Scoped search
- Filters
- Saved filters
- Sort

---

## Checklist Usage

When speccing a feature, check against this list:
- What entities are involved?
- What API endpoints needed?
- What pages/components needed?
- What auth/permissions apply?
- What notifications triggered?
- What admin features needed?
- What analytics to track?
