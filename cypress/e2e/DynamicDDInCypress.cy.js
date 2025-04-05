

describe("dynamic dd handling",function(){


it("makemytrip dd", function(){
    cy.visit("https://www.makemytrip.com/",{headers:{"Accept-Encoding":"gzip,deflate"}})
    cy.wait(4000)
    cy.get("[data-cy='closeModal']").click();
    cy.wait(4000)
    cy.get('#fromCity').click();
    cy.wait(2000)
    cy.get("[placeholder='From']").type("New");
    cy.get("[id*='react-autowhatever-1'] div[class*='font14']").each(($links,index,$list) =>{
        cy.wait(2000)
        cy.log("country Code "+ $links.text()); // print all country code from dd
        if($links.text() === 'MAA'){
            $links.click();
        }
    })
})


})