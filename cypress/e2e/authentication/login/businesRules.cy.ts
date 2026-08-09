describe("Business Rules", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Negative scenarios", () => {
    it("BR-002 - User cannot log in with unregistered credentials", () => {
      cy.get('[data-qa="login-email"]').type("invalid@example.com");
      cy.get('[data-qa="login-password"]').type("wrongpassword");
      cy.get('[data-qa="login-button"]').click();

      cy.contains("Your email or password is incorrect!").should("be.visible");
    });
  });
});
