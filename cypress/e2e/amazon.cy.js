
require('cypress-xpath')
const { eq } = require("lodash")


describe('Order books from amazon',()=>{
    before(() => {
        cy.visit('https://www.amazon.sg/')
    })

    it('verify home page title',()=>{
        const pageTitle = 'Amazon.sg: Shop Online for Electronics, Computers, Books, Toys, DVDs, Baby, Grocery, & more'
        cy.title().should(eq,pageTitle)
        
    })

    it('select book category from dropdown',()=>{
      cy.get('#twotabsearchtextbox')
      .click()
      .get('#searchDropdownBox')
      .select('Books', {force: true})
     

    })

    it('select book in home page',()=>{
      
      cy.get('#twotabsearchtextbox').should('exist')
      const book = 'Atomic habits'
      cy.get('#twotabsearchtextbox').type(`${book}{enter}`).should('have.value','Atomic habits')

      cy.xpath("//*[contains(@aria-labelledby,'p_36-title')]/li").each(price=>{
        expect(price.text()).to.include('S$')
    })

        cy.xpath("//*[contains(text(),'Atomic Habits: The life-changing million copy bestseller')]").first().click()
        cy.wait(4000)
     
      


        // const books = ['the 4 hour work week','Atomic habits']
        // books.forEach(book => {
        //     cy.get('#twotabsearchtextbox').clear()
        //     cy.get('#twotabsearchtextbox').type(`${book}{enter}`)
        // })
  
    })

    it('Hard cover book add into cart',()=>{
       cy.get('#a-autoid-2-announce').click()
       var bookPriceInSearchPage = cy.get('.a-color-base > .a-size-base').invoke('text')

       cy.get('#add-to-cart-button').click()
       console.log(cy.get('#sw-subtotal').invoke('text'))
       cy.get('#sw-subtotal').invoke('text').should(eq,bookPriceInSearchPage)

    })
})