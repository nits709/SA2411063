
    describe("automatecheckboxradiobutton",()=>{

        it("single checboxes",()=>{
                cy.visit("https://omayo.blogspot.com/");
                cy.get('#checkbox1').should('be.checked') // true
                cy.get("#checkbox1").click(); //unchecked  //single

        })


        //[type='checkbox']  - this is common attribute amongs all checkboxes
        it("value checboxes",()=>{
            cy.visit("https://omayo.blogspot.com/");
            cy.wait(2000)
            //cy.get("[type='checkbox']").scrollIntoView();
            cy.wait(2000)
            cy.get("#sidebar-right-1 [type='checkbox']").check(['Pen','Laptop','Bag','blue'])

            cy.wait(2000);
            cy.get("#sidebar-right-1 [type='checkbox']").click({multiple:true}) // would click in single go
    })
    })
