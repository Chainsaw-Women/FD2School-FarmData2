//Test Crop Filter

describe('Test Crop Filter', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })
    it('Check if multiple different crops are in the table when “All” is selected in the Crop filter', () => {
        //hillary
        
    })
    it('Check the table only have seeding logs for selected crop', () => {
        //Katey 

        cy.get("[data-cy=start-date-select]>[data-cy=date-select]").select('2020-01-01');
        cy.get("[data-cy=start-date-select]>[data-cy=date-select]").select('2024-11-20');
        cy.get("[data-cy=generate-rpt-btn]").click();

        cy.get("[data-cy=crop-selection] > [data-cy=dropdown-input] > [data-cy=option24]").should("contain.text", "GARLIC");

        cy.get("[data-cy=td-r0c1]>[data-cy=r0-Crop]").should("contain.text", "GARLIC");
    })
    it('Check the dropdown for the Crop filter only has crops with seeding logs in the date range', () => {
        //anne
    })
})