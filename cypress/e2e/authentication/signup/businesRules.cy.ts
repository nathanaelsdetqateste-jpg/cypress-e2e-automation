import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Business Rules - Signup", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Positive scenarios", () => {
    const user = validUser();

    it.only("BR-001 - Signup with an existing email", () => {
      const user = validUser();
      fillRegistrationForm(user);
      cy.get('[data-qa="create-account"]').click();
      cy.get("b").should("contain.text", "Account Created!");
      cy.get('[data-qa="continue-button"]').click();

      cy.get('[href="/logout"]').click();
      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();

      cy.get("p").should("contain.text", "Email Address already exist!");
    });
  });
});
