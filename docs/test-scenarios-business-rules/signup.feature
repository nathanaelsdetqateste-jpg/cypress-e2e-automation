# Feature: User Registration

## Positive Scenarios

### BR-001 - Register a new user with valid data successfully

**Given** the user is on the home page
**When** they fill in all required fields with valid data
**And** click the "Sign Up" button
**Then** the account should be created successfully
**And** the message "Congratulations! Your new account has been successfully created!" should be displayed


# ==============================================

## Negative Scenarios

### BR-002 - Signup with an existing email

**Given** The user has already registered an account.
**When** they fill in the email and password fields with the same registered email and password
**And** click "signup" button
**Then** should show a message error "Email Address already exist!"
