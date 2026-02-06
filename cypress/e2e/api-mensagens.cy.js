describe('API Adopet', () => {
  it('Mensagens da API', () => {
    cy.request({
      method: 'GET',
      url: 'https://adopet-api-i8qu.onrender.com/mensagem/0b72d089-fec2-475d-bfc4-b05138574575',
      headers:{
      authorization: Cypress.env('authorization')
    }
    }).then((res) => {
      expect(res.status).to.be.equal(200)
      expect(res.body).to.not.be.empty
      expect(res.body).to.have.property('msg')
    })
  })
})

