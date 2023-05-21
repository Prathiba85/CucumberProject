@Browser
Feature: This feature will be used to test the login functionlity of simplilearn

  Background: 
    Given I have launched the application
    And I have clicked on login link
	@WIP 
  Scenario: Validate the login success
    When I enter username
    And I enter password
    And Click on login
    Then I should land on homepage
@Sanity
  Scenario: Validate the login failure
    When I enter username
    And I enter password
    And Click on login
    Then I should get error message
@Sanity
  Scenario: Validate the login failure using parameters
    When I enter username as "abc@xyz.com"
    And I enter password as "Abc@1234"
    And Click on login
    Then I should get error message as "The email or password you have entered is invalid."
@Regression @Sanity
  Scenario Outline: Validate the login failure using examples
    When I enter username as "<UserName>"
    And I enter password as "<Password>"
    And Click on login
    Then I should get error message as "The email or password you have entered is invalid."

    Examples: 
      | UserName    | Password | Error                                              |
      | pqr@xyz.com | Pqr@1234 | The email or password you have entered is invalid. |
      | xyz@abc.com | XyZ@1234 | The email or password you have entered is invalid. |
