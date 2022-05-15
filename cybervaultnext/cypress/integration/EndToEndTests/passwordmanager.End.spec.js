/// <reference types="cypress" />

context('End to End test of the password manager page',()=>{
    it('Should test the whole Password Manager page and conduct an End to End test',()=>{
        cy.viewport(1920,1080)
        cy.visit('/dashboard')
        cy.findByRole('button', {  name: /Add Password-Account/i}).click({force:true})
        //Testing the rednering of the add password modal
        cy.get('.show-grid').should('be.visible')
        cy.get('form > :nth-child(1)').should('contain.text','Social/Business/Personal Account and its URL')
        cy.get('#validationFormik01').should('be.enabled').should('not.have.value').invoke('attr','placeholder').should('contain','Account name')
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(2)').should('have.css','color','rgb(220, 53, 69)').should('contain','Account normal String')
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(3)').should('have.css','color','rgb(220, 53, 69)').should('contain','Account No special chars')
        cy.get('#validationFormik02').should('be.enabled').should('not.have.value').invoke('attr','placeholder').should('contain','Account Url')
        cy.get(':nth-child(1) > .text-danger').should('have.css','color','rgb(220, 53, 69)').should('contain','Url should be valid')
        cy.get('form > :nth-child(3)').should('contain.text','Email used for mentioned account')
        cy.get('#validationFormik03').should('be.enabled').should('not.have.value').invoke('attr','placeholder').should('contain','Email')
        cy.get(':nth-child(3) > .text-danger').should('have.css','color','rgb(220, 53, 69)').should('contain','Email should be valid')
        cy.get('form > :nth-child(5)').should('contain.text','Respective Password to be used')
        cy.get('#validationFormik04').should('be.enabled').should('not.have.value').invoke('attr','placeholder').should('contain','Enter Secure/Strong Password here')
        cy.get('[style="color: rgb(105, 99, 99);"]')
        cy.get(':nth-child(5) > :nth-child(6)').should('have.css','color','rgb(220, 53, 69)').should('contain','Should be greater than 8 characters')
        cy.get(':nth-child(5) > :nth-child(7)').should('have.css','color','rgb(220, 53, 69)').should('contain','Should contain an upper case letter')
        cy.get(':nth-child(5) > :nth-child(8)').should('have.css','color','rgb(220, 53, 69)').should('contain','Should contain a lower case letter')
        cy.get(':nth-child(5) > :nth-child(9)').should('have.css','color','rgb(220, 53, 69)').should('contain','Should contain a number')
        cy.get(':nth-child(5) > :nth-child(10)').should('have.css','color','rgb(220, 53, 69)').should('contain','Should contain a special character')
        cy.get(':nth-child(5) > :nth-child(3)').should('contain','Or go to Generate a new password')
        cy.get('.btn-danger').should('contain.text','Close').should('be.enabled')
        cy.get('.btn-success').should('contain.text','Create').should('be.disabled')
        //Testing the add password function
        cy.get('#validationFormik01').type('Spotify')
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(2)').should('have.css','color','rgb(25, 135, 84)').should('contain','Account normal String')
        cy.get('form > :nth-child(1) > :nth-child(2) > :nth-child(3)').should('have.css','color','rgb(25, 135, 84)').should('contain','Account No special chars')
        cy.get('#validationFormik02').type('spotify.com')
        cy.get(':nth-child(1) > .text-success').should('have.css','color','rgb(25, 135, 84)').should('contain','Url should be valid')
        cy.get('#validationFormik03').type('testUser@gmail.com')
        cy.get(':nth-child(3) > .text-success').should('have.css','color','rgb(25, 135, 84)').should('contain','Email should be valid')
        cy.get('#validationFormik04').type('SpotsTest@1423')
        cy.get(':nth-child(5) > :nth-child(6)').should('have.css','color','rgb(25, 135, 84)').should('contain','Should be greater than 8 characters')
        cy.get(':nth-child(5) > :nth-child(7)').should('have.css','color','rgb(25, 135, 84)').should('contain','Should contain an upper case letter')
        cy.get(':nth-child(5) > :nth-child(8)').should('have.css','color','rgb(25, 135, 84)').should('contain','Should contain a lower case letter')
        cy.get(':nth-child(5) > :nth-child(9)').should('have.css','color','rgb(25, 135, 84)').should('contain','Should contain a number')
        cy.get(':nth-child(5) > :nth-child(10)').should('have.css','color','rgb(25, 135, 84)').should('contain','Should contain a special character')
        cy.get('.btn-success').should('contain.text','Create').click()
        cy.get('.Toastify__toast-body').should('contain.text','Your password has successfully been added!')
        cy.wait(10000) //verify face duriing
        cy.get('.p-3').should('be.visible')
        cy.get('.pt-2').should('be.visible').should('contain.text','face verified, List of your passwords and accounts are as follows:')
        cy.get('.col-sm-1 > .rounded-circle').should('be.visible')
        cy.get('.col-sm-12 > .btn').should('be.visible').should('contain','Spotify')
        //open PASSWORD PREVIEW
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.modal-header').should('contain','Account: Spotify')
        cy.get('.container > :nth-child(1) > .col')
        //verify added email
        cy.get(':nth-child(2) > .my-1').should('contain.value','testUser@gmail.com')
        //view password from PREVIEW
        cy.get('.text-left > span > .svg-inline--fa').click()
        cy.get('.col-md-9 > .form-control').should('contain.value','SpotsTest@1423')
        //COPY password
        cy.get('.text-right > span > .svg-inline--fa').click()
        //EDIT password test
        cy.get('.modal-footer > .btn-primary').click()
        cy.findByText(/edit password for spotify/i).should('contain','Edit Password for Spotify')
        cy.get('.btn-success').should('contain','Edit').should('be.disabled')
        //testing whether the password was added
        cy.get('form > :nth-child(1) > :nth-child(2) > .form-control').clear().type('Spotify123')
        cy.get(':nth-child(3) > .form-control').clear().type('amazon.com')
        cy.get(':nth-child(3) > .col > .form-control').clear().type('testUser123@gmail.com')
        cy.get(':nth-child(2) > .col > .form-control').clear().type('MySpotifyTest@1234')
        cy.get('.btn-success').click()
        cy.get('.Toastify__toast-body').should('contain.text','Password edited successfully!')
        //testing whether the password was edited
        cy.get('.col-sm-12 > .btn').should('be.visible').should('contain','Spotify123')
        //DELETE the password 
        cy.get('.col-sm-12 > .btn').click()
        cy.get('.modal-header').should('contain','Account: Spotify123')
        cy.get('.btn-danger').should('contain','Del').click()
        cy.get('.Toastify__toast-body').should('contain.text','Password successfully deleted!')
        cy.get(':nth-child(4) > .my-5').should('contain.text','You do not have any passwords added!')
    })
})