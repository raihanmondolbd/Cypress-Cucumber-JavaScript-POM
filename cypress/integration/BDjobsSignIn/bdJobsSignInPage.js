import { Given, And, Then, When } from "cypress-cucumber-preprocessor/steps";
const locators = require("../Locators/locatorPage");
const data = require("../TestData/data")


Given('I open bd jobs in browser', () => {
    cy.visit(data.bdJobsURL)
})
When('I Click Sighn In Button', () => {
    cy.get(locators.firstSignInButton).click()
    locators.Two
})
And('I click Second Sign in Button', () => {
    cy.get(locators.secondSignInButton).click()
    locators.Two
})
And('I Enter Email', () => {
    cy.get(locators.userNameTxt).type(data.email)
    locators.Two
})
And('I click next button', () => {
    cy.get(locators.firstNextButton).click()
    locators.Two
})
And('I Enter password', () => {
    cy.get(locators.passwordTxt).type(data.password)
    locators.Two
})
And('I click next Button', () => {
    cy.get(locators.secondNextButton).click()
    locators.Two
})
Then('Login Assertion', () => {
    cy.get('.user-name').should('have.text', 'Raihan')
})

Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})