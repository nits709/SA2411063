
// describe() is nothing but as a test suite (where testcase belongs to same group can resides 
// | 1 argument can have name of test and 2nd is a callback fun)

// it() function is nothing but act as @test function of testng.
// visit func is nothing get function in selenium that help user to lunch the application.
//e2e - where test suites/tc's resides
// fixtures - where testdata resides
// commands - where custom functions can resides.
// e2e - create reference of your custom functions
// node module - libraries of cypress projects.
// cypress.config.js - this file holds cypress setting/ configurations.
// package-lock.json - pom.xml (heart of cypress )
// npx cypress run - this commond would run cypress test from terminal in headless mode.
// npx cypress run --headed -browser/-b chrome



///<reference types="Cypress" />
describe('FirstScripts of my Cypress Learning', () => {
  it('lunch Application URl', () => {
    cy.visit('https://example.cypress.io')
  })

  
  it("validation google title",() =>{
    cy.visit("https://google.co.in")  // this command would lunch browser and navigate URl
    cy.title().should('eq',"Google");  // should commands can use for assertion in cypress.
    cy.screenshot("screenshotgooglepage");

  })


})