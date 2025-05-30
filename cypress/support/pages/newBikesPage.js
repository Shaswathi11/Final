it('TC_01: Verify only upcoming Honda bikes are listed', () => {
  
    Cypress.on('uncaught:exception', (err, runnable) => {
        
        return false;
      });
      
      cy.visit('https://www.zigwheels.com/');
      cy.viewport(1224, 768);
    
      
      cy.get('#headerNewVNavWrap nav ul.h-d-nav li a')
        .contains('NEW BIKES')
        .click({ force: true });
    
      
      cy.get('[data-track-label="upcoming-tab"]').click({force:true});
    
      
      cy.get('#upcoming-bikes > :nth-child(1) > #zw-cmnSilder > .pt-15 > .lnk-c')
      .click({ force: true });
    
      
      cy.scrollTo('bottom');
      cy.contains('Honda').click({ force: true });
    
      
      cy.get('.fil-w > .mt-10')
      .invoke('text')
      .should('include', 'Upcoming Honda Bikes');
     saras
      
    });
    