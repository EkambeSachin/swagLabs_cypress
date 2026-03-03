class AddtoCart{
    cartLogo=".app_logo";
    checkOutBtn="#checkout";
    varifyCheckoutLogo(){
        cy.get(this.cartLogo).should('be.visible')
    }

    clickOnCheckout(){
        cy.get(this.checkOutBtn).should('contain.text','Checkout').click()
    }
}
export default AddtoCart;