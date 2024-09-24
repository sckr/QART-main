# HTML

*Hyper Text Markup Language*

HTML provides structure to content appearing on websites.

## Elements

**HTML Elements** consist of:

- An opening tag `<n>`

- Content

- A closing tag `</n>`

### Body

Only content within the body tags can be displayed to the webpage.

### Head

The head goes before the body and contains the **metadata**. Metadata is data about the webpage that isn't directly displayed.

### Different elements

#### Text

```html
<!--headings-->
<h1> </h1>
<h2> </h2> 
etc...
<!--paragraph-->
<p> </p>
```

#### Div

The div element devides a page into sections. A sort of containter.

`<div> </div>`

No visual representation, but can be used to style it's descendants in a similar way.

There are a few div like elements that have been given names for readibility. Or **Semantic html**.

- **Header** - seperation of text within the body

- **Footer** - seperation of text within the body

- **Title** - Is displayed on the browser tab, used as metadata in the header

- **Nav** - navigation, most commonly used in the header

- **main** - used to encapsulate the dominant conten within a webpage

- **section** - sections of webpage, it's really weird and unclear to me why you shouldn't just use div

- **article** - multiple articles can be in a section, idk man

- **aside** - for additional information that can enhance but is not needed for another element

- **figure** and **figcaption** - encapsulates media such as images, video's, diagrams etc. and figcaption adds an caption to the media

```html
<figure>
  <img src="overwatch.jpg">
  <figcaption>This picture shows characters from Overwatch.</figcaption>
</figure>
```

#### span

A divider for in line deviding.

```html
<p><span>Self-driving cars</span> are anticipated to replace up to 2 million jobs over the next two decades.</p>
```

#### Text styling

`<em>` - emphasize

`<strong>` - highlight

`<br>` - line break (*doesn't use closing tags*)

#### Lists

```html
<!--unorderd lists (or bullets)-->
<ul>
  <li>Limes</li>
  <li>Tortillas</li>
  <li>Chicken</li>
</ul>
<!--orderd lists (or numbered)-->
<ol>
  <li>Step 1</li>
  <li>Step 2</li>
  <li>Step 3</li>
</ol>
```

#### Images

`<img src="source.jpg" />`   The image tag is a *self closing* tag.

#### Videos

```html
<video src="myVideo.mp4" width="320" height="240" controls>
  Video not supported
</video>
```

#### Audio

```html
<audio controls autoplay loop>
    <source src="" type="audio/mp3">
</audio> 
```

#### Embed

Can display any media input: images, video, gifs etc. Is legace code, you should use the other tags when creating new stuff.

#### Anchor element (Linking other web pages)

```html
<a href="https://www.website.org"> Anchor tekst</a>
<!--target attribute can open links in new tabs-->
<a href="https://www.website.org" target="_blank"> Anchor tekst</a>
```

You can turn any element into a link by wrapping the element in the anchor element.

For example: `<a><img src="" /></a>`

##### Linking to other id's

You can use anchor to link to id's of other elements which makes te page scroll to that element when clicked. Linking to an id is indicated with a # `href="#id"`.

#### hr

`<hr>` Draws a line.

#### Navigation

The navigation element. Is added to a list of navigational anchors for readability

```html
<header> 
  <nav>
    <ul>
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>   
    </ul>
  </nav>
</header>
```

#### Table

Making a table with html

```html
<table>
  <thead>
    <tr>  <!--table row-->
      <th>heading 1</th> <!--table heading-->
      <th>heading 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th></th>
      <td></td> <!--table data-->
    </tr>
  </tbody>
  <tfoot>
    <td></td>
  </tfoot>
</table>
```

##### table editing

`colspan="nr"`  - data spanning more columns

`rowspan="nr"` - data spanning multipe rows

With css you can also add style choices to your table

#### Forms

The form element collects data and sends it somewhere else. So the form needs information on where to send the data and how to package the data.

```html
<form action="/a_file.html/php/css" method="POST">
    <h1>Title of form</h1>
    <p>a description of the form</p>
    <label for="_id">description input</label>
    <input type="_type" name="_name" value="prefill" id="_id">
    <input type="submit" value="text">
</form>
```

label can be infront of after the input. As long as you link to the input id with the for attribute correctly.

##### Input attributes

- type

- name

- value - prefill the input fieled or the value that is seen by the computer side

- id

- step - for arrow scrolling with number type

- required - heeft geen value nodig

- min, max - indicates a minimal and maximal value for a number type input

- minlength, maxlength - minimum and maximum length of text type input

- pattern - check for a certain pattern with regular expression

###### Input types

`<input type="password">`

- text

- password

- number - type in any number

- range - a slider

- checkbox

- radio - a checkbox in which you can only check one box
  
  - These are connected to eachother by the name attribute

- submit

##### Dropdown list

A dropdown list

```html
<form>
    <label for="dropdown">This is a dropdown list</label>
    <select id="dropdown" name="menu">
        <option value="choose">choose</option>
        <option value="a">a</option>
        <option value="thing">thing</option>
    </select>
</form>
```

Dropdown with input possibility. This is called a **datalist input**.

```html
<form>
    <label for="dropdown">This is a dropdown list</label>
    <input type="text" list="options" id="dropdown" name="_name">
    <datalist id="options">
        <option value="choose">choose</option>
        <option value="a">a</option>
        <option value="thing">thing</option>
    </datalist>
</form>
```

##### Text area

A field for users to write more text. Note that the tabs and enters are in the element so will be used.

```html
<form>
    <label for="field">A Text Area:</label>
    <br>
    <textarea id="field" name="field" rows="5" cols="30">
        Default text here
    </textarea>
</form>
```

##### Submitting the form

It seems to trigger the action in the form element

From code academy

> When a `<form>` is submitted, the `name` of the fields that accept input and the `value` of those fields are sent as `name=value` pairs.

##### Input validation

Validation is the concept of checking user *provided data* against the *required data*.

- *server-side validation* - data is send to **another machine** for validation.

- *client-side validation* - data is checked **on the browser**.

Different types of validation:

- required fields

- minimum and maximum values or length of text

- Matching pattern

### Attributes

Attributes are added to the opening tag of an element and apply style or other information to the element.

#### id

The id attribute is used to specify different content `<div id="intro">`

#### alt

the alt attribute gives an alternative text for elements, for example images. More inclusive for blind pc users.

```html
<img src="#" alt="A field of yellow sunflowers" />
```

## Setting up a html file

1. *Document type declaration* - Declares what type of document it is and should always be at the start of the document

2. *html tags*
   
   1. *head tags* - metadata of webpage
      
      1. *Title* - title of the webpage, displayed on browser tab
   
   2. *body tags* - body of the webpage

```html
<!DOCTYPE html>
<html>
    <head>
        <title>title here</title>
    </head>
    <body>
    </body>
</html>
```

## Setting up a file structure

### linking to internal pages

Using a relative path in the anchor tag you can link to internal html files

```html
<a href="./file.html"> </a>
```

Using the id attribute you can link two elements together and stuff.
