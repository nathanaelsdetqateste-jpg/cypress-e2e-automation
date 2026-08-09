describe("validation", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });
  describe("Negative scenarios", () => {
    it("ST-001 - Checkout with invalid payment details", () => {});

    it("ST-002 - Checkout with missing shipping address", () => {});
  });
});
