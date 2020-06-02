const rootSiteUrl = Cypress.config().baseUrl;

context('Actions', () => {
  beforeEach(() => {
    cy.visit(rootSiteUrl);
  });

  it('focus search input', () => {
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
