


describe('Seconds Test of my Cypress Learning', () => {
    it('locators scenario', () => {
      cy.visit('https://parabank.parasoft.com/parabank/index.htm')
      cy.fixture('testData').then((data)=>{

        cy.get("input[name='username']").screenshot();
        cy.get("input[name='username']").type(data.un);

      
        cy.get("input[name='password']").type(data.pwd).screenshot("PWD");
        cy.get("input[value='Log In']").click().screenshot("Button");
        cy.screenshot("LoginPage");
      })
     
    })

})