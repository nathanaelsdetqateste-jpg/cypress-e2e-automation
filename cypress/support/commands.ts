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

Cypress.Commands.add("AddToCart", () => {
  cy.get('a[href="/product_details/1"]')
    .should("contain.text", "View Product")
    .and("be.visible")
    .click();

  cy.get("h2").should("contain.text", "Blue Top").and("be.visible");
  cy.get(".btn.btn-default.cart").should("be.visible").click();

  cy.get("h4").should("contain.text", "Added!").and("be.visible");
  cy.get("p")
    .should("contain.text", "Your product has been added to cart.")
    .and("be.visible");
  cy.get('a[href="/view_cart"]')
    .find("u")
    .should("contain.text", "View Cart")
    .click();
});
