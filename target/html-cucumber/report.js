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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d118.0.5993.118)\nBuild info: version: \u00274.14.1\u0027, revision: \u002703f8ede370\u0027\nSystem info: os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.16\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [80d1bbc6f1ec8d5ba543586c6aa6ada4, findElement {using\u003dlink text, value\u003dLog in}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 118.0.5993.118, chrome: {chromedriverVersion: 118.0.5993.70 (e52f33f30b91..., userDataDir: C:\\Users\\sanpr\\AppData\\Loca...}, fedcm:accounts: true, goog:chromeOptions: {debuggerAddress: localhost:58807}, networkConnectionEnabled: false, pageLoadStrategy: normal, platformName: windows, proxy: Proxy(), se:cdp: ws://localhost:58807/devtoo..., se:cdpVersion: 118.0.5993.118, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 80d1bbc6f1ec8d5ba543586c6aa6ada4\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:52)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:191)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:200)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:175)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:602)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:165)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:59)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:359)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:353)\r\n\tat step_definition.simplilearn_loginstepdefinition.i_have_clicked_on_login_link(simplilearn_loginstepdefinition.java:30)\r\n\tat ✽.I have clicked on login link(file:///C:/Users/sanpr/exlipsefolder2/simplilearn_cucumber/src/test/java/features/simplilearn_login.feature:6)\r\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.step({
  "name": "I enter password as \"XyZ@1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_enter_password_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on login",
  "keyword": "And "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.click_on_login()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should get error message as \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definition.simplilearn_loginstepdefinition.i_should_get_error_message_as(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});