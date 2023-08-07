/// <reference types="cypress" />

Cypress.Commands.add('switchToSecondTab', () => {
  const geofenceNoLocUrl = "/settings/geofences/id/30708";

  cy.window().then(win => {
    if (win.parent) {
      // Switch to the second tab
      cy.wrap(win.parent).invoke('open', '', '_self');
    }
  });
/*
  cy.window().then(win => {
    cy.stub(win, "open").as("windowOpen");
  });

  cy.contains("button", "View Details").click();

  cy.get("@windowOpen").should("be.calledWith", geofenceNoLocUrl);

  cy.window().then(win => {
    win.location.href = geofenceNoLocUrl;
  });*/
});
context('Connectors', () => {
  beforeEach(() => {
    cy.visit('cypress/index.html')
  })

  it.only('Tab Switch', () => {


  })
})
