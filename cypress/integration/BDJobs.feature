Feature: BDJobs Main Page

  Background: BDJOBS Job Serach
    Given I open BDJobs page
    And  I Type QA Engineer


  @focus
  Scenario: Opening BDJobs Government Jobs
    Then I Select Organization Type Government
    Then I click Search Button

  @focus
  Scenario: Opening BDJobs Semi Government Jobs
    Then I Select Organization Type Semi Government
    Then I click Search Button

  @skip
  Scenario: Opening BDJobs NGO Jobs
    Then I Select Organization Type NGO
    Then I click Search Button

  @skip
  Scenario: Opening BDJobs Private Firm Company Jobs
    Then I Select Organization Type Private Firm Company
    Then I click Search Button

  @skip
  Scenario: Opening BDJobs Private International Agencies
    Then I Select Organization Type International Agencies
    Then I click Search Button

  @skip
  Scenario: Opening BDJobs Others Jobs
    Then I Select Organization Type Others
    Then I click Search Button


