import { validCard } from "../factories/card/cardFactory";
import { validUser } from "../factories/user/userFactory";
import { cardData } from "../interface/card/cardData";
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
  cy.url().should("include", "/view_cart");
});

Cypress.Commands.add("CompleteCheckout", () => {
  let headersList = [
    "Item",
    "Description",
    "Price",
    "Quantity",
    "Total",
    "Action",
  ];

  cy.get(".btn.btn-default.check_out").should("be.visible").click();

  cy.url().should("contain", "/checkout");

  for (const header of headersList) {
    cy.get("#cart_info").find(".cart_menu").should("contain.text", header);
    break;
  }

  cy.get(".form-control").type("test");
  cy.get(".btn.btn-default.check_out").should("be.visible").click();

  cy.get('[data-qa="name-on-card"]').type(validCard().nameCard);
  cy.get('[data-qa="card-number"]').type(validCard().numberCard);
  cy.get('[data-qa="cvc"]').type(validCard().cvcCard);
  cy.get('[data-qa="expiry-month"]').type(
    validCard().expirationMonthCard.toString(),
  );
  cy.get('[data-qa="expiry-year"]').type(
    validCard().expirationYearCard.toString(),
  );
  cy.get('[data-qa="pay-button"]').should("be.visible").click();

  cy.url().should("include", "/payment_done");
  cy.get("b").should("contains.text", "Order Placed!").and("be.visible");
  cy.get("p")
    .should("contains.text", "Congratulations! Your order has been confirmed!")
    .and("be.visible");
});
