# Feature: Shopping Cart

## Positive Scenarios

### ST-022 - Add a product to the cart successfully

**Given** the user is on the home page
**When** they select a product and click the "Add to Cart" button
**And** the product is available
**Then** the product should be added to the cart successfully
**And** the message "Product added to cart" should be displayed

### ST-023 - Increase the quantity of a product in the cart

**Given** the user has a product already added to the cart
**When** they increase the quantity of that product
**Then** the cart should update the total quantity
**And** the cart total should reflect the new quantity

### ST-024 - Remove a product from the cart

**Given** the user has at least one product in the cart
**When** they remove the product from the cart
**Then** the product should be removed successfully
**And** the cart should display an empty state if no products remain

# ==============================================

## Negative Scenarios

### ST-025 - Add an out-of-stock product to the cart

**Given** the user is on the home page
**When** they try to add a product that is out of stock
**Then** the product should not be added to the cart
**And** the browser should display a message indicating that the product is unavailable