//Test Crop Filter

describe('Test Crop Filter', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    })
    it('Check if multiple different crops are in the table when “All” is selected in the Crop filter', () => {
        //hillary
    })
    it('Check the table only have seeding logs for selected crop', () => {
        //katie
    })
    it('Check the dropdown for the Crop filter only has crops with seeding logs in the date range', () => {
        //ana
    })
})