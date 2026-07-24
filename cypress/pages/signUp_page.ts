class SignUpPage {
  visit() {
    cy.visit("/login");
  }
  fillName(name: string) {
    cy.get('[data-qa="signup-name"]').type(name);
  }
  fillEmail(email: string) {
    cy.get('[data-qa="signup-email"]').type(email);
  }
  clickSingUp() {
    cy.get('[data-qa="signup-button"]').click();
  }

  selectTitle(title: "Mr" | "Mrs") {
    cy.get(`input[name="title"][value="${title}"]`).check();
  }
  fillPassword(password: string) {
    cy.get('[data-qa="password"]').type(password);
  }
  birthdata(day: string, month: string, years: string) {
    cy.get('[data-qa="days"]').select(day);
    cy.get('[data-qa="months"]').select(month);
    cy.get('[data-qa="years"]').select(years);
  }
  fillFirstName(firstName: string) {
    cy.get('[data-qa="first_name"]').type(firstName);
  }
  fillLastName(lastName: string) {
    cy.get('[data-qa="last_name"]').type(lastName);
  }
  fillCompany(company: string) {
    cy.get('[data-qa="company"]').type(company);
  }
  fillAddress(address: string) {
    cy.get('[data-qa="address"]').type(address);
  }
  fillAddress2(address2: string) {
    cy.get('[data-qa="address2"]').type(address2);
  }
  selectCountry(country: string) {
    cy.get('[data-qa="country"]').select(country);
  }
  fillState(state: string) {
    cy.get('[data-qa="state"]').type(state);
  }
  fillCity(city: string) {
    cy.get('[data-qa="city"]').type(city);
  }
  fillZipcode(zipcode: string) {
    cy.get('[data-qa="zipcode"]').type(zipcode);
  }
  fillMobileNumber(mobilenumber: string) {
    cy.get('[data-qa="mobile_number"]').type(mobilenumber);
  }

  clickCreateAccount() {
    cy.get('[data-qa="create-account"]').click();
  }

  checkSuccessMessage() {
    cy.get("h2 b").should("be.visible").and("have.text", "Account Created!");
    cy.contains(
      "p",
      "Congratulations! Your new account has been successfully created!",
    ).should("be.visible");
    cy.contains(
      "p",
      "You can now take advantage of member privileges to enhance your online shopping experience with us.",
    ).should("be.visible");
  }
}

export default new SignUpPage();
