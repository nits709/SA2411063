

// describe("implicit and explicit assertions", ()=>{

//  it("implicit",()=>{
//     cy.visit("https://www.google.co.in/")
//     cy.get('body > div.L3eUgb > div.o3j99.ikrT4e.om7nvf > form > div:nth-child(1) > div.A8SBwf > div.FPdoLc.lJ9FBc > center > input.gNO89b')
//     .should('be.enabled').and('have.attr','id').and('have.class','gLFyf');
  

//  })


 describe("explicit assertions", ()=>{

    it("explicit",()=>{
       cy.visit("https://omayo.blogspot.com/")
       cy.get('#pah').then(($ele)=>{
            let name  = $ele.text();
            cy.log("name "+ name)
            // expect(name).to.be.equal("PracticeAutomationHere");
            // expect(name).to.be.a('string').and.to.have.length.greaterThan(3)
            // expect('hello').to.be.lengthOf(5);
            // expect(true).to.be.true;
            // cy.get('#pah').assert('contains','id')

            const obj = {name: 'john'};
            expect(obj).to.have.property('name','john');

       })


     
   
    })



})