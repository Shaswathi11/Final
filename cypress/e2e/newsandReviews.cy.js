import newsPage from '../support/pages/newsandReviews';

describe('News & Reviews Page: URL and Content Verification', () => {
  before(() => {
    newsPage.visit();
  });

  it('Navigates to News & Reviews page and verifies URL and content', () => {
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
