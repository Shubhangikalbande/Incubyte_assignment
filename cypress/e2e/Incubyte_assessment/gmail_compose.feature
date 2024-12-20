Feature: Gmail Compose Functionality  
  As a Gmail user  
  I want to compose and send emails  
  So that I can communicate with others effectively  

  Scenario: Successfully send an email  
    Given I am logged into Gmail  
    When I click on the "Compose" button  
    And I enter "Incubyte" in the subject field  
    And I enter "QA test for Incubyte" in the email body  
    And I enter a valid recipient's email address  
    And I click the "Send" button  
    Then the email should be sent successfully  

  Scenario: Attempt to send an email without a recipient  
    Given I am logged into Gmail  
    When I click on the "Compose" button  
    And I enter "Incubyte" in the subject field  
    And I enter "QA test for Incubyte" in the email body  
    And I leave the recipient field empty  
    And I click the "Send" button  
    Then I should see an error message "Please specify at least one recipient"  

  Scenario: Attempt to send an email with an invalid recipient  
    Given I am logged into Gmail  
    When I click on the "Compose" button  
    And I enter "Incubyte" in the subject field  
    And I enter "QA test for Incubyte" in the email body  
    And I enter "invalid-email" as the recipient  
    And I click the "Send" button  
    Then I should see an error message "Invalid email address"  

  Scenario: Compose an email with a blank body  
    Given I am logged into Gmail  
    When I click on the "Compose" button  
    And I enter "Incubyte" in the subject field  
    And I leave the email body blank  
    And I enter a valid recipient's email address  
    And I click the "Send" button  
    Then the email should be sent successfully  

  Scenario: Compose an email with special characters in the subject  
    Given I am logged into Gmail  
    When I click on the "Compose" button  
    And I enter "!@#$%^&*" in the subject field  
    And I enter "QA test for Incubyte" in the email body  
    And I enter a valid recipient's email address  
    And I click the "Send" button  
    Then the email should be sent successfully  
