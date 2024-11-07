
describe('Test the seeding input page', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    }) 

    it('Check Data section has the header "Data"', () => {

    })

    it('Check Data section the date input element is enabled', () => {

    })

    it('Check Data section the date input element has the default value of the current date', () => {

    })

    it('Check Data section the crop drop down is enabled', () => {

    })

    it('Check Data section the crop drop down does not have a selected value', () => {
        //hillary's

    })

    it('Check Data section the crop drop down contains the correct crop list', () => {
        //hillary's
        /* cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option4]")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option11q]") */
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option0]")
            .should("have.text","ARUGULA")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option4]")
            .should("have.text","BEAN-FAVA")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input] > [data-cy=option111]")
            .should("have.text","ZUCCHINI")
        cy.get("[data-cy=crop-dropdown] > [data-cy=dropdown-input]").children()
            .should("have.length","111")
    })

})