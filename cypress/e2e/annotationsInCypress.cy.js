
describe.only("testsuite1 Cypress", function(){
     it.skip("test1",()=>{
        cy.log("test1 is calling")
     })


     it.only("test2",()=>{
        cy.log("test2 is calling")
     })


     it("test3",()=>{
        cy.log("test3 is calling")
     })


     it.only("test4",()=>{
        cy.log("test4 is calling")
     })

     it("test5",()=>{
        cy.log("test5 is calling")
     })
})


describe.skip("testsuite 2", function(){
    it.skip("test1",()=>{
       cy.log("test1 is calling")
    })


    it.only("test2",()=>{
       cy.log("test2 is calling")
    })


    it("test3",()=>{
       cy.log("test3 is calling")
    })


    it.only("test4",()=>{
       cy.log("test4 is calling")
    })

    it("test5",()=>{
       cy.log("test5 is calling")
    })
})