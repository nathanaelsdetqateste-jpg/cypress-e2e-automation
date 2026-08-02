# Feature: User Registration

## Positive Scenarios

### BR-001 - Valid signup of a new user

**Given** the user is on the signup page
**When** they fill in name, a unique email and a password with at least 8 characters
**And** confirm the password and click "Signup"
**Then** the message "Account created successfully" is displayed
**And** the user is redirected to the login page

# ==============================================

## Negative Scenarios

### BR-002 - Signup with an existing email

**Given** there is an existing user registered with email "teste@dominio.com"
**And** the user is on the signup page
**When** they fill the form using the same email
**And** click "Signup"
**Then** the message "Email already exists" is displayed
**And** the signup is not completed

### BR-003 - Signup with invalid password

**Given** the user is on the signup page
**When** they enter a password with fewer than 8 characters
**And** click "Signup"
**Then** the message "Password must be at least 8 characters" is displayed
**And** the signup is not completed

### BR-004 - Signup with invalid email format

**Given** the user is on the signup page
**When** they enter an invalid email (for example: "usuario@@dominio")
**And** click "Signup"
**Then** the message "Enter a valid email address" is displayed
**And** the signup is not completed