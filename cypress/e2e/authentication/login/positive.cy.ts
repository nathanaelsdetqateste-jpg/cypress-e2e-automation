import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Positive scenarios", () => {
    it("ST-001 - Should login successfully with valid credentials.", () => {
      const user = validUser();

      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();

      fillRegistrationForm(user);
      cy.get('[data-qa="create-account"]').click();
      cy.get("b").should("contain.text", "Account Created!");

      cy.visit("/login");
      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.contains("Logged in as").should("contain.text", user.name);
    });
  });
});
