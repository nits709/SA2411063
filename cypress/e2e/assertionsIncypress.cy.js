
describe("assertiontestSuite",()=>{
    
    // it("validate page title",()=>{
    //     cy.visit("https://google.co.in");
    //     cy.title().should('eq',"Google");
    //     cy.wait(3000);
    //     cy.get("[name='q']").should('have.attr','id');
    //     cy.get("[name='q']").should('have.class','gLFyf');
    // })


    // it("enabled,disabled,elements",()=>{
    //     cy.visit("https://bootswatch.com/default/");
    //     cy.get("#flexCheckDefault").scrollIntoView();
    //     cy.get("#flexCheckDefault").should('be.enabled') //true
    //    // cy.get("#flexCheckDefault").should('be.disabled') // false
    // //    cy.get('#flexCheckChecked').should('be.checked') //true // checkboxes, radiobutton
    // //     cy.get("flexCheckDefault").should('be.checked') //false
    //     cy.get('#optionsRadios3').should('be.disabled')
    // })

    it("validation all links size",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        cy.get("[value='Log In']").should('be.visible')  //true
        cy.get(".leftmenu li a").should('have.length',6); // ture
    })



})