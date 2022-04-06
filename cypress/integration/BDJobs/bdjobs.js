import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const locators = require("../Locators/locatorPage");
const data = require("../TestData/data")



Given('I open BDJobs page', () => {
    cy.visit(data.bdJobsURL);
})

And('I Type QA Engineer', () => {
    cy.get(locators.searchJobtxtBox).type(data.searchJob)
    locators.Two
})

Then('I Select Organization Type', () => {
    cy.get(locators.organizationType).select("1")
    locators.Two
})
Then('I click Search Button', () => {
    cy.get(locators.searchButton).click()
    locators.Two
})

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})