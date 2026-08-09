import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Positive scenarios", () => {
    it("BR-001 - Should login successfully with valid credentials.", () => {
      cy.login("LoginUser");
      cy.visit("/");
    });
  });
});
