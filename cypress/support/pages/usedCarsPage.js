class UsedCarsPage {
    visit() {
        cy.visit('/used-car/Dindigul');
    }

    typeCity(city) {
        cy.get('#usedCarCity').clear().type(city);
    }

    selectCity(city) {
        cy.contains('.ui-menu-item > a', city).click();
    }

    verifyAutoSuggestionVisible(city) {
        cy.contains('.ui-menu-item > a', city).should('be.visible');
    }

    verifyAutoSuggestionNotVisible(city) {
        cy.contains('.ui-menu-item > a', city,{timeout:10000}).should('not.be.visible');
    }

    verifyUsedCarsPageTitle(expectedTitle) {
        cy.get('#usedcarttlID', {timeout:10000}).should('have.text', expectedTitle);
    }
    
    visit1() {
        cy.visit('https://www.zigwheels.com/');
      }
    
      setViewport() {
        cy.viewport(1224, 768);
      }
    
      typeSearchKeyword(keyword) {
        cy.get('#headerSearch', { timeout: 10000 })
          .should('be.visible')
          .click()
          .type(keyword);
      }
    
      selectFirstSuggestion() {
        cy.wait(10000);
        cy.get('li.ui-menu-item a')
          .first()
          .should('be.visible')
          .click();
      }
    
      verifyUrl(expectedUrl) {
        cy.url().should('include', expectedUrl);
      }
    
      verifyNoResultsMessage(message) {
        cy.get('body').should('not.contain', message);
      }
}

export default UsedCarsPage;
