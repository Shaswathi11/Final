import UsedCarsPage from '../support/pages/usedCarsPage';

const usedCarsPage = new UsedCarsPage();
let testData = {};

describe('Cypress Browser Navigation & Inspection - Scenario 1', () => {
  before(() => {
    cy.fixture('usedCarsData').then((data) => {
      testData = data;
    });
    usedCarsPage.visit();
  });

  it('Auto suggestion visibility check for valid city', () => {
    usedCarsPage.typeCity(testData.validCityPartial);
    usedCarsPage.verifyAutoSuggestionVisible(testData.validCity);
  });

  it('Auto suggestion invisibility check for invalid city', () => {
    usedCarsPage.typeCity(testData.invalidCity);
    usedCarsPage.verifyAutoSuggestionNotVisible(testData.validCity);
  });

  it('To verify used car lists page are according to the selected city', () => {
    usedCarsPage.typeCity(testData.validCityPartial);
    usedCarsPage.selectCity(testData.validCity);
    usedCarsPage.verifyUsedCarsPageTitle(testData.expectedTitle);
  });
});
