# Feature: Checkout

## Negative Scenarios

### ST-001 - Checkout with invalid payment details

**Given** the user has at least one product in the cart
**And** the user is on the checkout page
**When** they enter invalid payment details
**And** confirm the order
**Then** the browser should display a payment validation error

### ST-002 - Checkout with missing shipping address

**Given** the user has at least one product in the cart
**And** the user is on the checkout page
**When** they leave the shipping address fields empty
**And** confirm the order
**Then** the browser should display a message indicating that the shipping address is required
