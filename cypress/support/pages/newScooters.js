class newScooters{
    visit(){
        cy.visit('https://www.zigwheels.com/');
        cy.viewport(1224, 768);
    }
    navigation(){
        cy.get('#headerNewVNavWrap nav ul li a[title="Scooters"]').click();
        cy.get('a').contains('Popular Scooters').click();
    
        cy.url().should('include','best-scooters');
    }
    firstScooterReview(){
        cy.get('.r-wn.w').first().click();
        cy.get('.m-15').contains('User Reviews');
        cy.get('.ur-mct.rcat').then(text=>{
        cy.log(text.text());
        });
    }
}
export default new newScooters;