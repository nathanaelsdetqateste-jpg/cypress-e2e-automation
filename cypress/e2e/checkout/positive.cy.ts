import { validCard } from "../../factories/card/cardFactory";

describe("Checkout", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });
  describe("Positive scenarios", () => {
    it("BR-001 - Complete checkout with valid cart and payment successfully", () => {
      cy.login("loginUser");
      cy.visit("/");

      cy.AddToCart();
      cy.CompleteCheckout();
      cy.get('a[href="/download_invoice/500"]').should("be.visible").click();
      cy.readFile("cypress/downloads/invoice.txt").should("exist");
    });
  });
});
