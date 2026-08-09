# Feature: Checkout

## Positive Scenarios

### BR-001 - Complete checkout with valid cart and payment successfully

**Given** the user is logged in
**And** they has at least one product in the cart
**And** they is on the checkout page
**When** they fill in valid shipping address and payment details
**And** confirm the order
**Then** the order should be placed successfully
**And** the message "Your order has been placed successfully" should be displayed

# ==============================================

## Negative Scenarios

### BR-002 - Prevent unauthenticated users from completing checkout

**Given** the user is not logged in
**And** the user has products in the cart
**When** they try to proceed with the checkout
**Then** the checkout should not be completed
**And** the user should be redirected to the login page


### BR-003 - Checkout with empty cart

**Given** the user has no products in the cart
**When** they try to proceed to checkout
**Then** the checkout should be blocked
**And** the message "Your cart is empty" should be displayed