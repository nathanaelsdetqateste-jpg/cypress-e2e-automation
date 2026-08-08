# Feature: Product comments

## Business Rules

## Positive Scenarios

### BR-001 - Submit a valid comment successfully

**Given** the user is logged in and is on a product details page
**When** they fill in a valid name, a valid email, and a review message
**And** they submit the comment
**Then** the system should display a success message indicating that the review was submitted successfully

## Negative Scenarios

### BR-002 - Prevent unauthenticated users from commenting

**Given** the user is not logged in
**When** they try to submit a comment
**Then** the comment should not be submitted
**And** the user should be prompted to log in


### BR-003 - Prevent comments with unregistered user data

**Given** the user is not registered in the system
**When** they try to submit a comment using an unregistered name and email
**Then** the comment should not be submitted
**And** an error message should be displayed
