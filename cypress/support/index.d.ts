declare namespace Cypress {
  interface Chainable {
    validationMessageError(selector: string): Chainable<string>;
    addProductToCart(): Chainable<string>;
  }

  interface Chainable {
    login(cookieName: string): Chainable<string>;
  }
}
