import { mount } from '@cypress/vue'
import HelloWorld from '../HelloWorld.vue'

beforeEach(() => {
  mount(HelloWorld)
})

it('shows component', () => {
  cy.get('[data-cy=helloWorldComp]').should('be.visible')
})


it('renders tailwind', () => {
  cy.get('[data-cy=helloWorldText]').should('have.class', 'text-3xl')
})
