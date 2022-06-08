describe('example test', () => {
  it('navigate to page', () => {
    cy.viewport(1920, 1080)
    cy.get('body').trigger('keydown', { key: "ENTER" });

    for (let index = 0; index < 100; index++) {



      cy.visit('localhost:3000')
      cy.wait(500)

      cy.visit('localhost:3000/annat')
      cy.wait(500)

      cy.visit('localhost:3000/wordle')
      cy.wait(200)
      cy.get('kbd').contains('H').click()
      cy.wait(200)
      cy.get('kbd').contains('O').click()
      cy.wait(200)
      cy.get('kbd').contains('R').click()
      cy.wait(200)
      cy.get('kbd').contains('S').click()
      cy.wait(200)
      cy.get('kbd').contains('E').click()
      cy.wait(200)
      cy.get('body').trigger('keydown', { key: "ENTER" });

      cy.wait(1000)

      cy.get('body').type('scout{enter}');

      cy.wait(1000)

      cy.get('body').type('teach{enter}');

      cy.wait(1000)

      cy.get('body').type('score{enter}');

      cy.wait(1000)

      cy.get('body').type('knife{enter}');

      cy.wait(1000)

      cy.visit('localhost:3000/search')
      cy.wait(500)


      cy.get('form > input').type('cats{enter}')
      cy.wait(4000)
    }

  })
})