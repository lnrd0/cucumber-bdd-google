Feature: GitLab Page

  I want to open a page
  
  @focus
  Scenario: Opening a GitLab pipeline page
    Given I open GitLab page
    Then I see "Michelle / case-devsecops" in the title