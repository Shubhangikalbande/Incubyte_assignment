import SignInPage from '../../support/pageobject/signInPage'



describe('Magento Sign In Tests', () => {
    it('should sign in with valid credentials', () => {
        SignInPage.visit();
        SignInPage.login('shubhangi.s.kalbande@gmail.com', 'Shubhangi@1988');

        // Assertion to verify successful login
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
        cy.contains('Welcome, shubhangi kalbande!').should('be.visible');
    });

    it('should not sign in with invalid credentials', () => {
        SignInPage.visit();
        SignInPage.login('invalid.email@example.com', 'WrongPassword');

        // Assertion to verify error message
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
    });

    it('should not sign in with an empty email field', () => {
        SignInPage.visit();
        SignInPage.login('', 'Shubhangi@1988'); // No email provided

        // Assertion for email error
        cy.get("#email-error").should("contain", "This is a required field.");
    });

    it('should not sign in with an empty password field', () => {
        SignInPage.visit();
        SignInPage.login('shubhangi.s.kalbande@gmail.com', ''); // No password provided

        // Assertion for password error
        cy.get("#pass-error").should("contain", "This is a required field.");
    });

    it('should not sign in with both fields empty', () => {
        SignInPage.visit();
        SignInPage.login('', ''); // Both fields empty

        // Assertions for both email and password errors
        cy.get("#email-error").should("contain", "This is a required field.");
        cy.get("#pass-error").should("contain", "This is a required field.");
    });

    it('should not sign in with an invalid email format', () => {
        SignInPage.visit();
        SignInPage.login('invalidemail.com', 'Shubhangi@1988'); // Invalid email format

        // Assertion for invalid email format
        cy.get("#email-error").should("contain", "Please enter a valid email address (Ex: johndoe@domain.com).");
    });

    it('should not sign in with a disabled account', () => {
        SignInPage.visit();
        SignInPage.login('disabled.email@example.com', 'Shubhangi@1988');

        
        cy.contains('The account sign-in was incorrect or your account is disabled temporarily. Please wait and try again later.').should('be.visible');
    });

    it('should not sign in with special characters in email or password', () => {
        SignInPage.visit();
        SignInPage.login('shubhangi@exa!mple.com', 'Shubhangi@1988');

        // Assertion for generic sign-in error
        cy.contains('Please enter a valid email address (Ex: johndoe@domain.com).').should('be.visible');
    });
});