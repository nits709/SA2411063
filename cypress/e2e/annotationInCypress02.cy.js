//before - Runs once before all tests in a describe block
// beforeEach: Runs before every single test in the block
// after: runs once after all test  in a describe block
// afterEach: Runs after every single test in the block


describe("anotation2",()=>{

    before("before block",() =>{
        // runs once before all tests  // all objects initialized, 
        cy.log("setup before all tests")
    });
 
     beforeEach("beforeEach", ()=>{

            // runs before each test
            // lunch application URl
            cy.log("application launch")

      });

      it("test2",()=>{
        cy.log("test2 is calling")
     })


     it("test3",()=>{
        cy.log("test3 is calling")
     })


     it("test4",()=>{
        cy.log("test4 is calling")
     })

     it("test5",()=>{
        cy.log("test5 is calling")
     })

     after("After block",() =>{
        // runs once before all tests  // all objects initialized, 
        cy.log("setup before all tests")
    });
 
     afterEach("AfterEach", ()=>{

            // runs before each test
            // lunch application URl
            cy.log("application launch")

      });
      

})