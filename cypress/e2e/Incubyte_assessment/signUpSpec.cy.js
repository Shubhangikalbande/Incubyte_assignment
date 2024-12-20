import SignUpPage from '../../support/pageobject/signUpPage'


describe('Magento Sign Up Tests', () => {
    it('should sign up with valid details', () => {
        const uniqueEmail = `user${Date.now()}@example.com`;

        SignUpPage.visit();
        SignUpPage.fillInDetails('Shubhangi', 'Kalbande', uniqueEmail, 'Shubhangi@1988')
        SignUpPage.submit();

        // Assertion to verify success
        cy.url().should('eq', 'https://magento.softwaretestingboard.com/customer/account/'); 
        cy.contains('Welcome, Shubhangi Kalbande!')
    });
});
