import { validUser } from "../../../factories/user/userFactory";
import { fillRegistrationForm } from "../../../support/helpers/registerHelper";

describe("Validation", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  describe("Negative scenarios", () => {
    it.only("ST-002 - should show error message when email is invalid", () => {
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

    it("ST-004 - should show error message when name field is empty", () => {
      const user = validUser();

      cy.get('[data-qa="signup-email"]').type(user.email);
      cy.get('[data-qa="signup-button"]').click();
      cy.validationMessageError('[data-qa="signup-name"]');
    });

    it("ST-005 - should show error message when email field is empty", () => {
      const user = validUser();

      cy.get('[data-qa="signup-name"]').type(user.name);
      cy.get('[data-qa="signup-button"]').click();
      cy.validationMessageError('[data-qa="signup-email"]');
    });

    it("ST-006 - should show error message when password field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["password"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="password"]');
    });

    it("ST-007 - should show error message when first name field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["firstName"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="first_name"]');
    });

    it("ST-008 - should show error message when last name field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["lastName"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="last_name"]');
    });

    it("ST-009 - should show error message when address field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["address"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="address"]');
    });

    it("ST-010 - should show error message when state field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["state"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="state"]');
    });

    it("ST-011 - should show error message when city field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["city"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="city"]');
    });

    it("ST-012 - should show error message when zipcode field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["zipCode"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="zipcode"]');
    });

    it("ST-013 - should show error message when mobile number field is empty", () => {
      const user = validUser();

      fillRegistrationForm(user, ["mobileNumber"]);
      cy.get('[data-qa="create-account"]').click();
      cy.validationMessageError('[data-qa="mobile_number"]');
    });
  });
});
