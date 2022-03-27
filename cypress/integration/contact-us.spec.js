/// <reference types="Cypress" />

describe('test', () => {
    it.only('should', () => {
        cy.visit('http://www.webdriveruniversity.com/Contact-Us/contactus.html')
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
        cy.get('[name="first_name"]').type('Joe')
        cy.get('[name="last_name"]').type('Joe')
        cy.get('[name="email"]').type('Joe@test.com')
        cy.get('[name="message"]').type('Joe')
        cy.get('[type="submit"]').click()
        console.log("DUPA")
    })
})