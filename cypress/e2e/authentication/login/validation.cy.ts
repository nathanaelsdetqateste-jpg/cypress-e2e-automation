import { validUser } from "../../../factories/user/userFactory";

describe("Login validation", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Negative scenarios", () => {
    it("ST-015 - Should show an error when email and password are invalid", () => {
      const user = validUser();

      cy.get('[data-qa="login-email"]').clear().type(user.email);
      cy.get('[data-qa="login-password"]').clear().type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains("Your email or password is incorrect!").should("be.visible");
    });

    it("ST-016 - Should show validation message when email is empty", () => {
      cy.get('[data-qa="login-password"]').clear().type(validUser().password);
      cy.get('[data-qa="login-button"]').click();
      cy.validationMessageError('[data-qa="login-email"]');
    });

    it("ST-017 - Should show validation message when password is empty", () => {
      cy.get('[data-qa="login-email"]').clear().type(validUser().email);
      cy.get('[data-qa="login-button"]').click();
      cy.validationMessageError('[data-qa="login-password"]');
    });
  });
});
