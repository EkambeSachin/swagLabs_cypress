class CheckOut{
    finish = "#finish";
    clickOnFinish(){
        cy.get(this.finish).click()
    }
}
export default CheckOut;