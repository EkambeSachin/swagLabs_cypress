class CheckOutInfo{
    fname = "#first-name";
    lname = "#last-name";
    pcode = "#postal-code";
    continue = "#continue";
    enterFirstName(name){
        cy.get(this.fname).type(name)
    }
    enterLastName(last){
        cy.get(this.lname).type(last)
    }
    enterPostalCode(code){
        cy.get(this.pcode).type(code)
    }
    ClickOnContinue(){
        cy.get(this.continue).click()
    }
}
export default CheckOutInfo;