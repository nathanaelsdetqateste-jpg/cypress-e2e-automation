import { validUser } from "../../../factories/user/userFactory";

describe("Validation", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Negative scenarios", () => {
    it("ST-002 - Should show an error when email and password are invalid", () => {
      const user = validUser();

      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains("Your email or password is incorrect!").should("be.visible");
    });

    it("ST-003 - Should show validation message when email is empty", () => {
      cy.get('[data-qa="login-password"]').type(validUser().password);
      cy.get('[data-qa="login-button"]').click();
      cy.validationMessageError('[data-qa="login-email"]');
    });

    it("ST-004 - Should show validation message when password is empty", () => {
      cy.get('[data-qa="login-email"]').type(validUser().email);
      cy.get('[data-qa="login-button"]').click();
      cy.validationMessageError('[data-qa="login-password"]');
    });
  });
});
