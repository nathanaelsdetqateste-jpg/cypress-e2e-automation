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
**When** they enter an invalid email address
**And** click the "Sign Up" button
**Then** the browser should display a message indicating that the email address is invalid

### ST-003 - Register a user with an invalid password

**Given** the user is on the home page
**When** they fill all required fields witch valid data of page home
**And** click the "SignUp" button
**And** fill password field witc invalid data
**then** the browser should display a message indicating that the password address is inavlid

### ST-004 - Register a user with an empty email field

**Given** the user is on the home page
**When** they leave the email field empty
**And** click the "SignUp" button
**then** **Then** the browser should display a message indicating that the email address is empty

### ST-005 - Register a user with an empty name field

**Given** the user is on the home page
**When** they leave the name field empty
**And** click the "SignUp" button
**then** the browser should display a message indicating that the name address is empty

### ST-006 - Register a user with an empty password field

**Given** the user is on the home page
**When** they fill the fields name and email
**And** click "SignUp" button
**And** they leave the password field empty
**And** click "create Account" button
**then** the browser should display a message indicating that the password address is empty

### ST-007 - Register a user with an empty first name field

**Given** the user is on the home page
**When** they fill the fields name and email
**And** click "SignUp" button
**And** they leave the password field empty
**And** click "create Account" button
**then** the browser should display a message indicating that the password address is empty

### ST-008 - Register a user with an empty last name field

**Given** 
**When** 
**And** 
**And** 
**And** 
**then**

### ST-009 - Register a user with an empty address field

**Given** 
**When** 
**And** 
**And** 
**And** 
**then**

### ST-010 - Register a user with an empty state field

**Given** 
**When** 
**And** 
**And** 
**And** 
**then**

### ST-011 - Register a user with an empty city field

**Given** 
**When** 
**And** 
**And** 
**And** 
**then**

### ST-012 - Register a user with an empty zipcode field

**Given** 
**When** 
**And** 
**And** 
**And** 
**then**

### ST-013 - Register a user with an empty mobile number field

**Given** 
**When** 
**And** 
**And** 
**And** 
**then**