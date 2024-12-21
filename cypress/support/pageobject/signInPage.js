
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
        // Navigate to the login page
        cy.visit('https://magento.softwaretestingboard.com/customer/account/login/');
    }

    login(email, password) {
        if (email) {
            this.emailField.type(email); // Type email only if it's provided
        }
        if (password) {
            this.passwordField.type(password); // Type password only if it's provided
        }
        this.loginButton.click();
    }
}

export default new SignInPage();