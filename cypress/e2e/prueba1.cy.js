describe ('Mi primera prueba en Cypress', () => {
    it('Visitar una página y comprobar el título', () => {
        cy.visit('https://odettegallo.github.io/#/')
        cy.get('.text-h4').should('contain', 'Odette Gallo')
    })
    it('Comprobar la existencia de un elemento en la página', () => {
        cy.visit('https://odettegallo.github.io/#/')
        cy.get('h1').should('exist')
    })
})