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
        cy.visit('/');
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
        cy.get('li.ui-menu-item a',{ timeout: 10000 })
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

      visit2() {
        cy.visit('/used-car/Chennai');
      }
    
      getFirstCarCard() {
        return cy.get('#data-set-body').find('a.zw-sr-headingPadding').first();
      }
    
      getCarDetailName() {
        return cy.get('h1.mobHeading', { timeout: 20000 }).should('be.visible');
      }
    
      normalizeCarName(name) {
        return name
          .replace(/\b\d{4}-\d{4}\b/g, '')       // Remove year ranges like "2016-2019"
          .replace(/\b\d{4}\b/g, '')             // Remove single years like "2018"
          .replace(/^(.+?)\s+\1\s+/, '$1 ')      // Remove duplicate brand names
          .replace(/\s+/g, ' ')                  // Normalize multiple spaces
          .trim()
          .toLowerCase();                        // Case-insensitive comparison
      }

      
        visit3() {
          cy.visit('https://www.zigwheels.com/used-car');
        }
      
        enterCity(city) {
          cy.get('#usedCarCity').clear().type(city).wait(10000);
          cy.get('li.ui-menu-item').contains(city).should('be.visible').click();
        }
      
        waitForLoader(timeout = 10000) {
          cy.get('div.usedLoader', { timeout }).should('not.be.visible');
        }
      
        selectMinPrice(price) {
          cy.get('select.selectBox').eq(0).select(price);
        }
      
        selectMaxPrice(price) {
          cy.get('select.selectBox').eq(1).select(price);
        }
      
        verifyResultsExist() {
          cy.get('#data-set-body .zw-sr-searchTarget', { timeout: 20000 }).should('have.length.greaterThan', 0);
        }
      
        clickFirstCar() {
          cy.get('#data-set-body .zw-sr-searchTarget')
            .first()
            .find('a[data-track-component="used-car-listing"]')
            .should('have.attr', 'href')
            .then((href) => {
              cy.visit(href);
            });
        }
      
        verifyPriceInRange(min, max) {
          cy.get('.zw-cmn-price')
            .invoke('text')
            .then((priceText) => {
              const trimmedPrice = priceText.trim();
              const match = trimmedPrice.match(/Rs\.\s*([\d,.]+)/i);
              const priceInLakhs = parseFloat(match[1].replace(/,/g, ''));
              expect(priceInLakhs).to.be.within(min, max);
            });
        }
      
}

export default UsedCarsPage;
