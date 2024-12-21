import SignUpPage from '../../support/pageobject/signUpPage'
describe('Magento Sign Up Tests', () => {

    it('should sign up with valid details', () => {
        const uniqueEmail = `user${Date.now()}@example.com`;

        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubhangi', 'Kalbande', uniqueEmail, 'Shubhangi@1988');
        SignUpPage.submit();

        // Assertion to verify success
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/');
        cy.contains('Welcome, Shubhangi Kalbande!').should('be.visible');
    });

    it('should  not allow special characters in the First Name field', () => {
        const uniqueEmail = `user${Date.now()}@example.com`;

        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubh@ngi!', 'Kalbande', uniqueEmail, 'Shubhangi@1988');
        SignUpPage.submit();

        cy.get('.message-error.error.message')
    .should('contain', 'First Name is not valid!');
    });

    it('should  not allow special characters in the Last Name field', () => {
        const uniqueEmail = `user${Date.now()}@example.com`;

        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubhangi', 'Kalban#de!', uniqueEmail, 'Shubhangi@1988');
        SignUpPage.submit();

        cy.get('.message-error.error.message')
    .should('contain', 'Last Name is not valid!');
        
    });

    it('should show an error for invalid email format', () => {
        const invalidEmail = `user${Date.now()}example.com`; // Missing '@'

        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubhangi', 'Kalbande', invalidEmail, 'Shubhangi@1988');
        SignUpPage.submit();

        // Assertion for error message
        cy.get('#email_address-error')
            .should('have.text', 'Please enter a valid email address (Ex: johndoe@domain.com).');
    });

    it('should show an error when Confirm Password does not match Password', () => {
        const uniqueEmail = `user${Date.now()}@example.com`;

        SignUpPage.visit();
        SignUpPage.firstNameField.type('Shubhangi');
        SignUpPage.lastNameField.type('Kalbande');
        SignUpPage.emailField.type(uniqueEmail);
        SignUpPage.passwordField.type('Shubhangi@1988');
        SignUpPage.confirmPasswordField.type('MismatchPassword'); // Intentionally different
        SignUpPage.submit();

        // Assertion for error message
        cy.contains('Please enter the same value again.').should('be.visible');
    });

    it('should show error messages for all mandatory fields when submitting an empty form', () => {
        SignUpPage.visit();
        SignUpPage.submit();

        // Assertions for mandatory field errors
        cy.get('#firstname-error').should('have.text', 'This is a required field.');
        cy.get('#lastname-error').should('have.text', 'This is a required field.');
        cy.get('#email_address-error').should('have.text', 'This is a required field.');
        cy.get('#password-error').should('have.text', 'This is a required field.');
        cy.get('#password-confirmation-error').should('have.text', 'This is a required field.');
    });

    it('should show an error for a weak password', () => {
        const uniqueEmail = `user${Date.now()}@example.com`;
    
        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubhangi', 'Kalbande', uniqueEmail, '12345'); 
        SignUpPage.submit();
    
        cy.get('#password-error').should("contain",'Minimum length of this field must be equal or greater than 8 symbols. Leading and trailing spaces will be ignored.').should('be.visible');
    });
    it('should show an error for already registered email', () => {
        const existingEmail = 'shubhangi.s.kalbande@gmail.com';
    
        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubhangi', 'Kalbande', existingEmail, 'Shubhangi@1988');
        SignUpPage.submit();
    
        cy.contains('There is already an account with this email address. If you are sure that it is your email address, click here to get your password and access your account.').should('be.visible');
    });
    
    
});


