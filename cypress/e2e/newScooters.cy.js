import newScooters from '../support/pages/newScooters.js';
 
describe('Upcoming Honda Bikes Listing', () => {
  it('TC_18', () => {
    newScooters.visit();
    newScooters.navigation();
    newScooters.firstScooterReview();
  });
});
