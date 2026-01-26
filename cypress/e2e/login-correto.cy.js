describe('Página de Login', () => {
    beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="login-button"]').click();
    });
  it('Deve preencher os campos de login corretamente e autenticar o usuário na página', () => {
    cy.get('[data-test="input-loginEmail"]').type('soadayane34@outlook.com.br');
    cy.get('[data-test="input-loginPassword"]').type('Day@12');
    cy.get('[data-test="submit-button"]').click();
  })
})


