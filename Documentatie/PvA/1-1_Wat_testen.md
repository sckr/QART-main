# Wat wil ik testen?

Voor dit project wil ik met een geautomatiseerde tool de UI van qalybr.nl testen. Om erachter te komen hoe ik dat moet doen wil ik eerst weten wat er precies te testen valt.

Het onderzoek van dit onderdeel is opgenomen in het [testplan](Testplan.md).

## De website

Wat valt er aan een website te testen?

### Onderdelen van een website

Om te weten wat ik wil testen moet ik eerst weten wat er te testen valt

Een website bestaat uit:

- Verschillende webpagina's gehost door dezelfde host

- Interface
  
  - Cookie privacy policy
  
  - Klikbare content
  
  - text boxes/schrijfbare content

  - Zichtbare content 

  Wanneer er een http request voor een website wordt gedaan stuurt de host een DOM terug gestuurd. De DOM is een file die alle HTML elementen in objecten bevat. Hierdoor is het makkelijker om deze elementen te benaderen en te manipuleren.

  De mogelijkheid tot DOM manipulatie maakt het automatisch testen van een webpagina mogelijk.

### Werking van de website

- Werkt de website op verschillende platforms
- Werkt de website hetzelfde op verschillende platforms?
  - Wil je dezelfde testen draaien op verschillende platforms?

## Functioneel en non-functioneel testen

Aan op te leveren software zitten twee verschillende soorten eisen. Functionele eisen gaan over de directe functies die een gebruikte nodig heeft het eind product te gebruiken. Dit zijn de onderdelen die de gebruiker kan zien en waar hij direct interactie mee kan hebben. Non-functionele eisen gaan over onderdelen van het product die zich op de achtergrond afspelen en zorgen dat het product efficiënt draait, veilig te gebruiken is en onderhouden kan worden.

Aan de hand van deze eisen moet het product uiteindelijk getest worden. Voor de functionele eisen is dit redelijk recht toe recht aan. Doet het product wat de gebruiker er van verwacht? Dit kun je per onderdeel af gaan. Voor non-functionele eisen moet je nog wat verder kijken en zijn er verschillende onderdelen.

Voor qalybr.nl willen we functioneel en uiteindelijk ook non-functioneel testen.De functionele testen kijken naar hoe de gebruiker met de website interacteerd. En de non-functionele testen kijken naar verschillende non-functionelen eisen.
