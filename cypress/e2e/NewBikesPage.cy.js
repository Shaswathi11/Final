import NewBikesPage from '../support/pages/NewBikesPage.js';
   
describe('Upcoming Honda Bikes Listing', () => {
  const newBikesPage = new NewBikesPage(); 
  it('Verify Upcoming Honda Bikes List & Search Functionality', () => {
    newBikesPage.visit();
    newBikesPage.navigation();
    newBikesPage.verifyDetails();
  });
  it('To verify that the page appears even when searching "Upcoming Honda bike" with case insensitivity in the search bar.',()=>{
    newBikesPage.visit();
    newBikesPage.searchbar();
    newBikesPage.verifyURL();
  });
  it('To verify navigate to "Upcoming Honda bike"',()=>{
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false;
      });
    newBikesPage.visit();
    newBikesPage.navigationtab();
    newBikesPage.clickingupcomingtab();
    newBikesPage.clickbrand();
    newBikesPage.verifytext();
  });
  it('should list all upcoming Honda bikes under ₹4 lakh', () => {
    newBikesPage.visit();
    newBikesPage.navigationtab();
    newBikesPage.clickingupcomingtab();
    newBikesPage.clickbrand();
    newBikesPage.verifyBikePricesUnder4Lakh();
    });
});