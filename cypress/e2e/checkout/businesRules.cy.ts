describe("Business Rules", () => {
  describe("Positive scenarios", () => {
    it("BR-002 - Prevent unauthenticated users from completing checkout", () => {
      const message = {
        h4: "Checkout",
        p: "Register / Login account to proceed on checkout.",
      };

      cy.visit("/");
      cy.AddToCart();
      cy.get(".btn.btn-default.check_out").should("be.visible").click();
      for (const [key, value] of Object.entries(message)) {
        cy.get(".modal-content").find(key).should("contain.text", value);
      }
    });

    it("BR-003 - Checkout with empty cart", () => {
      cy.visit("/view_cart");

      cy.get(".btn.btn-default.check_out").should("not.exist");
    });
  });
});
