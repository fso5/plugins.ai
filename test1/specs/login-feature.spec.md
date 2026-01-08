---
name: login-feature
type: Feature
version: 0.1.0
---

# Login Feature

## Why
- **Purpose**: Allow returning users to authenticate
- **User goal**: Access their account
- **Business goal**: Identify users, personalize experience

## Who
- Returning users (have an account)
- Unauthenticated state

## Where
- Route: `/login`
- Layout: Auth layout (centered, minimal)
- Accessible from: header, protected route redirects

## When
- Shown: User is not authenticated
- Hidden: User is authenticated
- Triggered by:
  - Direct navigation
  - Session expired
  - Protected route access

---

## Frontend

### Page
- Route: `/login`
- Title: "Log In"
- Layout: centered, single column
- Contains: Login Form

### Login Form

**Design:**
- Layout: stacked (vertical)
- Tone: minimal
- Width: narrow (max 400px)
- Centered on page

**Elements:**
- Heading: "Welcome back"
- Username input
  - type: email
  - label: "Email"
  - required: true
  - autocomplete: email
- Password input
  - type: password
  - label: "Password"
  - required: true
  - autocomplete: current-password
- Submit button
  - label: "Log In"
  - variant: primary
  - full-width: true
- Forgot password link
  - label: "Forgot password?"
  - navigates: /forgot-password
- Register link
  - label: "Don't have an account? Sign up"
  - navigates: /register

**States:**
- idle: form ready for input
- loading: submit in progress, button disabled
- error: show error message above form

**Behavior:**
- On submit: validate → call API → handle response
- Validation:
  - Email format check
  - Password required
- Show inline errors on blur

---

## API

### POST /auth/login

**Request:**
```json
{
  "email": "string (required, email format)",
  "password": "string (required)"
}
```

**Response (success):**
```json
{
  "token": "string (JWT)",
  "user": {
    "id": "string",
    "email": "string",
    "name": "string"
  }
}
```

**Response (error):**
```json
{
  "error": "invalid_credentials",
  "message": "Email or password is incorrect"
}
```

**Status codes:**
- 200: Success
- 401: Invalid credentials
- 422: Validation error
- 429: Rate limited

---

## Data

### User Entity (referenced)
- id: string (uuid)
- email: string (unique)
- password: string (hashed, never returned)
- name: string
- created_at: datetime
- updated_at: datetime

### Session/Token
- JWT stored in httpOnly cookie or localStorage
- Contains: user id, expiry
- Refresh strategy: (define separately)

---

## Flows

### Success Flow
1. User submits valid credentials
2. API returns token + user
3. Store token
4. Redirect to `/dashboard` (or original destination)

### Error Flow
1. User submits invalid credentials
2. API returns error
3. Show error message in form
4. Clear password field
5. Stay on page

### Validation Flow
1. User blurs field
2. Validate format
3. Show inline error if invalid

---

## References

**Primitives (from ontology):**
- Input (email, password types)
- Button (primary variant)
- Link (navigation)
- Alert (error display)

**External specs:**
- User entity: (could reference JSON Schema)
- API: (could reference OpenAPI)

---

## Complete When

- [ ] Form renders with all elements (email, password, button, links)
- [ ] Validation shows inline errors on blur
- [ ] Submit button shows loading state during API call
- [ ] Error message displays on failed login
- [ ] Password field clears on error
- [ ] Success redirects to /dashboard
- [ ] Form is centered, max-width 400px, minimal styling

---

## Open Questions

- Forgot password flow - separate feature spec?
- Registration flow - separate feature spec?
- Remember me checkbox - include?
- Social login (OAuth) - include or separate?
