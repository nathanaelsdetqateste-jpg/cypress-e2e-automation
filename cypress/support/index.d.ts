declare namespace Cypress {
  interface Chainable {
    validationMessageError(selector: string): Chainable<string>;
  }

  interface Chainable {
    login(cookieName: string): Chainable<string>;
  }
}
