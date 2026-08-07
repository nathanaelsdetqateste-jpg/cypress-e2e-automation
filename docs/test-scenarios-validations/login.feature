# Feature: User Login

## Positive Scenarios

### ST-001 - Login with valid data successfully

**Given** the user is on the login page
**When** they fill in the email and password with valid data
**And** click the "Login" button
**Then** the user should be logged in successfully
**And** the message "Logged in as <username>" should be displayed

# ==============================================

## Negative Scenarios

### ST-002 - Login with invalid email and password 

**Given** the user is on the login page
**When** they enter an invalid email and password combination
**And** click the "Login" button
**Then** the browser should display a message indicating that the credentials are incorrect

### ST-003 - Login with an empty email field

**Given** the user is on the login page
**When** they leave the email field empty
**And** click the "Login" button
**Then** the browser should display a message indicating that the email field is required

### ST-004 - Login with an empty password field

**Given** the user is on the login page
**When** they leave the password field empty
**And** click the "Login" button
**Then** the browser should display a message indicating that the password field is required
