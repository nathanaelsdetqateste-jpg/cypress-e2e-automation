import { validUser } from "../../../factories/user/userFactory";
import { fillLoginForm } from "../../../support/helpers/loginHelper";

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

    const requiredFields = [
      {
        name: "email",
        skip: "email",
        selector: '[data-qa="login-email"]',
      },

      {
        name: "password",
        skip: "password",
        selector: '[data-qa="login-password"]',
      },
    ];

    for (const field of requiredFields) {
      it(`ST-003 - Should show validation message when ${field.name} field is empty`, () => {
        const user = validUser();

        fillLoginForm(user, [field.skip]);
        cy.get('[data-qa="login-button"]').click();
        cy.validationMessageError(field.selector);
      });
    }
  });
});
