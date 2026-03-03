class Product{

    Logo = ".app_logo ";
    ProductName = ".inventory_item_name ";
    addProduct= "#add-to-cart-sauce-labs-bike-light";
    RemoveText = "button[data-test='remove-sauce-labs-bike-light']";
    ClickCart = "a[data-test='shopping-cart-link']";
    varifyLogo(){
     cy.get(this.Logo).should('be.visible')
    }
    validateProducts(){
        cy.get(this.ProductName).should('be.visible')
        .and('have.length', 6)
    }
    selectProduct(){
        cy.get(this.addProduct)
        .contains('Add to cart')
        .click()
        //varify after click on add button should have text 'remove'
        cy.get(this.RemoveText).should('contain.text','Remove')
    }
    clickOnCart(){
        cy.get(this.ClickCart).click()
    }
}
export default Product; 