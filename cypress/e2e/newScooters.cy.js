import newScooters from '../support/pages/newScooters.js';
 
describe('Scooter Review', () => {
  it('TC_18', () => {
    newScooters.visit();
    newScooters.navigation();
    newScooters.firstScooterReview();
  });
});