import { validCard } from "../../factories/card/cardFactory";
import { cardData } from "../../interface/card/cardData";

export function fillPaymentForm(card: cardData, skipFields: string[] = []) {
  if (!skipFields.includes("cardName")) {
    cy.get('[data-qa="name-on-card"]').type(validCard().nameCard);
  }

  if (!skipFields.includes("cardNumber")) {
    cy.get('[data-qa="card-number"]').type(validCard().numberCard);
  }

  if (!skipFields.includes("cardCvc")) {
    cy.get('[data-qa="cvc"]').type(validCard().cvcCard);
  }

  if (!skipFields.includes("expiryMonth")) {
    cy.get('[data-qa="expiry-month"]').type(
      validCard().expirationMonthCard.toString(),
    );
  }

  if (!skipFields.includes("expiryYear")) {
    cy.get('[data-qa="expiry-year"]').type(
      validCard().expirationYearCard.toString(),
    );
  }
}
