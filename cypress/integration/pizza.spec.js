describe('Pizza Order', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000/pizza/')
    })

    //Helpers
    const nameInput = () => cy.get('input[id=name-input]');
    const sizeInput = () => cy.get('select[id=size-dropdown');
    const toppingsInput = () => cy.get('input[id=toppings]');
    const specialInput = () => cy.get('textarea[id=special-text]');
    const submitBtn = () => cy.get('button[id=order-button]');

    //Sanity Test
    it('making sure tests work', () => {
        expect(1 + 1).to.equal(2);
        expect(4 + 4).not.to.equal(6);
        expect({}).not.to.equal({});
    })

    //Tests
    it('can type in textarea', () => {
        specialInput()
            .should('have.value', '')
            .type('testing')
            .should('have.value', 'testing')
            .clear();
    })

    it('can select multiple toppings', () => {
        toppingsInput()
            .click({ multiple:true })
            .should('be.checked')
            .click({ multiple:true })
            .should('not.be.checked');
    })

    it('submit button works', () => {
        nameInput().type('name');
        sizeInput().select('Small');
        toppingsInput().click({ multiple:true });
        submitBtn().click();
        cy.contains('Thank you').should('exist');
    })


})