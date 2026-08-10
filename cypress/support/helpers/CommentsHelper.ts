export function fillCommentsForm(skipFields: string[] = []) {
  cy.fixture("LoginUser").then((user) => {
    if (!skipFields.includes("name")) {
      cy.get('input[id="name"]').type(user.name);
    }

    if (!skipFields.includes("email")) {
      cy.get('input[id="email"]').type(user.email);
    }
  });
}
