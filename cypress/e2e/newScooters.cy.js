import newScooters from '../support/pages/newScooters.js';
 
describe('Scooter Review', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
    });
  });
  it('TC_18', () => {
    newScooters.visit();
    newScooters.navigation();
    newScooters.firstScooterReview();
  });
  it('should compare scooters correctly', () => {
    newScooters.visitHomePage();
    newScooters.clickScootersTab();
    newScooters.clickPopularScooters();
    newScooters.selectScooterModels();
    newScooters.compareSelectedBikes();
    newScooters.verifyComparisonPage();
  });
  it('Scooter page', () => {
    newScooters.visit();
    cy.wait(2000);
    newScooters.goToBestScooters();
    newScooters.selectScooter('Honda Activa 6G');
    newScooters.goToSpecifications();
    newScooters.verifySpecifications();
  });
});