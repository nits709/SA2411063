describe("dropdon scenarios in Cypress",function(){

    it("static DD - single value at a time",function(){

        cy.visit("https://omayo.blogspot.com/")
        //cy.url.contains('omayo');
        cy.wait(4000);
        cy.get('#drop1').select("jkl");
        cy.wait(4000)
        cy.get('#drop1').select(2)


    })

    it("MultiSelectDD - multiple values at a time",function(){

        cy.visit("https://omayo.blogspot.com/")
       
        cy.wait(4000);
        cy.get('#multiselect1').select("audix"); //selects once.
        cy.wait(2000)
        cy.get('#multiselect1').select(['volvox','swiftx']) // would select 2value at time
        cy.wait(2000)

        cy.get('#multiselect1').select("Hyundaix")
        


    })
})