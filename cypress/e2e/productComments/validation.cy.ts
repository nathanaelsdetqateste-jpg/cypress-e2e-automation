describe("Validation", () => {
  beforeEach(() => {
    cy.login("loginUser");
    cy.visit("/product_details/1");
  });

  describe("Negative scenarios", () => {
    it("ST-001 - Add a comment with invalid name format", () => {
      let invalidName: string = "invalid-name";

      cy.fixture("loginUser").then((user) => {
        cy.get('input[id="name"]').type(invalidName);
        cy.get('input[id="email"]').type(user.email);
      });
      cy.get('textarea[id="review"]').type("This is a test comment.");

      cy.get('button[id="button-review"]').click();
      cy.contains("Thank you for your review.").should("not.be.visible");
    });

    it("ST-002 - Add a comment with invalid email format", () => {
      let invalidEmail: string = "invalid-email";
      cy.fixture("loginUser").then((user) => {
        cy.get('input[id="name"]').type(user.name);
        cy.get('input[id="email"]').type(invalidEmail);
      });
      cy.get('textarea[id="review"]').type("This is a test comment.");
      cy.get('button[id="button-review"]').click();
      cy.contains("Thank you for your review.").should("not.be.visible");
      cy.get('input[id="email"]')
        .invoke("prop", "validationMessage")
        .should("include", invalidEmail);
    });

    const requiredFields = [{}, {}, {}];
  });
});
