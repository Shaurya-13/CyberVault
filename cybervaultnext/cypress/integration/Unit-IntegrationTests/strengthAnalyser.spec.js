/// <reference types="cypress" />

beforeEach(()=>{
  cy.viewport(1920,1080)
})

context('The Password strength analyser link navigation test',()=>{
    it('Should visit the password strength analyser page',()=>{
      cy.visit('/')
      cy.findByRole('link', {  name: /analyser/i}).should('contain.text','Strength Analyser').click()
      cy.url().should('include', '/analyser')
    })
  })
context('Strength analyser UI page render test', () => {
    it('All components of the strength analyser page should render as intended', () => {
        cy.visit('/analyser')
        cy.get('.navbar').should('be.visible')
        cy.get('.Home_analyser__UZXIM').should('be.visible')
        cy.findByRole('heading', {  name: /robust password strength analyser/i})
        cy.get('.my-5').should('contain.text','Robust Password strength analyser')
        cy.findByRole('heading', {  name: /analyse the strength of your password efficiently and be rest assured\-/i})
        cy.get('h5').should('contain.text','Analyse the strength of your password efficiently and be rest assured')
        cy.get('h5 > .mr-2').realHover().should('be.visible')
        cy.get('.form-control').should('be.enabled').should('not.have.value')
        cy.get('.progress-bar').should('not.be.visible')
        cy.get('h3.text-center').should('contain.text','Very Weak, easily crackable')
    })
  })
context('Stength analyser should test & analyse the strength of any password that is entered in the input box and accordingly respond with the result dynamically',()=>{
  it('Color of the text should stay Grey-Black for an extremely weak password with its corrosponding message',()=>{
    cy.visit('/analyser')
    cy.get('.form-control').type('Password')
    cy.get('h3.text-center').should('have.css','color','rgb(0, 0, 0)')
    cy.get('.progress-bar').should('not.be.visible')
    cy.get('h3.text-center').should('contain.text','Very Weak, easily crackable')
  })
  it('Should change the color of the result text to Red for a weak password with its corrosponding message',()=>{
    cy.visit('/analyser')
    cy.get('.form-control').type('Password123')
    cy.get('h3.text-center').should('have.css','color','rgb(234, 17, 17)')
    cy.get('.progress-bar').should('be.visible')
    cy.get('h3.text-center').should('contain.text','Weak-ish still')
  })
  it('Should change the color of the result text to Yellow for a low-medium strength password with its corrosponding message',()=>{
    cy.visit('/analyser')
    cy.get('.form-control').type('Skljmn@')
    cy.get('h3.text-center').should('have.css','color','rgb(255, 242, 0)')
    cy.get('.progress-bar').should('be.visible')
    cy.get('h3.text-center').should('contain.text','Its Okay-ish')
  })
  it('Should change the color of the result text to Green for a medium-strong strength password with its corrosponding message',()=>{
    cy.visit('/analyser')
    cy.get('.form-control').type('Skljmn@12')
    cy.get('h3.text-center').should('have.css','color','rgb(102, 255, 0)')
    cy.get('.progress-bar').should('be.visible')
    cy.get('h3.text-center').should('contain.text','Better now...')
  })
  it('Should change the color of the result text to a different shade of Green for an adequately Strong password with its corrosponding message',()=>{
    cy.visit('/analyser')
    cy.get('.form-control').type('Skljmn@12@as')
    cy.get('h3.text-center').should('have.css','color','rgb(0, 255, 94)')
    cy.get('.progress-bar').should('be.visible')
    cy.get('h3.text-center').should('contain.text','Perfectly Strong & Complex!')
  })
})