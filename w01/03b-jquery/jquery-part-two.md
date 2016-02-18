# jQuery: Part 2

## Learning Objectives

- Create, read, update, and delete DOM elements
- Change the attributes or content of a DOM element
- Use data to populate the DOM
- Use event listeners to respond to user actions


## Addition
### I do - append/appendTo
- `.append()`
  - the selector expression preceding the method is the container into which the content(argument) is inserted as the last child

  ```javascript
    $(".awesome").append("<div>this div is appended</div>")
    // this would add the div as the last child in it to all elements with class awesome
  ```

- `.appendTo()`
  - the content precedes the method, either as a selector expression or as markup created on the fly, and it is inserted into the target container(argument) as the last element

  ```javascript
    $("<div>this div is appended</div>").appendTo($(".awesome"))
    // same thing as above
  ```

- `.prepend()`
  - same as append but inserts the specified content(argument) as the first child

  ```javascript
    $(".awesome").prepend("<div>this div is prepended</div>")
    // this would add the div as the first child in it to all elements with class awesome
  ```

- `.prependTo()`
  - same as appendto but the content precedes the method call is inserted as the first child of the target container(argument)

  ```javascript
    $("<div>this div is prepended</div>").prependTo($(".awesome"))
    // same thing as above
  ```

  > Think about how facebook statuses work. When we add a new status, does it go to the bottom of the list? or is it right at the top? Maybe they're using a prepend here ...

### `.html()`/`.text()`
- `.html()`
  - get or set the HTML contents
    - get: no argument, know that it returns the innerHTML of the first jQuery object

    ```javascript
      $(".awesome").html()
      // returns the innerHTML of the first element in the jQuery object
    ```

    - set: one argument that you want the html content to be

    ```javascript
      $(".awesome").html("this is awesome!")
      // returns the innerHTML of the of all elements in the jQuery object to be "this is awesome!"
    ```

- `.text()`
  - get or set the text contained, it will strip the HTML elements
  - same as `.html()` only it returns the text of all jQuery objects selected for the getter portion

### Removal
#### I do (remove)
- `.remove()`
  - removes the jquery object it is called on, as well as bound events and everything inside it

  ```javascript
    $(".awesome").remove()
  ```

#### You do (empty)
- In the `index.html`, create some dummy content that is children of the the second div with class awesome.
- Then using jquery, remove all of those child elements.

- `.empty()`
  - removes all the child elements of the jquery object it is called on

  ```javascript
    $(".awesome").empty()
  ```

  > Note: when we call the above code, we'll actually be emptying all content from any element with the class of 'awesome'

## Break

### Edition
> you guys glossed over this a bit, but here they are again.

Add an input tag to the `index.html`:

```html
<input type="text" class="search" placeholder="some text here ....">
```

- `.attr()`
  - acts as both a getter and setter
    - setter: requires 2 arguments(key/value pair), or an object(with multiple key/value pairs)
    - getter: requires 1 argument to get the value of the attribute from the jQuery object
- `.css()`
  - acts as both a getter and setter
    - setter: requires 2 arguments(key/value pair), or an object(with multiple key/value pairs)
    - getter: requires 1 argument to get the value of the attribute from the jQuery object
- `.val()`
  - setter: pass in an argument
  - getter: pass in no argument

> We need to be able to get information from users. Input tags are a great way to do that. But more importantly we need to be able to access those values so that our JS can act on it. Think about auto complete on search forms. As we type something into google, it starts giving us options. For every key stroke we make, the callback that is fired is probably using some form of `.val()`. This will also be extremely important moving forward in week 7 with AJAX.

### Other
- `.hide()`
  - changes elements style to have `display:none`

  ```javascript
    $(".awesome").hide()
    // returns the innerHTML of the first element in the jQuery object
  ```

- `.show()`
  - changes a `display:none` to `display:block` or whatever it initially was

  ```javascript
    $(".awesome").show()
    // returns the innerHTML of the first element in the jQuery object
  ```

- `.addClass()`
  - does not replace existing classes
  - pass in argument of 1 string to add 1 or more classes

  ```javascript
    $(".awesome").addClass("add three classes")
    // adds the classes add, three and classes to all elements in the jQuery object returned
  ```

- `.removeClass()`
  - pass in argument of 1 string remove 1 or more classes

  ```javascript
    $(".awesome").removeClass("add three classes")
    // removes the classes add, three and classes to all elements in the jQuery object selected
  ```

- `.children()`
  - returns a jQuery object that contains all the child elements of the jQuery object it is called on.

  ```javascript
    $(".awesome").children()
  ```


- `.each()`
  - loops through collections of jquery objects

  ```javascript
    $(".awesome").each(function(index){
      $(this).html("this html element has the index of ()" + index + ") in the each function")
    })
  ```

> note what the context of `$(this)` is. This refers to each of the elements being looped through.

> This also is actually the second time in this lesson a jquery function requires a callback, can you think of the other?


- `.on()`
  - a way to create event listeners
  - takes two arguments normally
    - first argument is the event(lots of them)
    - second argument is the callback

    ```javascript
      $(".awesome").on("click", function(){
        console.log($(this))
      })
    ```

> What is `$(this)` here? Refers to the jquery object you called `.on` on, as long as you're in the scope of the `.on` function

### You do - Create a drop down menu... sorta
- Create a button in the `index.html`
- Your JS should have the button hide and show the awesome divs when clicked


## Exercise: Pixart

[https://github.com/ga-dc/pixart_js](https://github.com/ga-dc/pixart_js)
