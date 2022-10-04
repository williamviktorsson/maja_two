describe('empty spec', () => {
  it('passes', () => {
    cy.visit('localhost:3000')
    cy.wait(1000)
    cy.visit('localhost:3000/annat')
    cy.wait(1000)

    cy.visit('localhost:3000/wordle')

    cy.get('kbd').contains("H").click()
    cy.get('kbd').contains("O").click()
    cy.get('kbd').contains("R").click()
    cy.get('kbd').contains("S").click()
    cy.get('kbd').contains("E").click()

    cy.get('body').type('{enter}')

    cy.get('kbd').contains("S").click()
    cy.get('kbd').contains("C").click()
    cy.get('kbd').contains("O").click()
    cy.get('kbd').contains("U").click()
    cy.get('kbd').contains("T").click()

    cy.get('body').type('{enter}')

    cy.get('body').type('knife{enter}')

    cy.get('body').type('meals{enter}')
    


    cy.wait(10000)
 /*    cy.visit('localhost:3000/search')
    cy.wait(1000)


    cy.get('#searchInput').type("cats {enter}") */


  })
})