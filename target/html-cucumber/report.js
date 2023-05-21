$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/simplilearn_login.feature");
formatter.feature({
  "name": "This feature will be used to test the login functionlity of simplilearn",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Browser"
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username",
  "keyword": "When "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_usernae()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_should_get_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure using parameters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"abc@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Abc@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Validate the login failure using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I enter password as \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.step({
  "name": "I should get error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "Error"
      ]
    },
    {
      "cells": [
        "pqr@xyz.com",
        "Pqr@1234",
        "The email or password you have entered is invalid."
      ]
    },
    {
      "cells": [
        "xyz@abc.com",
        "XyZ@1234",
        "The email or password you have entered is invalid."
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"pqr@xyz.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"Pqr@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I have clicked on login link",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_have_clicked_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Validate the login failure using examples",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Browser"
    },
    {
      "name": "@Regression"
    },
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"xyz@abc.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_username_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter password as \"XyZ@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.click_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});