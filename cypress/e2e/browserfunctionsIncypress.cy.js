describe("browserfuctionInCypress",()=>{

    // it("Open applicationurl",()=>{

    //     cy.visit("https://google.co.in")
    //     cy.wait(5000)
    //     cy.log("URL launched")
        

    // })

    // it("Minimize and maximize the browser - viewport",()=>{

    //     cy.visit("https://google.co.in")
    //     cy.wait(5000)
    //     cy.log("URL launched")
    //     cy.wait(5000)
    //     cy.viewport(1920,1000)
    //     cy.wait(5000)
    //     cy.viewport(720,980)
    //     cy.wait(5000)
    //     cy.viewport("samsung-s10")
    //     cy.wait(3000)

    // })

//[data-pid='23'] | div[class='header__aside'] [aria-label='Visit the Gmail product page'] 
    it("browser Application navigate forward/back-go",()=>{
        cy.visit("http://google.co.in")
        cy.wait(3000)
        cy.get("[data-pid='23']").click(); // command clicks on gmail link.
       // cy.wait(3000)
       // cy.get("div[class='header__aside'] [aria-label='Visit the Gmail product page']").click()
        cy.wait(3000)
        cy.go('back')
        cy.wait(2000)
        cy.go('forward');
        cy.wait(2000)

    })





})