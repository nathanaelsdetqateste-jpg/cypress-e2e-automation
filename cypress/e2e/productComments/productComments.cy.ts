describe("Product comments", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/product_details/1");
  });

  describe("Positive scenarios", () => {
    it("ST-027 - Add a valid comment to a product successfully", () => {
      cy.fixture("loginUser").then((user) => {
        cy.get('input[id="name"]').type(user.name);
        cy.get('input[id="email"]').type(user.email);
      });

      cy.get('textarea[id="review"]').type("This is a test comment.");
      cy.get('button[id="button-review"]')
        .should("contain.text", "Submit")
        .click();
      cy.contains("Thank you for your review.").should("be.visible");
    });
  });
});
