/// <reference types="cypress" />


context('End to End test for the password generator page',()=>{
  it('Should test the whole Password generator page and conduct an End to End test',()=>{
    cy.viewport(1920,1080)
    cy.visit('/generator')
    //Page rendering tests  
    cy.get('.navbar').should('be.visible')
    cy.get('.Home_passGenerator__KGzOz').should('be.visible')
    cy.findByRole('heading', {  name: /password generator/i})
    cy.get('.Home_genHeader__pV0VP').should('contain.text','Password Generator')
    cy.get('.Home_passwordGen__Mqqtf').should('be.visible')
    cy.get('.Home_passwordGen__Mqqtf > input').should('be.disabled')
    cy.get('.svg-inline--fa').should('be.visible')
    cy.get('.Home_copyBtn__MjUGg > .mr-2').should('be.visible')
    cy.findByText(/number of characters/i)
    cy.get(':nth-child(3) > label').should('contain.text','Number of Characters')
    cy.findByRole('spinbutton', {  name: /number of characters/i}).should('be.enabled')
    cy.findByText(/include upper case letters/i)
    cy.get(':nth-child(4) > label').should('contain.text','Include Upper case letter')
    cy.findByText(/include lower case letters/i)
    cy.get(':nth-child(5) > label').should('contain.text','Include Lower case letters')
    cy.findByText(/include numbers/i)
    cy.get('.Home_passGenerator__KGzOz > :nth-child(6)').should('contain.text','Include Numbers')
    cy.findByText(/include special characters/i)
    cy.get(':nth-child(7) > label').should('contain.text','Include Special characters')
    cy.findByRole('button', {  name: /generate password/i}).should('contain.text','Generate Password')
    cy.get('.Home_copyBtn__MjUGg > .mr-2').click()
    cy.get('.Toastify__toast-body').should('contain.text','Nothing has been copied, no password was generated!')
    cy.get('.Home_passwordGen__Mqqtf > input').should('be.disabled')
    //Functionality testing
    cy.findByRole('checkbox', {  name: /include upper case letters/i}).uncheck()
    cy.findByRole('checkbox', {  name: /include lower case letters/i}).uncheck()
    cy.findByRole('checkbox', {  name: /include numbers/i}).uncheck()
    cy.findByRole('checkbox', {  name: /include special characters/i}).uncheck()
    cy.findByRole('button', {  name: /generate password/i}).click()
    cy.get('.Toastify__toast-body').should('contain.text','You must opt for atleast one condition')
    cy.findByRole('checkbox', {  name: /include upper case letters/i}).check()
    cy.findByRole('checkbox', {  name: /include lower case letters/i}).check()
    cy.findByRole('checkbox', {  name: /include numbers/i}).check()
    cy.findByRole('checkbox', {  name: /include special characters/i}).check()
    cy.findByRole('button', {  name: /generate password/i}).click()
    cy.get('.svg-inline--fa').click()
    cy.get('.svg-inline--fa').click()
      //checking the generated password
    cy.get('.Home_passwordGen__Mqqtf > input').invoke('val').then(val=>{
      const genPass=val;
      cy.get('.Home_passwordGen__Mqqtf > input').should('contain.value',genPass)
    })
    cy.get('.Home_copyBtn__MjUGg > .mr-2').click()
    cy.get('.Toastify__toast-body').should('contain.text','Successfully copied generated password to clipboard')    
  })
})