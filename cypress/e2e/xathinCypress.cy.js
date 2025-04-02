
// inorder to work with xpath incypress execute the below steps.
//npm install -D cypress-xpath
//Add xpath reference to your support/command.js /// <reference types="cypress-xpath" />
//require('cypress-xpath') | cypress/support/index.js
// //tagname[@attribute='value']
// external plugin to slowdown the cypressexecution speed  -> npm i -D cypress-slow-down


import { slowCypressDown } from "cypress-slow-down";

//slowCypressDown(false);// disabled
slowCypressDown(4000);// disabled

describe("scriptsWith xpath",()=>{
    it("accessLocatorwithxpath",()=>{
            cy.visit("https://google.co.in");
            cy.xpath("//textarea[@name='q']").type("cypress automation");
            cy.xpath("//a[@aria-label='Gmail ']").click();
    })
})