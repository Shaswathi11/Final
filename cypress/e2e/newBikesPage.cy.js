import NewBikesPage from '../support/pages/newBikesPage.js';
 
describe('Upcoming Honda Bikes Listing', () => {
  it('Verify Upcoming Honda Bikes List & Search Functionality', () => {
    NewBikesPage.visit();
    NewBikesPage.navigation();
    NewBikesPage.verifyDetails();
  });
  it('To verify that the page appears even when searching "Upcoming Honda bike" with case insensitivity in the search bar.',()=>{
    NewBikesPage.visit();
    NewBikesPage.searchbar();
    NewBikesPage.verifyURL();
  });
});