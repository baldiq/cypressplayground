/// <reference types="cypress" />

describe("Alias and invoke", () => {
  beforeEach(function() {
    cy.visit("https://automationteststore.com/");
    cy.get(".thumbnail").as('productThumbnail');
    cy.get(".thumbnail").its('length').as('productThumbnailLen');
  })
  it("Validate a specific hair care product", () => {


      cy.get('@productThumbnailLen').should('be.eq', 16)

      cy.get('@productThumbnail').find('.productcart').invoke('attr', 'title').should('eq', 'Add to Cart')
    });
  });
  