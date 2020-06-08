const rootSiteUrl = Cypress.config().baseUrl;

context('Main page', () => {
  beforeEach(() => {
    cy.visit(rootSiteUrl);
  });

  it('check logo links follow correct page', () => {
    cy.get('.logo .site-title').should('be.visible')
      .click()
      .url()
      .should('include', rootSiteUrl)
      .get('.footer .site-title')
      .scrollIntoView()
      .should('be.visible')
      .click()
      .url()
      .should('include', rootSiteUrl);
  });
});
