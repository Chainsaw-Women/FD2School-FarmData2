//Test Crop Filter

describe("Test Crop Filter", () => {
  beforeEach(() => {
    cy.login("manager1", "farmdata2");
    cy.visit("/farm/fd2-barn-kit/seedingReport");
    cy.waitForPage();
  });
  it("Check if multiple different crops are in the table when “All” is selected in the Crop filter", () => {
    cy.get("[data-cy=start-date-select]").type("2019-10-01");
    cy.get("[data-cy=end-date-select]").type("2020-01-01");
    cy.get("[data-cy=generate-rpt-btn]").click();

    cy.get("[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]")
      .select("All")
      .should("have.value", "All");

    cy.get("[data-cy=td-r0c1]")
      .invoke("text")
      .then((crop) => {
        expect(crop, "LETTUCE-MES MIX");
      });
    cy.get("[data-cy=td-r2c1]")
      .invoke("text")
      .then((crop) => {
        expect(crop, "SPINACH");
      });
    cy.get("[data-cy=td-r7c1]")
      .invoke("text")
      .then((crop) => {
        expect(crop, "TURNIP");
      });
    cy.get("[data-cy=table-body]").children().should("have.length", "8");
  });
  it("Check the table only have seeding logs for selected crop", () => {
    //Katey

    cy.get("[data-cy=start-date-select]>[data-cy=date-select]").select(
      "2020-01-01"
    );
    cy.get("[data-cy=start-date-select]>[data-cy=date-select]").select(
      "2024-11-20"
    );
    cy.get("[data-cy=generate-rpt-btn]").click();

    cy.get(
      "[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option24]"
    ).should("contain.text", "GARLIC");

    cy.get("[data-cy=td-r0c1]>[data-cy=r0-Crop]").should(
      "contain.text",
      "GARLIC"
    );
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
