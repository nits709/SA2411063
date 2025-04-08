


// find function can only used with get
describe("find function in cypress", ()=>{

    it("testcase", ()=>{

        cy.visit("https://www.quikr.com/")
        cy.wait(2000);
       // cy.get('parent').find('child')
       // cy.find()  // invalid syntax to call find function

       cy.get('.right-col').find("[class='city-list clearfix'] li a").should('have.length',16)
       cy.get("[class='city-list clearfix'] li a").should('have.length',16) // search would starts from the root element
       cy.find("[class='city-list clearfix'] li a").should('have.length',16)
    })
})