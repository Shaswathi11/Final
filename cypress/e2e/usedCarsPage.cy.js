import UsedCarsPage from '../support/pages/usedCarsPage';

const usedCarsPage = new UsedCarsPage();
let testData = {};

describe('Used Cars Page: City Filter and Listing Verification', () => {
  before(() => {
    cy.fixture('usedCarsData').then((data) => {
      testData = data;
    });
    usedCarsPage.visit();
  });

  it('Valid city input shows auto-suggestions', () => {
    usedCarsPage.typeCity(testData.validCityPartial);
    usedCarsPage.verifyAutoSuggestionVisible(testData.validCity);
  });

  it('Invalid city input does not show auto-suggestions', () => {
    usedCarsPage.typeCity(testData.invalidCity);
    usedCarsPage.verifyAutoSuggestionNotVisible(testData.validCity);
  });

});
