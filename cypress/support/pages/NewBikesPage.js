class NewBikesPage{
    
    visit(){
        cy.visit('https://www.zigwheels.com/');
        cy.viewport(1224, 768);
    }
    navigation(){
        // Navigate to Upcoming Honda Bikes
        cy.get('.h-d-nav > :nth-child(3) > .c-p').click();
        cy.get('[data-track-label="upcoming-tab"]').click();
        cy.get('a[title="All Upcoming Bikes"]').should('have.text', 'Upcoming Bikes').click();
        cy.contains('Honda').should('exist').click();
    }
    verifyDetails() {
      // Verify bike details
      cy.get('ul#modelList > .modelItem').each(($el) => {
        cy.wrap($el).within(() => {
          cy.get('[data-track-label="model-name"]')  
            .should('be.visible')
            .and('not.be.empty')
            .invoke('text')
            .then((bikeName) => {
              cy.log('Bike Name: ' + bikeName);
            });
     
          cy.get('div.b.fnt-15')
            .should('be.visible')
            .and('not.be.empty')
            .invoke('text')
            .then((bikePrice) => {
              cy.log('Price: ' + bikePrice);
            });
     
          cy.get('div.clr-try.fnt-14')
            .should('be.visible')
            .and('not.be.empty')
            .invoke('text')
            .then((launchDate) => {
              cy.log('Launch Date: ' + launchDate);
            });
        });
      });
  }
  searchbar(){
      cy.get('#headerSearch').should('be.visible').as('Searchbar');
      cy.get('@Searchbar').type('Upcoming Honda Bikes');
      cy.wait(10000);
      cy.get('ul#ui-id-1').contains('Upcoming Honda Bikes').should('be.visible').click();
      // Verify that each card contains "HONDA" in the name
      cy.get('ul#modelList > .modelItem').each(($el) => {
        cy.wrap($el).find('[data-track-label="model-name"]')
          .should('be.visible')
          .and('not.be.empty')
          .invoke('text')
          .then((bikeName) => {
            expect(bikeName.toUpperCase()).to.include('HONDA');
            cy.log('Bike Name: ' + bikeName);
          });
      });
  }
    verifyURL(){
        cy.url().then((currentURL)=>{
            const expectedURL='https://www.zigwheels.com/upcoming-honda-bikes';
            expect(currentURL).to.eq(expectedURL);
        });
    }
    navigationtab(){
        cy.get('#headerNewVNavWrap nav ul.h-d-nav li a').
        contains('NEW BIKES').
        click({ force: true });
    }
    clickingupcomingtab(){
         cy.get('[data-track-label="upcoming-tab"]').click({force:true});
         cy.get('#upcoming-bikes > :nth-child(1) > #zw-cmnSilder > .pt-15 > .lnk-c').
        click({ force: true });
    }
   
    clickbrand(){
        cy.scrollTo('bottom');
        cy.contains('Honda').click({ force: true });
    }
    verifytext(){
        cy.get('.fil-w > .mt-10').
        invoke('text').
        should('include', 'Upcoming Honda Bikes');

    }

    verifyBikePricesUnder4Lakh() {
          cy.get('ul#modelList > .modelItem').each(($el) => {
            cy.wrap($el).within(() => {
              cy.get('div.b.fnt-15')
                .should('be.visible')
                .and('not.be.empty')
                .invoke('text')
                .then((bikePrice) => {
                  const priceMatch = bikePrice.match(/(?:₹|Rs\.)\s*([\d.,]+)\s*(Lakh|Crore|)/i);
      
                  if (priceMatch) {
                    let priceValue = parseFloat(priceMatch[1].replace(/,/g, ''));
      
                    if (priceMatch[2]?.toLowerCase() === 'lakh') {
                      priceValue *= 100000;
                    } else if (priceMatch[2]?.toLowerCase() === 'crore') {
                      priceValue *= 10000000;
                    }
      
                    if (priceValue < 400000) {
                      cy.log(`*** Found a bike under ₹4 lakh: (₹${priceValue}) ***`);
                    }
                  } else {
                    cy.log(`WARNING: Price format not matched for: "${bikePrice}"`);
                  }
                });
            });
          });
        }
     
}
export default NewBikesPage;