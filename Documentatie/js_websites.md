# Interactive Javascript websites

- HTML defines the structure of a web page

- CSS provides style to our HTML

- JavaScript provides interactivity

## The <script> element

To run JavaScript within html it is encapsulated within `<script></script>`

### embedded code

You can add javascript scripts within the element.

```html
  <script>
    function blooming() {
    var image = document.getElementById('myImage');
    if (image.src.match("normal")) {
      image.src = "flower.png";
    } else {
      image.src = "normal.png";
    } 
  }       
  </script>
```

### Linking code

You can also link a JavaScript file instead of directly putting it in the html

```html
<script src="./exampleScript.js"></script>
```

## DOM manipulatie

Doormiddel van de DOM (*zie APIs.md*) kan je de website manipuleren vanuit een script. Dit komt omdat alle html elementen zijn omgezet in een object tree.

### Document

document is de library/class die DOM manipulatie doet. 

#### GetElementByID

```javascript
document.getElementById('id_name');
```

#### GetElementByClassName

Returns een array object met alle child elementen onder het element met de className die opgegeven is.

#### GetElementByTagName

#### querySelector

#### querySelectorAll

NodeList
