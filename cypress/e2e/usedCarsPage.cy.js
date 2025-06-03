import UsedCarsPage from '../support/pages/usedCarsPage';

const usedCarsPage = new UsedCarsPage();
let testData = {};

describe('Used Cars Page: City Filter and Listing Verification', () => {
  before(() => {
    cy.fixture('usedCarsData').then((data) => {
      testData = data;
    });
    
  });

  it('Valid city input shows auto-suggestions', () => {
    usedCarsPage.visit();
    usedCarsPage.typeCity(testData.validCityPartial);
    usedCarsPage.verifyAutoSuggestionVisible(testData.validCity);
  });

  it('Invalid city input does not show auto-suggestions', () => {
    usedCarsPage.typeCity(testData.invalidCity);
    usedCarsPage.verifyAutoSuggestionNotVisible(testData.validCity);
  });
  
  it('Selected city displays corresponding used car listings', () => {
    usedCarsPage.typeCity(testData.validCityPartial);
    usedCarsPage.selectCity(testData.validCity);
    usedCarsPage.verifyUsedCarsPageTitle(testData.expectedTitle);
  });

  it('Test case - Select suggestion using uppercase input', () => {
      usedCarsPage.visit1();
      usedCarsPage.setViewport();
      usedCarsPage.typeSearchKeyword(testData.searchKeyword);
      usedCarsPage.selectFirstSuggestion();
      usedCarsPage.verifyUrl(testData.expectedUrl);
      usedCarsPage.verifyNoResultsMessage(testData.noResultsMessage);
    });

    it('should match normalized car name from card and detail page', () => {
      Cypress.on('uncaught:exception', () => {
        return false;
       });

      usedCarsPage.visit2();
  
      // Step 1: Get the first car card and extract the name
      usedCarsPage.getFirstCarCard().then(($el) => {
        const fullCardText = $el.text().trim();
  
        // Normalize the card name
        const normalizedCardName = usedCarsPage.normalizeCarName(fullCardText);
        cy.wrap(normalizedCardName).as('expectedCarName');
  
        // Click the card to go to the detail page
        cy.wrap($el).click();
      });
  
      // Step 2: On the detail page, extract and normalize the car name
      cy.get('@expectedCarName').then((expectedName) => {
        cy.url({ timeout: 20000 }).should('include', '/used-car/');
        usedCarsPage.getCarDetailName()
          .invoke('text')
          .then((actualText) => {
            const normalizedDetailName = usedCarsPage.normalizeCarName(actualText);
            cy.log('Expected:', expectedName);
            cy.log('Actual:', normalizedDetailName);
  
            // Final assertion
            expect(normalizedDetailName).to.eq(expectedName);
          });
      });
    });

    
it('should filter used cars based on custom price range', () => {
  Cypress.on('uncaught:exception', () => {
     return false;
    });
   usedCarsPage.visit3();
   usedCarsPage.enterCity(testData.validCity);
   usedCarsPage.waitForLoader();
   usedCarsPage.selectMinPrice(testData.minPrice);
   usedCarsPage.waitForLoader(30000);
   usedCarsPage.selectMaxPrice(testData.maxPrice);
   usedCarsPage.waitForLoader(20000);
   usedCarsPage.verifyResultsExist();
   usedCarsPage.clickFirstCar();
   usedCarsPage.verifyPriceInRange(testData.min, testData.max);
   });
});
