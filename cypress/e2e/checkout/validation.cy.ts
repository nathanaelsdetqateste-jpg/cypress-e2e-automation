describe("validation", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });
  describe("Negative scenarios", () => {
    it("ST-002 - Checkout with empty cart", () => {});

    it("ST-003 - Checkout with invalid payment details", () => {});

    it("ST-004 - Checkout with missing shipping address", () => {});
  });
});
