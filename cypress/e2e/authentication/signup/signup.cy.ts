import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Signup", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Positive scenarios", () => {
    it("ST-001 - Should register a new user successfully", () => {
      const user = validUser();
      fillRegistrationForm(user);
      cy.get('[data-qa="create-account"]').click();
      cy.get("b").should("contain.text", "Account Created!");
      cy.get("p").should(
        "contain.text",
        "Congratulations! Your new account has been successfully created!",
      );
      cy.get("p").should(
        "contain.text",
        "You can now take advantage of member privileges to enhance your online shopping experience with us.",
      );
    });
  });
});
