# Feature: Shopping Cart

## Business Rules

BR-003 - The system should not allow checkout with an empty cart
 
**Given** the user has no products in the shopping cart
**When** the user tries to proceed to checkout
**Then** the system should prevent checkout and show an error message indicating that the cart is empty

BR-004 - The system should remove a product from the cart correctly

**Given** the user has one or more products in the shopping cart
**When** the user removes a product from the cart
**Then** the product should be removed from the cart and the cart total should be updated

BR-005 - The system should not allow checkout when the user is not logged in

**Given** the user has products in the shopping cart and is not authenticated
**When** the user tries to proceed to checkout
**Then** the system should redirect the user to login and prevent checkout until authentication is completed

