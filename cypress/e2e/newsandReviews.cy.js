import NewsPage from '../support/pages/newsandReviews';

describe('News Article Test', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', (err, runnable) => {
      return false; // Prevent test failure
    });
  });

  it('Verify latest news article date is within the past 10 days', () => {
    NewsPage.visitHomePage();
    NewsPage.clickNewsReviews();
    NewsPage.verifyLatestNewsDate();
  });
});
