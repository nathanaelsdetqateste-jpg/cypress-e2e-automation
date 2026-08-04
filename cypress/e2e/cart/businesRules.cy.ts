describe("Business Rules", () => {
  beforeEach(() => {
    cy.visit("/cart");
  });

  it("BR-001 - Should not allow checkout with an empty cart", () => {});

  it("BR-002 - Should allow checkout with items in the cart", () => {});

  it("BR-003 - Should display the correct total amount for the items in the cart", () => {});
});
