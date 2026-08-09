describe("Business Rules", () => {
  beforeEach(() => {
    cy.clearCookies();
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

  describe("Positive scenarios", () => {
    it("BR-002 - should increase the quantity of a product in the cart", () => {
      cy.AddToCart();
      cy.visit("/");
      cy.AddToCart();
      cy.visit("/");

      cy.get("a[href='/view_cart']").find(".fa.fa-shopping-cart").click();

      for (let header of headersList) {
        cy.get("#cart_info").find(".cart_menu").should("contain.text", header);
        break;
      }

      cy.get(".disabled")
        .invoke("text")
        .then((quantity) => {
          const result = Number(quantity);
          expect(result).to.equal(2);
        });
    });

    it("BR-003 - The system should remove a product from the cart successfully", () => {
      cy.AddToCart();

      for (let header of headersList) {
        cy.get("#cart_info").find(".cart_menu").should("contain.text", header);
        break;
      }

      cy.get(".cart_quantity_delete").should("be.visible").click();
      cy.contains(/empty|carrinho vazio|cannot checkout/i).should("be.visible");
    });
  });

  describe("Negative scenarios", () => {
    it("BR-004 - Should not add an out-of-stock product to the cart", () => {
      cy.visit("product_details/999");

      cy.get(".btn.btn-default.cart")
        .should("contain.text", "Add to cart")
        .and("be.visible")
        .click();
      cy.contains("Added!").should("not.be.visible");
    });

    it("BR-005 - should prevent checkout when user is not authenticated (redirect to login)", () => {
      cy.AddToCart();

      cy.get(".btn.btn-default.check_out").should("be.visible").click();
      cy.contains("Register / Login account to proceed on checkout.").should(
        "be.visible",
      );
    });
  });
});
