# Feature: Checkout

## Positive Scenarios

### ST-001 - Complete checkout with valid cart and payment successfully

**Given** the user has at least one product in the cart
**And** the user is on the checkout page
**When** they fill in valid shipping address and payment details
**And** confirm the order
**Then** the order should be placed successfully
**And** the message "Your order has been placed successfully" should be displayed

# ==============================================

## Negative Scenarios

### ST-002 - Checkout with empty cart

**Given** the user has no products in the cart
**When** they try to proceed to checkout
**Then** the checkout should be blocked
**And** the message "Your cart is empty" should be displayed

### ST-003 - Checkout with invalid payment details

**Given** the user has at least one product in the cart
**And** the user is on the checkout page
**When** they enter invalid payment details
**And** confirm the order
**Then** the browser should display a payment validation error

### ST-004 - Checkout with missing shipping address

**Given** the user has at least one product in the cart
**And** the user is on the checkout page
**When** they leave the shipping address fields empty
**And** confirm the order
**Then** the browser should display a message indicating that the shipping address is required
