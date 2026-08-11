import { validCard } from "../../factories/card/cardFactory";

describe("Checkout", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/");
  });
  describe("Positive scenarios", () => {
    it("BR-001 - Complete checkout with valid cart and payment successfully", () => {
      cy.AddToCart();
      cy.CompleteCheckout();
      cy.get('a[href^="/download_invoice/"]').click();
      cy.readFile("cypress/downloads/invoice.txt").should("exist");
    });
  });
});
