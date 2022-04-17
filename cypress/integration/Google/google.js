import { Given, And, Then } from "cypress-cucumber-preprocessor/steps";
const locators = require("../Locators/locatorPage");
const data = require("../TestData/data")

// const url = 'https://google.com'
Given('I open Google page', () => {
    cy.visit(data.googleURL)
    locators.Two
})

And('I see Google in the title', () => {
    cy.get(locators.googleSearchTxtBox).type(`${data.TypeSubject}{enter}`)
    locators.Two
})

Then('I Click on gmail', () => {
    cy.get(locators.gmailButton).click();
    locators.Two
})