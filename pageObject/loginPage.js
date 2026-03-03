class Login{

    Username = "#user-name";
    Password = "#password";
    LoginBtn = "#login-button";


    //varify page title
    varifyTitle(){
        cy.title().should('eq', 'Swag Labs')
    }
    enteruserName(uname){
        cy.get(this.Username,{timeout:1000}).type(uname)
    }
    enterPassword(pass){
        cy.get(this.Password).type(pass)
    }
    clickOnLogin(){
        cy.get(this.LoginBtn,{timeout:1000}).should('have.value','Login')
        .click()
    }
}
export default Login;

        
        
        
        