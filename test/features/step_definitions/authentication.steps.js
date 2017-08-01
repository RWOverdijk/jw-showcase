/**
 * Copyright 2017 Longtail Ad Solutions Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 **/

/* jshint esversion: 6 */
/* globals require, browser, angular, expect, $ */

const {defineSupportCode} = require('cucumber');

defineSupportCode(function ({Given, When, Then}) {
    Given('the login modal is visible', function () {
        return expect($('.jw-popup-login').isDisplayed()).to.eventually.equal(true);
    });

    Then('the userbadge should not be visible', function () {
        return expect($$('.jw-user-badge').count()).to.eventually.equal(0);
    });

    Then('the userbadge should be visible', function () {
        return expect($$('.jw-user-badge').count()).to.eventually.equal(1);
    });

    When('I click on the userbadge', function () {
        return $('.jw-user-badge').click();
    });

    Then('the login modal should be visible', function () {
        return expect($('.jw-popup-login').isDisplayed()).to.eventually.equal(true);
    });

    Then('the modal title should be {stringInDoubleQuotes}', function (title) {
        return expect($('.jw-popup-title').getText()).to.eventually.equal(title);
    });

    Then('a {stringInDoubleQuotes} provider button is present', function (providerName) {
        return expect($('.jw-login-social-buttons .jw-button-' + providerName).isDisplayed()).to.eventually.equal(true);
    });

    Then('a {stringInDoubleQuotes} input field is present', function (inputFieldName) {
        return expect($('input.jw-form-control#' + inputFieldName).isDisplayed()).to.eventually.equal(true);
    });

    Then('a {stringInDoubleQuotes} button is present', function (buttonName) {
        return expect($('.jw-button-' + buttonName).isDisplayed()).to.eventually.equal(true);
    });

    When('I click on the {stringInDoubleQuotes} button', function (buttonName) {
        return $('.jw-button-' + buttonName).click();
    });

    Then('the signup modal should be visible', function () {
        return expect($('.jw-popup-signup').isDisplayed()).to.eventually.equal(true);
    });

    Given('the signup modal is visible', function () {
        return expect($('.jw-popup-signup').isDisplayed()).to.eventually.equal(true);
    });

    Then('a {stringInDoubleQuotes} checkbox is present', function (checkboxName) {
        return expect($('.jw-checkbox-' + checkboxName).isDisplayed()).to.eventually.equal(true);
    });

    When('I focus on the {stringInDoubleQuotes} input', function (inputFieldName) {
        return $('input.jw-form-control#' + inputFieldName).click();
    });

    When('I enter {stringInDoubleQuotes} in the {stringInDoubleQuotes} input', function (text, inputFieldName) {
        return $('input.jw-form-control#' + inputFieldName).sendKeys(text);
    });

    When('I remove everything in the {stringInDoubleQuotes} input', function (inputFieldName) {
        return $('input.jw-form-control#' + inputFieldName).clear();
    });

    Then('a warning should be visible with the text {stringInDoubleQuotes}', function (text) {
        return expect($$('.jw-form-group-warnings .jw-form-group-warning').get(0).getText()).to.eventually.equal(text);
    });

    When('I click on the terms checkbox', function () {
        return $('.jw-checkbox-terms').click();
    });

    Then('The {stringInDoubleQuotes} button should be not disabled', function (buttonName) {
        return expect($('.jw-button-' + buttonName).isEnabled()).to.eventually.equal(true);
    });

    When('I click the signup button', function () {
        return $('.jw-button-signup').click();
    });

    Then('an alert should be shown', function () {
        return expect($('.jw-popup-alert').isDisplayed()).to.eventually.equal(true);
    });

    Then('the text in the alert should be {stringInDoubleQuotes}', function (text) {
        return expect($('.jw-popup-alert .jw-popup-title').getText()).to.eventually.equal(text);
    });

    Then('click on the alert confirmation button', function () {
        return $('.jw-popup-alert .jw-button-primary').click();
    });

    When('I click the login button', function () {
        return $('.jw-button-login').click();
    });

    Then('the userbadge dropdown should show', function () {
        return expect($('.jw-user-info-dropdown').isDisplayed()).to.eventually.equal(true);
    });

    Then('the userbadge dropdown name is {stringInDoubleQuotes}', function (name) {
        return expect($('.jw-user-info-dropdown .jw-user-info-dropdown-name').getText()).to.eventually.equal(name);
    });

    Then('the userbadge dropdown email is {stringInDoubleQuotes}', function (email) {

        return expect($('.jw-user-info-dropdown .jw-user-info-dropdown-email').getText()).to.eventually.equal(email);
    });

    Then('the userbadge has a account info button', function () {
        return expect($('.jw-user-info-dropdown .jw-user-info-dropdown-info').isDisplayed()).to.eventually.equal(true);
    });

    Then('the userbadge has a logout button', function () {
        return expect($('.jw-user-info-dropdown .jw-user-info-dropdown-log-out').isDisplayed()).to.eventually.equal(true);
    });

    When('I click the account-info button', function () {
        return $('.jw-user-info-dropdown .jw-user-info-dropdown-info').click();
    });

    Then('the account info modal should be visible', function () {
        return expect($('.jw-popup-account-info').isDisplayed()).to.eventually.equal(true);
    });

    Then('an error with {stringInDoubleQuotes}', function (errorText) {
        return expect($('.jw-errors-row').getText()).to.eventually.equal(errorText);
    });
});
