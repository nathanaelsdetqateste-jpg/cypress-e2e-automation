## Bug 1 — Cadastro permite senha inválida

**Scenario:** ST-003

**Description**:
The application allows registration using a password that does not meet the expected requirements. During the test, the password 123 was used, and the registration was completed successfully.

**Expected behavior**:
The system should prevent the registration and inform the user that the password is invalid.

## ===========================================================

**Scenario:** BR-002

**Description:**
The application allows a user to post a comment on a product even when the user is not authenticated.

**Expected behavior:**
The system should prevent unauthenticated users from posting comments on the product.

## ===========================================================

**Scenario:** BR-003

**Description:**
The application allows a user to post a comment using an email address that is not registered in the system.

**Expected behavior:**
The system should prevent users without a registered account from posting comments.
