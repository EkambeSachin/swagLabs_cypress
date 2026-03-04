import { before } from 'lodash'
import Login from '../../pageObject/loginPage'
import Product from '../../pageObject/productPage'
import AddtoCart from '../../pageObject/AddToCartPage'
import CheckOutInfo from '../../pageObject/information'
import CheckOut from '../../pageObject/CheckoutPage'
const lg = new Login()
const pg = new Product()
const ch = new AddtoCart()
const ci = new CheckOutInfo()
const fi = new CheckOut()

beforeEach(()=>{
     cy.visit("https://www.saucedemo.com/")
})
describe('validate login functionality', () =>{
    it('varify login/signup',()=>{
       
        cy.fixture('swagLabs').then((data)=>{
        // use loginPage object to verify page title
        lg.varifyTitle()
        cy.wait(1000)
        lg.enteruserName(data.number,{timeout:1000})
        cy.wait(1000)
        lg.enterPassword(data.password,{timeout:1000})
        lg.clickOnLogin()
       
        //product
       
        pg.varifyLogo()
        pg.validateProducts()
        cy.wait(1000)
        pg.selectProduct()
        cy.wait(1000)
        pg.clickOnCart()
        

        //add to cart & checkout
       ch.varifyCheckoutLogo()
       cy.wait(1000)
       ch.clickOnCheckout()

       //provide Information for delivery
        
       ci.enterFirstName(data.FirstName)
       cy.wait(1000)
       ci.enterLastName(data.LastName)
       cy.wait(1000)
       ci.enterPostalCode(data.PostalCode)
       
       ci.ClickOnContinue()
       cy.wait(1000)
       //finish page
       fi.clickOnFinish()
       
       
    })
})   
})
    