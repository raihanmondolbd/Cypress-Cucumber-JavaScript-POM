# Cypress-Cucumber-JavaScript-POM

## Configure Cypress Command

### 1.npm init -y

### 2.npm install cypress

### 3.npx cypress -v

### 4.npx cypress open

# Configure Mocha and Mochaawesome module

### 1.npm install --save-dev mocha

### 2.npm install --save-dev mochawesome

# Intall cypress-cucumber-preprocessor

### 1.npm install --save-dev cypress-cucumber-preprocessor

# Configuration cypress-cucumber-preprocessor

# Add it to your plugins:

### cypress/plugins/index.js

### const cucumber = require('cypress-cucumber-preprocessor').default
### module.exports = (on, config) => {
### on('file:preprocessor', cucumber())
### }

# Add support for feature files to your Cypress configuration

### cypress.json
### {
### "testFiles": "**/*.feature"
### }

# Configuration
# Please make use of cosmiconfig to create a configuration for the plugin, for example, by adding this section to your package.json:

### "cypress-cucumber-preprocessor": {
### "nonGlobalStepDefinitions": true
### }

# cypress-allure-plugin
### 1. npm i -D @shelex/cypress-allure-plugin

### Setup Connect plugin in cypress/plugins/index.js. Take into account that Cypress generate plugins file with module.exports on the first initialization but you should have only one export section. In order to add Allure writer task just replace it or add writer task somewhere before returning config:
### as only plugin:
# 1.const allureWriter = require('@shelex/cypress-allure-plugin/writer');
### // import allureWriter from "@shelex/cypress-allure-plugin/writer";

### module.exports = (on, config) => {
### allureWriter(on, config); return config;
### };

# if you have webpack or other preprocessors please set allure writer before returning "config":
### module.exports = (on, config) => {
### on('file:preprocessor', webpackPreprocessor); allureWriter(on, config); return config;
### }; Register commands in cypress/support/index.js file:
### with import:
# 1.import '@shelex/cypress-allure-plugin';
### for IntelliSense (autocompletion) support in your IDE add on top of your cypress/plugins/index.js file:

# Allure run command

### npx cypress open --env allure=true

# for run headed mode: 
### npx cypress run --headed --browser chrome --env allure=true

# for run headless mode: 
### npx cypress run --headless --browser chrome --env allure=true
# To see allure report just command:
### allure serve

# Run Cypress with annotation Commands
### npx cypress-tags run -e TAGS ='@Your-annotation'
### ./node_modules/.bin/cypress-tags run -e TAGS='@feature-tag'

# Run Cypress allure report genaration with annotation Commands
### npx cypress-tags run -e TAGS ='@Your-annotation',allure=true
### ./node_modules/.bin/cypress-tags run -e TAGS='@feature-tag',allure=true
### npx cypress run --env "TAGS=@smoke","allure=true"

# Parallel Run Added with Allure report Genaration

### npm i cypress-parallel
# Added two this in package.json
### "scripts": {
### "cy:run": "cypress run --env allure=true --browser chrome --headed",
### "cy:parallel": "cypress-parallel -s cy:run -t 4 -d "cypress/integration/*.feature" -a false"
### }
# cypress-multi-reporters install for parallel run

### npm install cypress-multi-reporters --save-dev

# Parallel run command

### npm run cy:parallel

# Referance link in parallel run
<href>https://github.com/tnicola/cypress-parallel
  
<href>https://www.npmjs.com/package/cypress-multi-reporters
