Feature: Google Main Page

  I want to open a search engine

  @focus
  Scenario: Opening a search engine page
    Given I open Google page
    And  I see Google in the title
  # Then I Click on gmail

  @focus
  Scenario: Opening Gmail page
    Given I open Google page
    Then I Click on gmail
