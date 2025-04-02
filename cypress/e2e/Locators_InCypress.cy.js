


// css format tagname[attribute='value']
//xpath //tagname[@attribute='value']

///<reference types="Cypress" />
describe('Seconds Test of my Cypress Learning', () => {
  it('locators scenario', () => {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    cy.get("input[name='username']").type("nitin@gmail.com")
    
    cy.get("input[name='password']").type("login@123")
    cy.get("input[value='Log In']").click()
    cy.screenshot();
  })

  
  


})