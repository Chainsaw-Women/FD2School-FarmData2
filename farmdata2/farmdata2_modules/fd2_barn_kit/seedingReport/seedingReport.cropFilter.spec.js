//Test Crop Filter

describe("Test Crop Filter", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2");
    cy.visit("/farm/fd2-barn-kit/seedingReport");
    cy.waitForPage();
  });
  it("Check if multiple different crops are in the table when “All” is selected in the Crop filter", () => {
    //hillary
  });
  it("Check the table only have seeding logs for selected crop", () => {
    //katie
  });

  it("Check the dropdown for the Crop filter only has crops with seeding logs in the date range", () => {
    //anne
    cy.get("[data-cy=crop-dropdown]").should("exist");

    cy.get("[data-cy=start-date-select]").should("exist").type("2019-01-01");

    cy.get("[data-cy=end-date-select]").should("exist").type("2019-03-01");

    cy.get("[data-cy=date-select]").each(($el, index, $all) => {
      if (index == 0) {
        expect($el).to.have.value("2019-01-01");
      } else if (index == 1) {
        expect($el).to.have.value("2019-03-01");
      }
    });
  });
});
