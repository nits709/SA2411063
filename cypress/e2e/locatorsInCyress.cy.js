
//Locator in cypres
// cypress supports with css only.
// no longer support available for xpath, that means u can't create cypress script with xpath,
// u would be needing external plugin to support xpath
//  classname ->  .container  = .classattributevalue  // css format
// id --> #flexCheckDefault = #idattributevalue  // css format
// data-attribute  - data-auto=""
// data-attribute [attrbitue=value]  | tagname[attribute=value]
// cy.get(".classattributevalue")
//https://parabank.parasoft.com/parabank/register.htm

describe("Locator_TestSuite",()=>{
    it("Create an account in parabank",()=>{

            cy.visit("https://parabank.parasoft.com/parabank/register.htm")
            cy.get("[id='customer.firstName']").type("john");
            cy.get("[id='customer.lastName']").type("Methew");
            cy.get("[id='customer.address.street']").type("Kharadi");
            cy.get("[id='customer.address.city']").type("Pune");
            cy.get("[id='customer.address.state']").type("Maharashtra");
            cy.get("[id='customer.address.zipCode']").type("411014");
            cy.get("input[name='customer.phoneNumber']").type("8237393465");
            cy.get("[id='customer.ssn']").type("1234567890");
            cy.get("[id='customer.username']").type("john123");
            cy.get("[id='customer.password']").type("Smart@123");
            cy.get("input[name='repeatedPassword']").type("Smart@123")
            cy.get("input[value='Register']").click();
            cy.log("account created successfully!");


          //  cy.get('#flexCheckDefault')
            
})




})