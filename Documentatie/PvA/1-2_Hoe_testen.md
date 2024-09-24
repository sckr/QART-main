# Hoe ga ik dat testen?

In "[Wat ga ik testen](1-1_Wat_testen.md)" en het [testplan](Testplan.md) heb ik gekeken naar wat er precies getest gaat worden. In dit hoofdstuk wil ik kijken naar hoe dat getest wordt.

## AutomatedWeb UI testing

Het doel is om met een automatisch testframework de user interface van qalybr.nl te testen. Hiervoor gebruik ik cypress. In de [cypress notities](../cypress.md) heb ik bijgehouden hoe cypress precies werkt.

### Website manupilatie

Om een website te kunnen testen moet ik automatisch  naar een website kunnen browsen en acties kunnen ondernemen op die website. Dit kan doormiddel van DOM manipulatie. Cypress maakt gebruikt van JavaScript, JQuery, Mocha, Chai etc. voor ingebouwde queries die de DOM kunnen manipuleren. 

## Automatisch functioneel testen

Wat houdt het in om automatisch de gebruikers ervaring te testen. Een stuk code die interactie heeft met de DOM kijkt niet op dezelfde manier naar een website als een gebruiker dat zou doen.

Cypress maakt dit vraagstuk al een heel stuk makkelijker door het testen te visualiseren, te laten zien wat de testen precies uitvoeren op de website. Maar met het schrijven van de testen kun je ook rekening houden met hoe een gebruiker de website zou benaderen.

### Element objecten benaderen

Cypress gebruikt voor het opvragen van DOM objecten [`cy.get('jquery selector')`](https://docs.cypress.io/api/commands/get). Met een [JQuery selector](https://www.w3schools.com/Jquery/jquery_ref_selectors.asp) kun je eenzelfde element op verschillende manier ophalen. Bijvoorbeeld met het soort element, id attribuut of de class attribuut. Maar geen van die onderdelen zijn zichtbaar voor een gebruiker.

Om functioneel te testen ga ik focussen op de zichtbare onderdelen op de website. Dit is over het algemeen tekst. Met de cypress [`.contains()`](https://docs.cypress.io/api/commands/contains) query of de JQuery `$(":contains('tekst')")` query kun je een element opvragen doormiddel van de tekst in het element. Met de cypress [`.should('be.visible')`](https://docs.cypress.io/api/commands/should) query kun je verifieren dat het element inderdaad zichtbaar is. Dit kan soms een beetje omslachtig lijken, maar dit maakt het testen meer gericht op de gebruikers ervaring.
