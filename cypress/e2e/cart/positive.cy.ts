describe("Cart", () => {
  beforeEach(() => {
    cy.clearCookies();
    cy.login("loginUser");
    cy.visit("/");
  });

  let headersList = [
    "Item",
    "Description",
    "Price",
    "Quantity",
    "Total",
    "Action",
  ];

  it("BR-001 - Add a product to the cart successfully", () => {
    cy.AddToCart();

    cy.url().should("include", "/view_cart");
    cy.get(".active").should("contain.text", "Shopping Cart").and("be.visible");

    for (const header of headersList) {
      cy.get("#cart_info").find(".cart_menu").should("contain.text", header);
      break;
    }
  });
});
