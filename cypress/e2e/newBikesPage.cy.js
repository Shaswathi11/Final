import NewBikesPage from '../support/pages/newBikesPage.js';
 
describe('Upcoming Honda Bikes Listing', () => {
  const newBikesPage=new NewBikesPage;
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
  
});
