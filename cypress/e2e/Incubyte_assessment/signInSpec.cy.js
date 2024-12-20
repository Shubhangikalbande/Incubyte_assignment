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
});
