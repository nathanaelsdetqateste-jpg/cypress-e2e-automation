import { validUser } from "../factories/user/userFactory";
import { fillRegistrationForm } from "./helpers/registerHelper";

Cypress.Commands.add("validationMessageError", (selector: string) => {
  return cy
    .get(selector)
    .invoke("prop", "validationMessage")
    .should("include", "Preencha este campo.");
});

Cypress.Commands.add("login", () => {
  cy.session("loginUser", () => {
    cy.fixture("loginUser").then((user) => {
      cy.visit("/login");

      cy.get('[data-qa="login-email"]').type(user.email);
      cy.get('[data-qa="login-password"]').type(user.password);
      cy.get('[data-qa="login-button"]').click();

      cy.get("a")
        .should("contain.text", `Logged in as ${user.name}`)
        .should("be.visible");
    });
  });
});
