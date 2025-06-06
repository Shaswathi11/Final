import newsPage from '../support/pages/NewsAndReviews';

describe('News & Reviews Page: URL and Content Verification', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('Navigates to News & Reviews page and verifies URL and content',{ tags: ['smoke'] },  () => {
    newsPage.visit();
    newsPage.clickNewsReviews();
    newsPage.verifyUrlContainsNews();
    newsPage.verifyNewsContent();
  });
});

describe('News Article Test', () => {
  beforeEach(() => {
    Cypress.on('uncaught:exception', () => false);
  });

  it('Verify latest news article date is within the past 10 days', () => {
    newsPage.visit();
    newsPage.clickNewsReviews();
    newsPage.verifyLatestNewsDate();
  });
});
