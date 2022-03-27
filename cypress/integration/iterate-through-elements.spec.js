/// <reference types="cypress" />

describe("iterate over elements", () => {
    it("log information of all hair care products", () => {
        cy.visit('https://automationteststore.com/')
        cy.get("a[href*='product/category&path=']").contains('Hair Care').end()

        cy.get('.fixed_wrapper .prdocutname').each(($el, index, $list) => {
            cy.log("Index: " + index + " : " + $el.text())
        })


    })

    it("Add specific product to basket", () => {
        cy.visit('https://automationteststore.com/')
        cy.get(".fixed_wrapper .prdocutname").each(($el, index, $list) => {
            cy.log($list.length)
            if ($el.text().includes('Flash Bronzer Body Gel')) {
                cy.wrap($el).then(element => {
                    cy.log(element.length)
                })
                
                cy.wrap($el).click()
           
            }
        })
    })
})