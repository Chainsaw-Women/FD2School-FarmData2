//Test Crop Filter

describe('Test Crop Filter', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-barn-kit/seedingReport')
        cy.waitForPage()
    })
    it('Check if multiple different crops are in the table when “All” is selected in the Crop filter', () => {
        //hillary
        cy.get('[data-cy=start-date-select]')
            .type('2019-10-01')
        cy.get('[data-cy=end-date-select]')
            .type('2020-01-01')
        cy.get('[data-cy=generate-rpt-btn]').click()

        cy.get('[data-cy=seeding-type-dropdown] > [data-cy=dropdown-input]')
            .select('All')
            .should('have.value', 'All')
        
        cy.get('[data-cy=td-r0c1]')
            .invoke('text')
            .then(crop => {
                expect(crop, 'LETTUCE-MES MIX')
        })
        cy.get('[data-cy=td-r2c1]')
            .invoke('text')
            .then(crop => {
                expect(crop, 'SPINACH')
        })
        cy.get('[data-cy=td-r7c1]')
            .invoke('text')
            .then(crop => {
                expect(crop, 'TURNIP')
        })
        // cy.get('[data-cy=r2-Crop]')
        //     .should('have.value', 'SPINACH')
        // cy.get('[data-cy=r7-Crop]')
        //     .should('have.value', 'TURNIP')   
        cy.get('[data-cy=table-body]').children()
            .should('have.length', '8')
    })
    
    // it('Check the table only have seeding logs for selected crop', () => {
    //     //katie
    // })
    // it('Check the dropdown for the Crop filter only has crops with seeding logs in the date range', () => {
    //     //ana
    // })
})