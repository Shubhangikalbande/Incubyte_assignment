
describe("Test Suite", () => {
    it("Handles 'Contact us!' button click using cy.stub", () => {
      // Visit the main page with extended timeout
      cy.visit("https://nichethyself.com/tourism/home.html", { timeout: 120000 });
  
      // Remove the target="_blank" attribute
      cy.get('a[target="_blank"]').invoke("removeAttr", "target");
  
      // Stub window.open
      cy.window().then((win) => {
        cy.stub(win, "open").as("windowOpenStub").callsFake((url) => {
          if (url === "contact.html") {
            cy.visit(url);
          }
        });
      });
  
      // Interact with the page
      cy.contains("Customized tours").click();
      cy.contains("Homestays",{ timeout: 120000 }).click();
      cy.get("#days").select("Home Stay");
      cy.contains("Home Stay").should("be.visible");
      cy.contains("label", "England").find('input[type="checkbox"]').check();
  
      // Click "Contact us!" button
      cy.contains("Contact us!").click();
  
      // Verify the stub
    //   cy.url().should("eq", "https://nichethyself.com/tourism/contact.html");
    

// Now verify `.card-header`
// cy.get('.card-header', { timeout: 10000 }).should('be.visible').click();
        
    });
  });
  