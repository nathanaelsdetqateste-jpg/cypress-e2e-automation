# Feature: User Registration

### BR-001 - Signup with an existing email

**Given** The user has already registered an account.
**When** they fill in the email and password fields with the same registered email and password
**And** click "signup" button
**Then** should show a message error "Email Address already exist!"
