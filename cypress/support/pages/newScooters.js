class newScooters{
    visit(){
        cy.visit('https://www.zigwheels.com/');
        cy.viewport(1224, 768);
    }
    navigation(){
        cy.get('#headerNewVNavWrap nav ul li a[title="Scooters"]').click();
        cy.get('a').contains('Popular Scooters').click();
   
        cy.url().should('include','best-scooters');
    }
    firstScooterReview(){
        cy.get('.r-wn.w').first().click();
        cy.get('.m-15').contains('User Reviews');
        cy.get('.ur-mct.rcat').then(text=>{
        cy.log(text.text());
        });
    }
    visitHomePage() {
        cy.visit('https://www.zigwheels.com');
    }
    
    clickScootersTab() {
        cy.get('.container')
          .find('.row')
          .find('#headerNewVNavWrap')
          .contains('SCOOTERS')
          .click({ force: true });
    }
    
    clickPopularScooters() {
        cy.get('#zw-cmnSilder').contains('Popular Scooters').click();
    }
    
    selectScooterModels() {
        cy.wait(500);
        cy.get('#modelList').find('.col-lg-6').find('#modelId_1').check({ force: true });
        cy.get('#modelList').find('.col-lg-6').find('#modelId_2').check({ force: true });
    }
    
    compareSelectedBikes() {
        cy.get('.compareWrap').contains('Compare Selected Bikes').click();
    }
    
    verifyComparisonPage() {
        cy.wait(20000);
        cy.url().should('include', 'honda-activa-6g-vs-suzuki-access');
    }

    selectScooter(scooterName) {
        cy.get(`a[title="${scooterName}"]`).first().click();
      }

      goToSpecifications() {
        cy.get('a[title="Honda Activa 6G Specifications and Features"]').click();
      }
    
      verifySpecifications() {
        cy.get('table.topSpec', { timeout: 10000 }).should('be.visible');
        cy.get('h2').contains('Key Specs of Activa 6G').should('be.visible');
        cy.contains('td.label-spec', 'Engine Displ.').should('be.visible');
        cy.contains('td.label-spec', 'Mileage').should('be.visible');
        cy.contains('td.label-spec', 'Max Power').should('be.visible');
        cy.contains('td.label-spec', 'Fuel Type').should('be.visible');
      }
      goToBestScooters() {
        cy.get('a[href="/newbikes/best-scooters"]').click();
      }
}
export default new newScooters;