/// <reference types="cypress" />

beforeEach(()=>{
    cy.viewport(1920,1080)
  })

context('The password distinctor link redirection test',()=>{
    it('Should visit the password strength analyser page',()=>{
        cy.visit('/')
        cy.findByRole('link', {  name: /distinctor/i}).should('contain.text','Distinctor').click()
        cy.url().should('include', '/distinctor')
    })
})

context('Password distinctor component UI render test',()=>{
    it('should render all the password distinctor page\'s components',()=>{
        cy.visit('/distinctor')
        cy.get('.navbar')
        cy.get('.Home_distinctor__LOb_d')
        cy.findByRole('heading', {  name: /password distinctor/i})
        cy.get('.my-4').should('contain.text','Password Distinctor')
        cy.findByRole('heading', {  name: /this function will help you analyse the uniqueness of your chosen password/i})
        cy.get('h5.text-dark').should('contain.text','This function will help you analyse the uniqueness of your chosen password')
        cy.get('.text-primary > :nth-child(1)').should('contain.text','It cross-references the Troy Hunt (Have-I-Been-Pawned) database')
        cy.get('.text-primary > :nth-child(1) > .mr-2').realHover().should('be.visible')
        cy.get('.text-primary > :nth-child(2)').should('contain.text','It determines whether the password entered has been compromised/breached before.')
        cy.get('.text-primary > :nth-child(3)').should('contain.text','It indicates whether a password is safe to utilise or not!')
        cy.get('input').should('be.enabled').should('not.have.value')
    })
})

context('Password distinction/uniqueness test',()=>{
    it('Should test the password entered and respond with a dynamic message of whether the password has been breached before and if it has then how many times using the Troy Hunt API',()=>{
        cy.visit('/distinctor')
        cy.get('input').type('Password123')
        cy.get('.text-danger').should('contain.text','This password isn\'t safe to use and appeared in 45,581 known data breaches. You can still use it, but you probably shouldn\'t.')
        cy.get('strong').should('contain','45,581')
    })
    it('Should show a massive number of breaches for a very simple password like 12345678',()=>{
        cy.visit('/distinctor')
        cy.get('input').type('12345678')
        cy.get('.text-danger').should('contain.text','This password isn\'t safe to use and appeared in 5,119,355 known data breaches. You can still use it, but you probably shouldn\'t.')
        cy.get('strong').should('contain','5,119,355')
    })
})