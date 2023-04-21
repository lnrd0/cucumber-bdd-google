import {Given,Then} from 'cypress-cucumber-preprocessor/steps'

const url = 'https://gitlab.com/michelleamesquita/devsecops2/'

Given('I open GitLab page', () => {
  cy.visit(url)
})

Then(`I see {string} in the title`, (title) => {
  cy.title().should('include', title)
})
