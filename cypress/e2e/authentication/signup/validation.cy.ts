import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Validation", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Negative scenarios", () => {
    it("ST-002 - should show error message when email is invalid", () => {
      const user = {
        ...validUser(),
        email: "invalid-email",
      };

      cy.get('[data-qa="signup-name"]').clear().type(user.name);
      cy.get('[data-qa="signup-email"]').clear().type(user.email);
      cy.get('[data-qa="signup-button"]').click();
      cy.get('[data-qa="signup-email"]')
        .invoke("prop", "validationMessage")
        .should("include", `${user.email}`);
    });

    it("ST-003 - should show error message when password is invalid", () => {
      const user = {
        ...validUser(),
        password: "123",
      };

      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();

      fillRegistrationForm(user);
      cy.get('[data-qa="create-account"]').click();
      cy.get("p").should(
        "not.contain.text",
        "Congratulations! Your new account has been successfully created!",
      );
      cy.get("p").should(
        "not.contain.text",
        "You can now take advantage of member privileges to enhance your online shopping experience with us.",
      );
    });

    const requiredFields = [
      { name: "password", skip: "password", selector: '[data-qa="password"]' },
      {
        name: "first name",
        skip: "firstName",
        selector: '[data-qa="first_name"]',
      },
      {
        name: "last name",
        skip: "lastName",
        selector: '[data-qa="last_name"]',
      },
      { name: "address", skip: "address", selector: '[data-qa="address"]' },
      { name: "state", skip: "state", selector: '[data-qa="state"]' },
      { name: "city", skip: "city", selector: '[data-qa="city"]' },
      { name: "zipcode", skip: "zipCode", selector: '[data-qa="zipcode"]' },
      {
        name: "mobile number",
        skip: "mobileNumber",
        selector: '[data-qa="mobile_number"]',
      },
    ];

    for (const field of requiredFields) {
      it(`ST-004 - should show error message when ${field.name} field is empty`, () => {
        const user = validUser();

        cy.get('[data-qa="signup-name"]').type(user.name);
        cy.get('[data-qa="signup-email"]').type(user.email);
        cy.get('[data-qa="signup-button"]').click();

        fillRegistrationForm(user, [field.skip]);

        cy.get('[data-qa="create-account"]').click();

        cy.validationMessageError(field.selector);
      });
    }
  });
});
