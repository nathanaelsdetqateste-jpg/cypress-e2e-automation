# Feature: Product comments

## Positive Scenarios

### ST-001 - Add a valid comment to a product successfully

**Given** the user is on the product page
**When** they enter a valid name, email, and comment
**And** click the "Submit" button
**Then** the comment should be submitted successfully
**And** the message "Thank you for your review." should be displayed

# ==============================================

## Negative Scenarios

### ST-002 - Add a comment with an empty name field

**Given** the user is on the product page
**When** they leave the name field empty
**And** click the "Submit" button
**Then** the browser should display a message indicating that the name field is required

### ST-003 - Add a comment with an empty email field

**Given** the user is on the product page
**When** they leave the email field empty
**And** click the "Submit" button
**Then** the browser should display a message indicating that the email field is required


### ST-004 - Add a comment with an empty comment field

**Given** the user is on the product page
**When** they leave the comment field empty
**And** click the "Submit" button
**Then** the browser should display a message indicating that the comment field is required

### ST-005 - Add a comment with an invalid name format

**Given** the user is on the product page
**When** they enter an invalid name format
**And** click the "Submit" button
**Then** the browser should display a validation message indicating that the name format is invalid

### ST-006 - Add a comment with an invalid email format

**Given** the user is on the product page
**When** they enter an invalid email format
**And** click the "Submit" button
**Then** the browser should display a validation message indicating that the email format is invalid