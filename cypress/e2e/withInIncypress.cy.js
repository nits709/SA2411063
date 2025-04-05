
describe("withinFunction In Cypress", function(){
    // it("get element by using normal way function", function(){

    //     cy.visit("https://www.amazon.in/.")
    //     cy.wait(2000);

    //     cy.get("[class='nav-search-field ']  [id='twotabsearchtextbox']").type("Apple")
    // })


    it("get element by using within function", function(){

        cy.visit("https://www.amazon.in/.")
        cy.wait(2000);

        cy.get("[class='nav-search-field ']").within(()=>{

            cy.get("[id='twotabsearchtextbox']").type("Apple")
        })


    })
})