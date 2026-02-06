describe('Api Adopet', () => {
  const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwYjcyZDA4OS1mZWMyLTQ3NWQtYmZjNC1iMDUxMzg1NzQ1NzUiLCJhZG9wdGVyTmFtZSI6IkRheWFuZSIsImlhdCI6MTc3MDA2NTQ4NSwiZXhwIjoxNzcwMzI0Njg1fQ.K2zIY51sBhwaB3BkMLVvUYMga4t2KN-yHVhc3vYIh5A`
    
          it('Nome do perfil', () => {
              cy.request({
                  method: 'GET' ,
                  url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/0b72d089-fec2-475d-bfc4-b05138574575',
                  headers: { authorization }
                 
              }).then((res) => {
                  expect(res.status).to.be.equal(200)
                  expect(res.body).is.not.empty
                  expect(res.body).to.have.property('perfil')
              expect(res.body.perfil.nome).to.be.equal('Dayane')
                               
              })
          })
      })