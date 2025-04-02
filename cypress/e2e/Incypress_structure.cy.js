


// describe and context both function can use to create a testsuite.
// it and specfy
// describe - its like a testsuite in cypress - collection of multiple testcases.
// it - it function in cypress which acts as test and use to create testcases in cypress.


describe("testsuite name", ()=>{

    it("testcase name",function(){
        cy.log(" testcase 1 is calling.....")
        //open visit the url
        // type , write, click, validation
    })

    it("testcase 2", ()=>{
        cy.log("testcases 2 is calling");
    })



})