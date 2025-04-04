describe("Assertions",()=>{
    it("re-registerationscenario",()=>{

            cy.visit("https://parabank.parasoft.com/parabank/register.htm")
            cy.get("[id='customer.firstName']").type("sachin");
            cy.get("[id='customer.lastName']").type("singh");
            cy.get("[id='customer.address.street']").type("Baner");
            cy.get("[id='customer.address.city']").type("Pune");
            cy.get("[id='customer.address.state']").type("Maharashtra");
            cy.get("[id='customer.address.zipCode']").type("411014");
            cy.get("input[name='customer.phoneNumber']").type("8232323343");
            cy.get("[id='customer.ssn']").type("1234567890");
            cy.get("[id='customer.username']").type("sachin123");
            cy.get("[id='customer.password']").type("Smart@123");
            cy.get("input[name='repeatedPassword']").type("Smart@123")
            cy.get("input[value='Register']").click();
            cy.log("account created successfully!");
           // cy.get("[id='customer.username.errors']").contains("already exists.")
            cy.get("[id='customer.username.errors']").should('have.text','This username already exists.')
            cy.get("[id='customer.username.errors']").should('have.text','username already exists.')

           
})

})