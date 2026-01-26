describe('Página de Cadastro', () => {
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
    cy.get('[data-test="input-name"]').type('Dayane');
    cy.get('[data-test="input-email"]').type('soadayane34@outlook.com.br');
    cy.get('[data-test="input-password"]').type('Day@12');
    cy.get('[data-test="input-confirm-password"]').type('Day@12');
    cy.get('[data-test="submit-button"]').click();
  })
})