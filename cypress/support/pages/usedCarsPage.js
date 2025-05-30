class UsedCarsPage {
    visit() {
        cy.visit('/used-car/Dindigul');
    }

    typeCity(city) {
        cy.get('#usedCarCity').clear().type(city);
    }

    selectCity(city) {
        cy.contains('.ui-menu-item > a', city).click();
    }

    verifyAutoSuggestionVisible(city) {
        cy.contains('.ui-menu-item > a', city).should('be.visible');
    }

    verifyAutoSuggestionNotVisible(city) {
        cy.contains('.ui-menu-item > a', city,{timeout:10000}).should('not.be.visible');
    }

    verifyUsedCarsPageTitle(expectedTitle) {
        cy.get('#usedcarttlID', {timeout:10000}).should('have.text', expectedTitle);
    }
}

export default UsedCarsPage;
