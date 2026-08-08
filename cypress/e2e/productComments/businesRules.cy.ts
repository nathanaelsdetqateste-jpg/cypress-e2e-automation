describe("Business Rules - Product Comments", () => {
  describe("Positive scenarios", () => {
    it("BR-001 - Submit a valid comment successfully", () => {
      cy.login("loginUser");
      cy.visit("/product_details/1");

      cy.fixture("loginUser").then((user) => {
        cy.get('input[id="name"]').type(user.name);
        cy.get('input[id="email"]').type(user.email);
      });

      cy.get('textarea[id="review"]').type(
        "This is a valid business rule comment.",
      );
      cy.get('button[id="button-review"]').click();

      cy.contains("Thank you for your review.").should("be.visible");
    });
  });

  describe("Negative scenarios", () => {
    it("BR-002 - Prevent unauthenticated users from commenting", () => {
      cy.visit("/product_details/1");

      cy.get('input[id="name"]').type("Guest User");
      cy.get('input[id="email"]').type("guest@example.com");
      cy.get('textarea[id="review"]').type("Guest comment");
      cy.get('button[id="button-review"]').click();
      cy.get(".alert-success").should("not.exist");
    });

    it.only("BR-003 - Prevent comments with unregistered user data", () => {
      cy.visit("/product_details/1");

      cy.get('input[id="name"]').type("Unregistered User");
      cy.get('input[id="email"]').type("unregistered@example.com");
      cy.get('textarea[id="review"]').type(
        "Comment using unregistered user data.",
      );
      cy.get('button[id="button-review"]').click();

      cy.get(".alert-success").should("not.exist");
    });
  });
});
