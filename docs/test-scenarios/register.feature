# Feature: User Registration

## Positive Scenarios

### ST-001 - Register a new user with valid data successfully

**Given** the user is on the home page
**When** they fill in all required fields with valid data
**And** click the "Sign Up" button
**Then** the account should be created successfully
**And** the message "Congratulations! Your new account has been successfully created!" should be displayed

# ==============================================

## Negative Scenarios

### ST-002 - Register a user with an invalid email address

**Given** the user is on the home page
**When** they enter an invalid email address (for example "invalid-email")
**And** click the "Sign Up" button
**Then** the browser should display a validation message indicating that the email address is invalid

### ST-003 - Register a user with an invalid password

**Given** the user is on the home page
**When** they fill in all required fields with valid data except the password (use a too-short or weak password)
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the password does not meet the requirements

### ST-004 - Register a user with an empty email field

**Given** the user is on the home page
**When** they leave the email field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the email field is required

### ST-005 - Register a user with an empty name field

**Given** the user is on the home page
**When** they leave the name field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the name field is required

### ST-006 - Register a user with an empty password field

**Given** the user is on the home page
**When** they fill the name and email fields but leave the password field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the password field is required

### ST-007 - Register a user with an empty first name field

**Given** the user is on the home page
**When** they fill the signup form but leave the first name field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the first name field is required

### ST-008 - Register a user with an empty last name field

**Given** the user is on the home page
**When** they fill the signup form but leave the last name field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the last name field is required

### ST-009 - Register a user with an empty address field

**Given** the user is on the home page
**When** they fill the signup form but leave the address field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the address field is required

### ST-010 - Register a user with an empty state field

**Given** the user is on the home page
**When** they fill the signup form but leave the state field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the state field is required

### ST-011 - Register a user with an empty city field

**Given** the user is on the home page
**When** they fill the signup form but leave the city field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the city field is required

### ST-012 - Register a user with an empty zipcode field

**Given** the user is on the home page
**When** they fill the signup form but leave the zipcode/postal code field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the zipcode field is required

### ST-013 - Register a user with an empty mobile number field

**Given** the user is on the home page
**When** they fill the signup form but leave the mobile number field empty
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the mobile number field is required