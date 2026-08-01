describe("Cart", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });

  describe("Positive scenarios", () => {
    it("ST-022 - Add a product to the cart successfully", () => {
      cy.AddToCart();

      cy.url().should("include", "/view_cart");
      cy.get(".active")
        .should("contain.text", "Shopping Cart")
        .and("be.visible");
      let headersList = [
        "Item",
        "Description",
        "Price",
        "Quantity",
        "Total",
        "Action",
      ];

      for (const header of headersList) {
        cy.get("#cart_info").find(".cart_menu").should("contain.text", header);
        break;
      }
    });

    it("ST-023 - Increase the quantity of a product in the cart", () => {
      cy.AddToCart();

      cy.get(".cart_quantity")
        .find(".disabled")
        .invoke("text")
        .then((valueQuantity) => {
          expect(Number(valueQuantity)).to.greaterThan(1);
        });
    });

    it("ST-024 - Remove a product from the cart", () => {
      cy.AddToCart();

      cy.get(".cart_quantity_delete").click();
      cy.contains("Cart is empty").should("be.visible");
    });
  });

  describe("Negative scenarios", () => {
    it.only("ST-025 - Add an out-of-stock product to the cart", () => {
      cy.visit("/product_details/999");

      cy.get(".btn.btn-default.cart").should("be.visible").click();
      cy.get('a[href="/view_cart"]')
        .should("be.visible")
        .find(".fa.fa-shopping-cart")
        .click();
      cy.contains("Cart is empty").should("be.visible");
    });
  });
});
