

const { eq } = require("lodash")


describe('Login to amazon',()=>{
   
    it('login into amazon',()=>{
        cy.visit('https://www.amazon.sg/')

        cy.get('.nav-signin-tt').click()
        cy.get('#ap_email').type('+6592755796')
        cy.get('.a-button-inner > #continue').click()
        cy.get('#ap_password').type('123456')
        cy.get('#signInSubmit').click()

        
      let expName = 'Hello, Sandamali'
      cy.get('#nav-link-accountList-nav-line-1').then((x)=>{

        let actName = x.text()

        //BDD style
        expect(actName).to.equal(expName)

        //TDD style
        assert.equal(actName,expName)

      })
        
    })

   
})