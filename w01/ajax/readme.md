# Ajax
makes change awraf
## Learning Objectives
- Explain the difference between synchronous and asynchronous program execution
- Explain why synchronous program execution is not conducive to the front-end.
- Use jQuery `$.ajax()` method to make asynchronous GET requests for data.
- Use jQuery's 'promise-like' methods to handle AJAX responses asynchronously.
- Render new HTML content using data loaded from an Ajax request.

## Opening Framing (5/5)

We've learned a bunch about how we can leverage JS to manipulate the DOM. We've taken some hardcoded data and done something with it. If I had to guess, I'd estimate that less 10 % of the content in the web today leverages hard coded data. So where does the rest of that data come from? We need the ability to access data using javascript.

## Google maps - an example of AJAX at work
Does anyone remember mapquest? How there were 4 arrows on the screen and you clicked on one and the entire page would refresh to a different segment of the map.

Let's look at Google Maps.

We don't want to sit around and wait for code to execute before we load the rest of our script. It would be really nice if we could just describe what we want to happen when the code finally does execute, in a callback.

## `$.ajax`- JSON (10/25)

For the first part of this lesson we'll be using the [Weather Underground API](http://www.wunderground.com/weather/api/d/docs). **Follow the link and sign up for a key.**

Once you're ready, follow this link. Check out the example in the middle of the page. You'll see a URL   that looks something like: `http://api.wunderground.com/api/your_key/conditions/q/CA/San_Francisco.json`
> Replace `your_key` with your actual key and visit that URL.
> If you're using the key provided in the lesson plan, we only have a rate limit of 500 so please don't over use!

You should see a really gigantic object/hash. It can be really intimidating at first. But let's just start clicking around till we find some information we might want to display.

Turns out, we can actually access this JSON object using Javascript!
> JSON stands for Javascript Object Notation. JSON can come in a bunch of different ways. But at the end of the day, it's just an object/hash.

## `$.ajax` (25/50)
The jQuery library gives us access to this awesome thing called "Asynchronous Javascript and XML" (AJAX). With the help of AJAX we can do server side requests asynchronously on the client without having to send an actual browser request that reloads the page.

With AJAX, we can make requests for data. Let's give that a shot.  

The first thing we'll do is create the files we need for this application...  

1. make a directory(folder) called wunderground_ajax
2. create an `index.html` file
3. create a `script.js` file

Let's give `index.html` a `<head>` that links to both jQuery and our script file...  

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>hello</h1>
  <script src="https://code.jquery.com/jquery-2.1.4.js"></script>
  <script src="script.js"></script>
</body>
</html>
```
> AJAX is given to us through the jQuery library.

Let's go ahead and make our first AJAX `$.getJSON` request in our `script.js`...

```js
$(document).ready(function(){
  $("h1").on("click", function(){
    var url = "https://api.wunderground.com/api/f28a93cae85945b6/geolookup/conditions/q/va/midlothian.json"
    $.getJSON(url)
      .done(function(){
      console.log("Ajax request success!")
    }).fail(function(){
      console.log("Ajax request fails!")
    }).always(function(){
      console.log("This always happens regardless of successful ajax request or not.")
    })
  })
})
```

> You'll notice there are 3 functions that are tacked onto the AJAX call. These are known as promises. Promises are just callbacks that may or may not happen. A promise represents the future result of an asynchronous operation. In the `.done()` promise if that ajax is executed successfully, the block of code inside it will execute. In the `.fail()` promise, if that ajax is not executed successfully, the block of code inside it will execute. In the `.always()` promise, code block inside will always occur regardless of the ajax's success.

But how do we go about accessing that big JSON object we saw before? By passing in an argument to the anonymous function callback. The `$.ajax` call returns a response that you can then pass in as an argument to the promise.

```js
// `response` contains the actual response from the ajax call.
.done(function(response)(){
  console.log(response)
})
```

We can drill through this response just like any other JS object.

```js
// Note that we use traditional Javascript object notation to access the response.
.done(function(response)(){
  console.log(response.current_observation.temp_f)
})
```

## YOU DO: DOM Manipulation Using Response Data (10/60)

Take our existing code for the the weather underground app. Instead of logging the temperature, the `.done()` promise should create a div with the current wind speed in mph.  

### Bonus
  1. Create an input text field for City and State in the HTML.  
  2. Have the endpoint url change dynamically based on user input to generate a div about current weather in that area.  
