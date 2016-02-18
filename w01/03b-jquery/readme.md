# jQuery and the DOM

## Learning Objectives

- Explain what the DOM is and how it is structured
- Define the role that jQuery serves as a library
- Define what a CDN ("Content Delivery Network") is and how to use one.
- Select and target DOM elements using a jQuery selector
- Differentiate between DOM and jQuery objects.
- Create, read, update, and delete DOM elements
- Change the attributes or content of a DOM element
- Use data to populate the DOM
- Use event listeners to respond to user actions
- Define `$(document).ready()` and some jQuery methods.


## Intro to jQuery (10min)

### Javascript library
What is a library?

- A collection of Javascript functions and methods that make writing Javascript an easier, smoother and ultimately shorter experience.
- Under the hood, all Javascript libraries are written using Javascript. So technically, there is nothing you can do using a library that can't already be done using Vanilla JS.
- There are tons of them: [https://www.javascripting.com/](https://www.javascripting.com/)
  - Some suited for particular uses like data visualization(D3.js), 3D imaging (Three.js), charts (Chart.js), autocomplete functionality (Typeahead.js) and many more...

### What is jQuery?
The "Write Less, Do More" JS library
- A general purpose library that provides an alternate and easier way to run Javascript.
- At its core, jQuery lets us select and manipulate DOM elements.
- Can also...
  - Manipulate CSS
  - Event listeners
  - AJAX
  - Animations

Like Javascript, jQuery works in all browsers.  

Because of all this, jQuery is the most popular JS library on the web.  

## Setting up jQuery (10min)

There are two ways to go about including jQuery on a website.
- In both cases, we include the jQuery script file (`jquery-2.1.4.js`) as we would our usual app.js file using `<script>`.
- Q: Where in our HTML should we include the `jquery-2.1.4.js` file?
  - How/when is Javascript processed by the browser?
  - Relative to the `<script>` that includes our `app.js` file?

### Download
- [https://jquery.com/download/](https://jquery.com/download/)
- Minified vs. Uncompressed
  - Minified
    - No whitespace, no comments, shortened variable names.
    - Q: Why would we want something minified?
      - Improve site load time.
      - If something goes wrong with your jQuery code, hard to debug since it's all on one line.
      - Used when a website is ready for production.
  - Uncompressed
    - Unmodified jQuery - can see it all!
    - Will use this in case we need to debug and take a look at what's going on under the hood.
    - Used when a website is in development.

### Import
You don't have to host jQuery yourself. You can pull it from the web via a Content Delivery Network (CDN).

What is a CDN?
- "Serve content to end-users with high availability and high performance."
- Broad term for a distributed system of servers -- sometimes spread across the world -- that serves content to users, whether that's videos, software or, in this case, a Javascript library.
  - In the case of jQuery, this CDN is usually Google.

Include with a `<script>` tag in HTML that links to some URL.
- Keep this handy: `<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>`

## jQuery Selectors (20min)

The most basic concept of jQuery is to "select some elements and do something with them."

jQuery provides us with a function `$` which contains all the tools included in
jQuery.

If we pass a string (in quotes) to the jQuery function, it will return all
elements that match the selector.

```javascript
$( "h2" );

// By class
$( ".nav-link" );

// By id
$( "#click-me" );
```

The result is a jQuery object, which acts a lot like an array containing all the
matches, even if there's just one match.

To get one item out of the set, we can use the `.eq()` method, and pass in the
index of the item we want.

```
// all h2s
$( "h2" );

// the first h2
$( "h2" ).eq(0);

// the fourth h2
$( "h2" ).eq(3);
```


### Exercise: Using jQuery Selectors (10min)

Load jQuery into our Wendy Bite example, and then select the following:

1. All `<a>` elements on the page.
2. The first `<a>` element on the page.
4. All elements with class `active`.  
5. All paragraphs
6. The second paragraph
7. All links inside the footer (look up nested selectors)
8. The first link inside the footer
9. All images

Reference: [https://api.jquery.com/](https://api.jquery.com/)

## $( document ).ready( ) (5min)

A page can't be manipulated safely until the document is "ready." jQuery detects
this state of readiness for you. Code included inside `$( document ).ready()`
will only run once the page Document Object Model (DOM) is ready for JavaScript
code to execute.

  ```javascript
  $( document ).ready( function(){
    // Any code placed in here will only run once the DOM has been fully loaded.
  })
  ```

## Some jQuery Methods (10min)

Sometimes we want to select a particular aspect of a DOM element, like its HTML
content or CSS properties. That's where jQuery's methods come in.

The jQuery methods we will be going over today are both "getters" and "setters".
- Q: Anybody want to guess what those two terms mean?
  - Getter: returns a value
  - Setter: sets/replaces a value
  - The version of the method that is triggered depends on how many arguments are fed into it.

`.html()`
- Without any arguments, gets the HTML content of a DOM object.

  ```javascript
  // Returns HTML content of a DOM element of id "title"
  $( "#title" ).html();
  # => "My Blawg"
  ```

- With an argument, replaces the HTML content of a DOM object.

  ```javascript
  // Replaces HTML content of a DOM element of id "title" with 'Adam's Blawg'
  $( "#title" ).html( "Adams's Blawg" );
  ```

- If a collection is selected, the method is performed on the first item in the collection.

`.attr()`
- With an HTML attribute as an argument, returns the value of that attribute.

  ```javascript
  // Returns image source
  $( "img" ).attr( "src" );
  ```

- With an HTML attribute and value as arguments, replaces the current value of that attribute with the new value.

  ```javascript
  // Sets image source
  $( "img" ).attr( "src", "http://ak-hdl.buzzfed.com/static/2013-12/enhanced/webdr07/3/12/anigif_enhanced-buzz-15393-1386091162-37.gif")
  ```

`.css()`
- With a CSS attribute name as an argument, returns the current value of that attribute.

  ```javascript
  // Returns the background color of the body
  $( "body" ).css( "background-color" );
  => "#FAFAFA"
  ```

- With a CSS attribute and value as arguments, replaces the current values of that attribute with the new one.

  ```javascript
  // Sets background color of the body to red
  $( "body" ).css( "background-color", "lemonchiffon" );
  ```

- If a collection is selected, the method is performed on the first item in the collection.

### Exercise: Get 'n' Set (10min)

"Get or "Set" the following values using jQuery selectors and methods.  
  1. Get the HTML content of the second `<p>` element on the page.  
  2. Set the HTML content of the second `<p>` to something else weird.  
  3. Get the background color of the body.  
  4. Set the background color of the body to "burlywood".  
  5. Get the `alt` value of the first `<img>` on the page.  
  6. Set the `alt` value of the first `<img>` to something else.  

Reference: [https://api.jquery.com/](https://api.jquery.com/)

## Homework: Pixart

[https://github.com/ga-dc/pixart_js](https://github.com/ga-dc/pixart_js)
