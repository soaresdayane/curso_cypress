describe('Página de Cadastro', () => {
    beforeEach(() =>{
        cy.visit('https://adopet-frontend-iota.vercel.app/');
        cy.get('[data-test="register-button"]').click();
    }) 
  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {
    cy.cadastrar('Dayane', 'soaresdayane34@gmail.com', 'Day@12',)
  })
})