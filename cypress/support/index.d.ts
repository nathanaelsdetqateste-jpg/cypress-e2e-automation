declare namespace Cypress {
  interface Chainable {
    validationMessageError(selector: string): Chainable<string>;
    login(cookieName: string): Chainable<string>;
    AddToCart(): Chainable<string>;
    CompleteCheckout(): Chainable<string>;
  }
}
