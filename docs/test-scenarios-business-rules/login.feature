# Feature: User Login

## Positive scenarios

### BR-001 - Login with valid data successfully

**Given** the user is on the login page
**When** they fill in the email and password with valid data
**And** click the "Login" button
**Then** the user should be logged in successfully
**And** the message "Logged in as <username>" should be displayed

# ==============================================

BR-002 - User cannot log in with unregistered credentials

**Given** the user is on the login page
**When** Given the user fills in the email and password fields with credentials that are not registered in the system
**And** they click "login" button
**Then** the system should display an error message indicating that the credentials are invalid
