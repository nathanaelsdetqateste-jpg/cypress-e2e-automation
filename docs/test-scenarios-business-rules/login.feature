# Feature: User Login

BR-001 - User cannot log in with unregistered credentials

**Given** Given the user fills in the email and password fields with credentials 
that are not registered in the system
**When** they cluck "submit" button
**Then** the system should display an error message indicating that the credentials are invalid

