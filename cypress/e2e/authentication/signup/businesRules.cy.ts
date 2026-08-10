import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Business Rules - Signup", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Positive scenarios", () => {
    it("BR-002 - Signup with an existing email", () => {
      cy.fixture("LoginUser").then((user) => {
        cy.get('[data-qa="signup-name"]').type(user.name);
        cy.get('[data-qa="signup-email"]').type(user.email);
        cy.get('[data-qa="signup-button"]').click();
      });

      cy.get("p").should("contain.text", "Email Address already exist!");
    });
  });
});
