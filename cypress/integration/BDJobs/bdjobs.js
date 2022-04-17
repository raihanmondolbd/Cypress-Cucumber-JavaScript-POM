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

Then('I Select Organization Type Government', () => {
    cy.get(locators.organizationType).select("1")
    locators.Two
})

Then('I Select Organization Type Semi Government', () => {
    cy.get(locators.organizationType).select("2")
    locators.Two
})

Then('I Select Organization Type NGO', () => {
    cy.get(locators.organizationType).select("3")
    locators.Two
})

Then('I Select Organization Type Private Firm Company', () => {
    cy.get(locators.organizationType).select("4")
    locators.Two
})

Then('I Select Organization Type International Agencies', () => {
    cy.get(locators.organizationType).select("5")
    locators.Two
})

Then('I Select Organization Type Others', () => {
    cy.get(locators.organizationType).select("6")
    locators.Two
})

Then('I click Search Button', () => {
    cy.get(locators.searchButton).click()
    locators.Two
})

Cypress.on('uncaught:exception', (err, runnable) => {

    return false
})