describe ('Mi primera prueba en Cypress', () => {
    beforeEach(() => {
        cy.visit('https://odettegallo.github.io/#/')
    })
    it('Visitar una página y comprobar el título', () => {
        
        cy.get('.text-h4').should('contain', 'Odette Gallo')
    })
    it('Comprobar la existencia de un elemento en la página', () => {
        cy.get('h1').should('exist')
    })
})