# Cypress

= a JavaScript-based test automation framework that had a lot of included libraries that help with testing. Cypress is build on top of Mocha and Chai

## Installatie en startup

`npm install cypress --save-dev` in de project folder. Dit installeerd cypress voor de developer build. Dit is handig wanneer het op een project wordt geïnstalleerd, omdat je dan het project kan bouwen zonder cypress wanneer je uit de test fase bent.

Is dit nodig voor het wart project?

`npx cypress open` opent de cypress test applicatie waarmee je een test suite kan maken

## Syntax

```javascript
describe('my awesome website', () => {
    beforeEach(() => {
        cy.visit('https://www.awebsite.com');
    });

    it('test', () => {
        // cy.get grabs an element from the DOM
        cy.get('h1').should('contain', 'login'); // should asserts

        cy.get('input').type('hi-mom'); // an action
    });
});
```

#### Describe

a test suite - a function that describes a test - describes what is being tested

```javascript
describe('test title', () => {
    // de test
});
```

#### before

`before(() => {})` beschrijft wat er aan het begin van een describe gebeurt

#### beforeEach

`beforeEach(() => {})` beschrijft wat er moet gebeuren voor elke test (`it()`)

```javascript
beforeEach(() => {
    cy.visit
})
```

#### it

Een testcase, een stuk code dat verefieerd dat wat je wilt testen.

```javascript
it('title of testcase', () => {
    // Test code
})
```

#### afterEach

`afterEacht(() => {})` beschrijft wat er na elke test gedaan moet worden

#### after

`after(() => {})` beschrijft wat er moet gebeuren nadat alle tests gerund hebben

### Commands

Commands are ways in cypress to ask for information from the browser. There are three sorts of commands: queries, assertions and actions.

Queries ask for information from the client/host/server/webpage and require it.

Assertions check if the asked for information is available as it expects it to be. This is a 

Commands can be chained together by mix and matching.

In general you don't chain anything after an action command

#### Queries

##### cy.get

`cy.get('')` - get one or more DOM elements by selector or alias

##### cy.url

`cy.url()` - gets the url of the current webpage. So you could crossreference or other things.

#### Assertions

Assertions(bewering) zijn functies waar een verwachting aan zit en een test kunnen laten slagen, als de assertion waar is, of falen, wanneer de assertion niet waar is.

##### cy.contains

`cy.contains('text')` - gets the DOM element containing *text*

##### .should

`.should()` word normaal achter een query gechained en kan op verschillende manieren gebruikt worden. 

```javascript
cy.get('something').should('include', 'assertion');

cy.get('something').should('have.value', '10');

cy.get('something').should('be.empty');

cy.contains('Login').should('be.visible');
```

#### Actions

Actions zijn functies die je achter een assertion aan kan plakken. De actie wordt dan uitgevoerd op het element dat opgehaald is door de assertion.

- .find() - get descendent DOM elements of a specific selector

- .type() - type tekst in een DOM element

- .click() - click een DOM element

- .its() - get a property's value on the previously yielded subject (word gebruikt om te chainen)

## Core concepts

### Return values

Geen van de cypress commando's hebben return values waar je iets mee kan. Je maakt gebruik van de return value door te chainen en niet anders.

Om direct te kunnen werken met de uitkomst van een commando chain gebruik je `.then()`

### Sharing context

De volgende link legt uit hoe je variabelen die je ophaalt in before() en/of beforeEach() kan delen met de testcases.

[Sharing context](https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Sharing-Context)

## Some other concepts

### Iteration

Wanneer je een element opvraagt van de DOM die meerdere child elementen heeft kun je door deze children heen itereren met `.each()`. [cypress pagina on .each()](https://docs.cypress.io/api/commands/each)

## Writing and Organizing tests

[Cypress Website](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests)

### Filetree

Cypress maakt folders aan wanneer je een nieuw framework begint. Deze folders bestaan uit:

- fixtures - bevat mock data

- integration - de test code
  
  - now e2e or component depending on the sort tests

- plugins - hook into the testing lifecycle?

- support - global configuration

Deze structuur is opgegeven door cypress, maar hoeft niet gebruikt te worden. Al zou ik het niet zo snel aanpassen als ik dat niet nodig dunk.

### Test architecture

## Other things

### Uncaught exception

[Uncaught exceptions from you application - cypres.io](https://docs.cypress.io/guides/references/error-messages#Uncaught-exceptions-from-your-application)

Wanneer je applicatie een uncaught exception detecteert faalt de test automatisch.

[To turn off all uncaught exception handling](https://docs.cypress.io/api/cypress-api/catalog-of-events#Uncaught-Exceptions)

In file e2e.js in folder 'support':

```javascript
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})
```
