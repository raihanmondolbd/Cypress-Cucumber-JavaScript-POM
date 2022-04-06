Feature: BDJobs Main Page

  I want to open BDJobs Website
  
  @focus
  Scenario: Opening BDJobs Home Page
    Given I open BDJobs page
    And  I Type QA Engineer
    Then I Select Organization Type
    Then I click Search Button
