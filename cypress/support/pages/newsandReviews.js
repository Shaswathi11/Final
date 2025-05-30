class NewsPage {
    visitHomePage() {
      cy.visit('https://www.zigwheels.com');
    }
  
    clickNewsReviews() {
      cy.get('.c-p').contains('NEWS & REVIEWS').click({ force: true });
    }
  
    verifyLatestNewsDate() {
      cy.get('#latest').find('.zw-sl-hover').first().then(ele => {
        let d = ele.find('.fnt-12 .clr').text();
        let articleDate = new Date(d);
        let currentDate = new Date();
        let diffInDays = (currentDate - articleDate) / (1000 * 60 * 60 * 24);
        
        cy.log(`Article Date: ${d}`);
        expect(diffInDays).to.be.lessThan(10);
      });
    }
  }
  
  export default new NewsPage();
  