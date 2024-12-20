
class SignInPage {
     get emailField() {
         return cy.get('#email'); 
     }
 
     get passwordField() {
         return cy.get('#pass'); 
     }
 
     get loginButton() {
         return cy.get('#send2'); 
     }
 
     visit() {
         // Clean URL for login
         cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
     }
 
     login(email, password) {
         this.emailField.type(email);
         this.passwordField.type(password);
         this.loginButton.click();
     }
 }

 
 export default new SignInPage();
 