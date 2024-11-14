
describe('Test the seeding input page', () => {

    beforeEach(() => {
        cy.login('manager1', 'farmdata2')
        cy.visit('/farm/fd2-field-kit/seedingInput')
    }) 

    it('Check Data section has the header "Data"', () => {

    })

    it('Check Data section the date input element is enabled', () => {

    })

    it('Katey-Check Data section the date input element has the default value of the current date', () => {
        cy.get('[data-cy=date-select').should("have.value","2024-11-14")
    })

    it('Katey-Check Data section the crop drop down is enabled', () => {
        cy.get('[data-cy=dropdown-input').should("be.enabled");
        
    })

    it('Check Data section the crop drop down does not have a selected value', () => {

    })

    it('Check Data section the crop drop down contains the correct crop list', () => {
        
    })

})