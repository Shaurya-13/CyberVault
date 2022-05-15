/// <reference types="cypress" />


context('Password Distinctor End to End test',()=>{

    it('Should test the whole Password distinctor page and conduct an End to End test',()=>{
        cy.viewport(1920,1080)
        cy.visit('/distinctor')
        //Testing rendering of all parts and components
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
        //Testing the functionality
        cy.get('input').type('Password123')
        cy.get('.text-danger').should('contain.text','This password isn\'t safe to use and appeared in 45,581 known data breaches. You can still use it, but you probably shouldn\'t.')
        cy.get('strong').should('contain','45,581')
        cy.get('input').clear().type('12345678')
        cy.get('.text-danger').should('contain.text','This password isn\'t safe to use and appeared in 5,119,355 known data breaches. You can still use it, but you probably shouldn\'t.')
        cy.get('strong').should('contain','5,119,355')
    })
})