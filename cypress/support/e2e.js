// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.on('uncaught:exception', (err, runnable) => {
    // Check if the error is related to getInstalledRelatedApps and ignore it.
    if (err.message.includes('getInstalledRelatedApps')) {
      return false; // Prevents Cypress from failing the test for this exception.
    }
    if (err.message && err.message.includes('addLangCodeToRelativeUrl')) {
      // returning false here prevents Cypress from failing the test
      return false;
    }
    return false;
  });