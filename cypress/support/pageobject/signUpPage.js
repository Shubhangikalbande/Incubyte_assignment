class SignUpPage {
    get createAccountButton() {
        return cy.contains('Create an Account');
    }

    get firstNameField() {
        return cy.get('#firstname');
    }

    get lastNameField() {
        return cy.get('#lastname');
    }

    get emailField() {
        return cy.get('#email_address');
    }

    get passwordField() {
        return cy.get('#password');
    }

    get confirmPasswordField() {
        return cy.get('#password-confirmation');
    }

    get registerButton() {
        return cy.get('[title="Create an Account"]');
    }

    visit() {
        cy.visit('https://magento.softwaretestingboard.com/customer/account/create/');
    }

    fillInDetails(firstName, lastName, email, password) {
        this.firstNameField.type(firstName);
        this.lastNameField.type(lastName);
        this.emailField.type(email);
        this.passwordField.type(password);
        this.confirmPasswordField.type(password); // Assuming password confirmation is required
    }

    submit() {
        this.registerButton.click();
    }
}

export default new SignUpPage();

