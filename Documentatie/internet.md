## 16/5

### HTTP

Hypertext Transfer Protocol

1. You type an url in the searchbar

2. **The browser:**
   
   1. extracts protocol to use , *http* 
   
   2. takes the domain name and asks for the ip address from **internet Domain Name Server (DNS)**
   
   3. opens a connection to the server of the ip address using the *http* protocol
   
   4. sends an GET request.

```http
GET / HTTP/1.1
Host: www.codecademy.com
```

1. **The Server** responds with
   
   1. the header
   
   2. followed by the content requested (information needed to render a website)

```http
HTTP/1.1 200 OK
Content-Type: text/html
```

## 21/05

### HTTP requests

request to the protocol

**GET** - getting information from a internet source (usually a website)

Different types of GET requests:

- ***fetch()*** 
  
  - request with relevent information for an API
  
  - returns a promise

**query string** - Addition to/end part of an URL which is basicly an input for the API that you are request with the url after `?sl=`

**POST request** - sending information to the API with *fetch()*

```js
// GET using fetch
fetch('http://url.com/add').then(onSucces, onError).then(outputOfSucces);

// POST using fetch (two parameters to fetch)
fetch('http://url.com/add', {method: 'POST', body: 'information').then(..)
```
