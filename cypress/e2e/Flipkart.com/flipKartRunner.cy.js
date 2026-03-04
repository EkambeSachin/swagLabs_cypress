describe('validate flipkart e-shopping',()=>{
    it('varify search',()=>{
        
       cy.visit('https://www.flipkart.com/', { failOnStatusCode: false })
       cy.title().then((title)=>()=>{
        if(title,includes ('reCAPTCHA')){
            cy.log("blocked by capthcha, skipping assertion")
        }
        else{
            expect(title).to.eq('Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!')

        }
       })
       cy.get('.b3wTlE').click();
       cy.get('.CXZSEo > .lilxh_ > .VCplLH > .Afujtw > [name="q"]').type('Iphone{enter}')
       
       cy.get("div[class='RG5Slk']").each(($el, index, $list) => {
  cy.log(`Value ${index}: ${$el.text()}`)   // prints in Cypress runner
  console.log(`Value ${index}: ${$el.text()}`) // prints in browser console
       })
        cy.get("div[class='RG5Slk']").eq(10).click();

    })
})