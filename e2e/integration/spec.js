it('Search for DevOps book', () => {
    cy.visit('/bookCategory')
  
    cy.get('#inputDishTitle')
      .type('DevOps')
    cy.get('form').submit()
  
    cy.get('.book-text-title')
      .should('contain', 'The DevOps Handbook:')
  })