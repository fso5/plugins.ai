---
name: validate
description: Verify implementation matches spec. Use after building a feature.
---

# Validate Skill

Universal procedure for verifying implementation matches spec. Tech-specific test setup comes from templates.

## Procedure

### 1. Read Completion Criteria

From the spec's "Complete When" section:
- Extract each criterion
- These become test cases

Example:
```
## Complete When
- [ ] Form renders with all elements
- [ ] Validation shows errors on blur
- [ ] Submit shows loading state
```

### 2. Determine Validation Type

For each criterion, decide:
- **Visual**: needs manual check or screenshot
- **Behavioral**: needs interaction test
- **Unit**: needs isolated function test
- **Integration**: needs full flow test

### 3. Bootstrap Test Environment

Using the bootstrap skill:
- Ensure project runs
- Set up test framework (from template)
- Configure test utilities

### 4. Create Tests

For each criterion:
1. Write test in plain language first
2. Translate to actual test code (using template patterns)
3. Make it pass/fail clearly

Example:
```javascript
// Criterion: "Form renders with all elements"
test('renders email input', () => {
  render(<LoginForm />)
  expect(screen.getByLabelText('Email')).toBeInTheDocument()
})
```

### 5. Run Tests

Execute all tests:
- Note which pass
- Note which fail
- For failures, identify the gap

### 6. Manual Verification (if needed)

Some things need human eyes:
- Layout looks correct
- Styling matches intent
- Interactions feel right

Create a checklist for manual checks.

### 7. Report Results

Output:
- [ ] Criterion 1: PASS / FAIL
- [ ] Criterion 2: PASS / FAIL
- ...

If all pass: implementation complete
If any fail: identify what needs fixing

## Validation Levels

**Quick**: Run dev server, eyeball it
**Standard**: Automated tests for each criterion
**Thorough**: Automated + manual + edge cases

Choose level based on feature importance.

## Output

- Test files created
- All tests passing
- Completion criteria verified
- Implementation confirmed done

## References

Tech-specific test setup from templates:
- templates/vitest.md
- templates/jest.md
- templates/pytest.md
- etc.
