# Feature: Shopping Cart

## Positive Scenarios

### ST-001 - Remove a product from the cart

**Given** the user has at least one product in the cart
**When** they remove the product from the cart
**Then** the product should be removed successfully
**And** the cart should display an empty state if no products remain

# ==============================================

## Negative Scenarios

### ST-002 - Add an out-of-stock product to the cart

**Given** the user is on the home page
**When** they try to add a product that is out of stock
**Then** the product should not be added to the cart
**And** the browser should display a message indicating that the product is unavailable