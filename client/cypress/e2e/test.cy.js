//Check whether it has a landing page
describe('Home page', () => {
  it('Successfully loads the landing page', () => {
    cy.visit('/')  
  })
})

//Check whether it has a Login Form
describe('Login feature', () => {
  it('has a login form', () => {
    cy.visit('/login') 
    cy.get('input[data-type=email]').should('exist').type('purity@gmail.com')
    cy.get('input[data-type=password]').should('exist').type('password') 
    cy.get('[data-type=data-submit]').click()
  })

  //handle invalid user input from login form
  it('handle invalid user input', () => {
    cy.visit('/login') 

    const invalidEmail = 'purity'
    const invalidPassword = 123
    cy.get('input[data-type=email]').type(invalidEmail)
    cy.get('input[data-type=password]').type(invalidPassword)  
    cy.get('[data-type=data-submit]').click({force: true}) 
  })
})


//Check if users from API are displayed
describe('Users Displayed', () => {
  it('should successfully retrieve user data', () => {
    cy.request('/users') 
      .then((response) => {   
        expect(response.status).to.equal(200) 
      })
  })
})

//Check if albums from API are displayed
describe('Albums Displayed', () => {
  it('should successfully retrieve album data', () => {
    cy.request('/albums') 
      .then((response) => {   
        expect(response.status).to.equal(200) 
      })
  })
})


//Check if photos from API are displayed
describe('Photos Displayed', () => {
  it('should successfully retrieve photo data', () => {
    cy.request('/photos') 
      .then((response) => {   
        expect(response.status).to.equal(200) 
      })
  })
})

