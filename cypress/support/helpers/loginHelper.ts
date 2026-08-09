import { User } from "../../interface/user/userData";

export function fillLoginForm(user: User, skipFields: string[] = []) {
  if (!skipFields.includes("email")) {
    cy.get('[data-qa="login-email"]').type(user.email);
  }

  if (!skipFields.includes("password")) {
    cy.get('[data-qa="login-password"]').type(user.password);
  }
}
