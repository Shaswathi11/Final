class NewsPage {
  visit() {
    cy.visit('/');
    cy.viewport(1224, 768);
  }
  
  clickNewsReviews() {
    cy.get('.c-p').contains('NEWS & REVIEWS').click({ force: true });
  }

  verifyUrlContainsNews() {
    cy.url().should('include', '/news');
  }

  verifyNewsContent() {
    cy.contains('News').should('exist');
  }

  verifyLatestNewsDate() {
    cy.get('#latest').find('.zw-sl-hover').first().then(($ele) => {
      let dateText = $ele.find('.fnt-12 .clr').text();
      let articleDate = new Date(dateText);
      let currentDate = new Date();
      let diffInDays = (currentDate - articleDate) / (1000 * 60 * 60 * 24);
      cy.log(`Article Date: ${dateText}`);
      expect(diffInDays).to.be.lessThan(10);
    });
  }
}

export default new NewsPage();
