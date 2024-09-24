## 30/04

**var** = global scope

**let** = block scope (so within {})

**const** = block scope with constant value

**.push** : adds to the end of an array

**static methods** : used directly from the class. Not usable within an object created from  the class.

**Runtime Environment** - where your code is executed

- **Browser's runtime env.** = front end

- **Node.js** = back end

## 02/05

### Promises

objects that represent the eventual result of an asynchronous operation.

- *Pending* = promise not completed yet

- *Fulfilled* = promise resolved

- *Rejected* = promise was not reached - error handling

```js
function myFunc() {
    return new Promise((resolve, reject) => {
        if () resolve(); //fulfilled
        else reject(); // Rejected
    })
}
```

**.then** - defines what happend when a promise settles

**.catch** - catches rejections/errors when they happen and executes error handling

```js
myFunc()
    .then(onResolved)
    .catch(onRejected);
```

**higher order function** = a function that can accept and return functions as arguments

**Chaining promises** - by chaining promises every resolved promise returns another promise. When any rejects **.catch** will catch it.

```js
MyFunc()
    .then(onFirstResolve)
    .then(onSecondresolve)
    .catch(onReject);
```

## 16/05

### Functions shorter forms

```js
function thisFunc(input) {}

thisFunc = (input) => {}

// And when the function is only called in that instance
(input) => {}
```

### Event-loop

Allows for asynchronous actions

### Aynchronous

**Async** - a keyword used to write functions that handle asynchronous actions

- Allways returns a promise

```js
async function myFunc() {
    return //promise
}
```

**Await:** 

- used inside an async function

- returns the resolve value of a promise

- pauses the execution of an async function until the promise is fulfilled

**try...catch** is used in async functions to catch errors as they happen. This can help with knowing when the error happened. *On a case to case basis*

Different flows of two promises:

- **Complete independence** - promises run concurrently and resolve when they are done

- **Dependent** - one promise needs the resolution of the other to be able to run properly, they wait for eachother

- **Independent sort of** - promises can run independently of eachother, but the results of bot promises are used by the same thing at the same time.

```js
async function waiting() {
    const firstValue = await firstAsyncThing();
    const secondValue = await secondAsyncThing();
    console.log(firstValue, secondValue);
}

// 2 examples of result based dependency
async function concurrent() {
    const firstPromise = firstAsyncThing();
    const secondPromise = secondAsyncThing();
    console.log(await firstPromise, await secondPromise);
}

async function asyncPromAll() {
    const resultArray = await Promise.all([asyncTask1(), asyncTask2(), asyncTask3(), asyncTask4()]);
    for (let i = 0; i<resultArray.length; i++){
        console.log(resultArray[i]); 
      }
}
```

## 21/05

### errors in your code

Different types of errors:

1. Compiler error,

2. Runtime error,

3. Silent bugs;

#### error handling

About handling <u>runtime</u> errors

- `new Error()` creates an "new" error in code, that doesn't stop the code from running.

- `throw Error()` throwing an error will stop de execution of that code if it is not caught by a try...catch() handler

### Currying

- a function with multiple parameters curried into nested functions with with each one parameter

```js
// traditional function
function add(a,b) {
    return a + b;
}

// curried function
function curried_add(a) {
    // The outer function returns a nested single-argument function
    return function nested_func(b) {
        return a + b;
   }
}

let add_one = curried_add(1);

add_on(10);
```

- It helps with making one version of recurring code.

### Hoisting

- JavaScript engine allocates memory for al declares variables and functions before executing code.
  
  - Hoisting happens within the scope. Global variables are hosted to the top of the global scope, but variables within a function are hoisted to the top of the functions scope.
  
  - **var** is an annoying unpredictable little thing

### Memory

Javascript handles memory, but sometimes it can go wrong.

**The Stack** holds static storage.

**The Heap** holds dynamic storage.

Usually the stack holds static references to dynamic memory spaces in the heap. Or: name of the variable in de stack, memory of the variable in the heap.

#### Memory lifecycle

- Allocation

- In use

- Releasing

##### Releasing memory

JavaScript uses garbage collecting algorithms:

- Reference-counting

- Mark-and-sweep

**Reference-Counting** - the jv-engine keeps track of references to an object. When there are zero references left, the memory block gets cleared. The reference to an object within a function is usually cleared at the end of the function block, so the memory block will be re-allocated if there are no othere references to that object.

**Mark-and-Sweep** - periodically runs through the running code and marks all object that are reachable. Then all object/memory blocks that are not marked will be cleared.

#### Memory leaks 23/05

Excessive memory that’s no longer needed by a program keeps on existing. Often occuring in program crashing when max memory is reached.

Possible reasons for memory leaks:

- Messy closures - I don't really get it, but something meking it impossible to clear an object which keeps it memory locked.

- **Dangling timers and event listeners** - make sure that you clear api functions that keep on running otherwise. There made to screw and will keep going if you lat them.

- Circular reference

- Global scope variables

**High object churn** - lots of turnover on objects, makes garbage collecting of js more frequent and can create a slow program.

**Object pool** - is apparantly the solution to the above, but I don' t know what it is yet

## 10/06

### lexical grammar

Just the syntax I guess

### Template literals

Strings delimited with backtick (`) which allows for:

- multi-line strings;

- string interpolation, adding output of variables to the string with `${}`;

- tagged templates, 
