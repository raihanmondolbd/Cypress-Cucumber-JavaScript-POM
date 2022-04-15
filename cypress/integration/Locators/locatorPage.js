class Locators {

    // bdjobs locators
    searchJobtxtBox = '#txtKeyword'
    organizationType = '#qOT'
    searchButton = 'form > .btn'

    // BDJobs SignIn Page Locators
    firstSignInButton = '[href=""]'
    secondSignInButton = '.hidden-xs > .dropdown-menu > .login-form-n > .cart-mbdj > .cart-mbdj-r > .btn-wraper > .btn'
    userNameTxt = '#TXTUSERNAME'
    firstNextButton = '.col-sm-4 > .btn'
    passwordTxt = '#TXTPASS'
    secondNextButton = '.checkbox-link > :nth-child(2) > .btn'


    // google page locators
    googleSearchTxtBox = '.gLFyf'
    gmailButton = ':nth-child(1) > .gb_d'


    get Two() {
        cy.wait(2000)
    }

}
module.exports = new Locators();