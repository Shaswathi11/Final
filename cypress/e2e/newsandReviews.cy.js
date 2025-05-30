import NewsPage from '../support/pages/NewsPage';

const newsPage = new NewsPage();

describe('News & Reviews Page: URL and Content Verification', () => {
  before(() => {
    newsPage.visit();
  });

  it('Navigates to News & Reviews page and verifies URL and content', () => {
    newsPage.clickNewsLink();
    newsPage.verifyUrlContainsNews();
    newsPage.verifyNewsContent();
  });
});
