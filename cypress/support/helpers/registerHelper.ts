import { User } from "../../interface/user/userData";

export function fillRegistrationForm(user: User, skipFields: string[] = []) {
  if (!skipFields.includes("title")) {
    cy.get(`input[name="title"][value="${user.title}"]`).check();
  }

  if (!skipFields.includes("password")) {
    cy.get('[data-qa="password"]').type(user.password);
  }

  if (!skipFields.includes("birthDay")) {
    cy.get('[data-qa="days"]').select(user.birthdata.day);
  }

  if (!skipFields.includes("birthMonth")) {
    cy.get('[data-qa="months"]').select(user.birthdata.month);
  }

  if (!skipFields.includes("birthYear")) {
    cy.get('[data-qa="years"]').select(user.birthdata.year);
  }

  if (!skipFields.includes("firstName")) {
    cy.get('[data-qa="first_name"]').type(user.firstName);
  }

  if (!skipFields.includes("lastName")) {
    cy.get('[data-qa="last_name"]').type(user.lastName);
  }

  if (!skipFields.includes("company")) {
    cy.get('[data-qa="company"]').type(user.company);
  }

  if (!skipFields.includes("address")) {
    cy.get('[data-qa="address"]').type(user.address);
  }

  if (!skipFields.includes("address2")) {
    cy.get('[data-qa="address2"]').type(user.address2);
  }

  if (!skipFields.includes("country")) {
    cy.get('[data-qa="country"]').select(user.country);
  }

  if (!skipFields.includes("state")) {
    cy.get('[data-qa="state"]').type(user.state);
  }

  if (!skipFields.includes("city")) {
    cy.get('[data-qa="city"]').type(user.city);
  }

  if (!skipFields.includes("zipCode")) {
    cy.get('[data-qa="zipcode"]').type(user.zipCode);
  }

  if (!skipFields.includes("mobileNumber")) {
    cy.get('[data-qa="mobile_number"]').type(user.mobileNumber);
  }
}
