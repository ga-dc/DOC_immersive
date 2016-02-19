# Ajax

## Learning Objectives
- Explain the difference between synchronous and asynchronous program execution
- Explain why synchronous program execution is not conducive to the front-end.
- Use jQuery `$.ajax()` method to make asynchronous GET requests for data.
- Use jQuery's 'promise-like' methods to handle AJAX responses asynchronously.
- Render new HTML content using data loaded from an Ajax request.

## Opening Framing (5/5)
There's a significant amount of data that lives on the web. Just a crazy amount. It would be really nice if we had tools to access some of that data. With Javascript, we can. First, let's get a frame of reference/high level overview of how data works on the web.

Let's take a look at the [amazon website](http://www.amazon.com/)

If we enter `coding books` into the search, we can see a whole bunch of search results populate.

(ST-WG) Do you think that every time someone hits the search button, a bunch of developers get together and hard code all of this html. So how does it happen?

We can tell that there similar data coming through for each coding book. Things like price, rating, an image, whether or not you can get it through amazon prime, hardback/paperback, author. At a high level, some combination of back end and front end technology is taking this data and rendering a bunch of html and styles.

We've learned a bunch about how we can leverage JS to manipulate the DOM. We've taken some hardcoded data and done something with it. Now, we need the ability to access data on the web using javascript.

If we look at a [chart](https://www.census.gov/data/visualizations/2015/comm/cb15-15_manufacturing_employees.html) created by the census bureau, we can see some of the same concepts that are applied in the amazon website.

Think of the states as the coding books we searched for on amazon. Millions of employees is just a property for a state. Much in the same way price was a property of a `coding book` in amazon.

At the end of the day, we're just grabbing data and then doing something with it.

## Google maps - an example of AJAX at work
Does anyone remember mapquest? How there were 4 arrows on the screen and you clicked on one and the entire page would refresh to a different segment of the map.

Let's look at Google Maps.

AJAX allows us to make a request for data, without locking up our UI. Gamechanger. At a high level, it makes a request to some server for data and when the request comes back we're able to act on that data. With AJAX, we can access data without having to be locked out of our logic.

## `$.ajax`- JSON (10/25)

For the first part of this lesson we'll be using the [Weather Underground API](http://www.wunderground.com/weather/api/d/docs). **Follow the link and sign up for a key.**

Once you're ready, follow this link. Check out the example in the middle of the page. You'll see a URL   that looks something like: `http://api.wunderground.com/api/your_key/conditions/q/CA/San_Francisco.json`. Replace `your_key` with your actual key and visit that URL.

> If you're using the key provided in the lesson plan, we only have a rate limit of 500 so please don't over use!

> A note about keys. When you attach a key to a request, in this case through the URL, your basically telling the API who is making a request to the data. Protect your keys, you don't want people doing malicious things with your keys.

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

> In this particular done promise, it just logs the temperature in fahrenheit when the response comes back from the `$.getJSON` request.

## YOU DO- Weather App: DOM Manipulation Using Response Data (40/90)

Take our existing code for the the weather underground app. Instead of logging the temperature, the `.done()` promise should create a div with the current wind speed in mph.  

### Create Interface for getting a city and state to dynamically change the url

1. Create an input text field for City and State in the HTML.  

- hint: create input tags in your html

2. Have the endpoint url for the `$.getJSON` change dynamically based on user input from those text fields.   

- hint: get the value of the input tags in order to change the url to be the city and state the user inputs

### Create a Weather App!
1. Instead of grabbing just the current wind speed give a general description of weather for a city and state the user specifies.

Things you could include but are not limited to:
- temperature
- windspeed
- humidity
- current weather conditions

### Bonus
- Make a 10 day forecast as well. (Hint: this will use a different url endpoint for your `$.getJSON` request)

### ASM Exercise

Follow this [link](https://www.commerce.gov/page/api-documentation-commercegov#api_key) and register for the DOC's api key. Once you submit the form they'll send you a key via email.

After you've gotten a key, visit the following link using your key instead of `yourKeyHere`:

```
http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=yourKeyHere
```

If we visit this link, we'll see a big array of arrays of information about manufacturing. We actually built the [asm_arrays_exercise](https://github.com/ga-dc/DOC_immersive/tree/master/w01/02-javascript-data-types-conditionals-loops/asm_data_arrays) using the data from this link.

> If we look at the first array, its contains headers that represent the different indexes for each array. IE the header at index 1 of the first array index indicates that the values at index 1 for the following arrays will be a value for EMP or employees.

#### Let's see this data in javascript!

Create the files we'll need to connect to this API!
To complete this portion of the exercise, use a `$.getJSON` request to `console.log` the same arrays of ASM data you saw in the browser just moments ago.

#### Creating a wrapper for the results.
Currently the data is wrapped up in a bunch of arrays. It'll be much nicer to view this same data as an object. Where 1 object represents all of a states information. Currently the array does that, but not in a semantic meaningful way. Let's imagine that we took the current data set and saved it to a variable `results`:

```js
var results = [
  [
  "NAICS_TTL",
  "EMP",
  "PAYANN",
  "GEO_TTL",
  "YEAR",
  "NAICS",
  "state"
  ],
  [
  "Manufacturing",
  "234726",
  "11759599",
  "Alabama",
  "2014",
  "31-33",
  "1"
  ],
  [
  "Manufacturing",
  "12933",
  "552105",
  "Alaska",
  "2014",
  "31-33",
  "2"
  ],
  [
  "Manufacturing",
  "134860",
  "8956139",
  "Arizona",
  "2014",
  "31-33",
  "4"
  ]
  // ... many more results follow
```


If we wanted to get Alabama's information and store it in a variable, we would write something like this:

```
var alabama = results[1]
```

If we wanted even more specific information, like the number of employees we could write something like `var employees = alabama[1]`. The only issue is 1 doesn't tell us anything about employees at all, it's just a number which doesn't tell us anything. It'd be really nice if we could do something like `alabama.employees` and be able to get a property of an object instead of using some cryptic integer to index an array.

Let's fix that.

In the `.done` promise, loop through the arrays to create an array of objects instead of an array of arrays. Here's an example of what a single object in our array will look like:

```js
{state: "Alabama", numEmployees: 234726, annualPay: 11759599}
```

> The importance in this portion of the exercise is to realize that we're just manipulating the format of the data. We're not changing any values. We're just providing a better interface so that our code speaks a little bit more semantically.

#### Better yet.. lets refactor!
There's alot of wrapper logic happening in our promise now. Let's abstract that functionality and build a function that will do that instead.

The function should take the response from the AJAX request and manipulate the format such that they are objects in the sample above.

#### Use the data
Take the data that is now an array of objects and create some divs for each object.

In each div:
- the states name
- the number of employees
- and the annual pay

#### Make a bar chart for the number of employees
1. Find the state with the most employees and store that in a variable called `max_employees`
2. For each state, display the same information as before
  - in addition create a child div with a class of "bar"
  - take the current state's employees and divide that by the `max_employees` to get a percentage value.
  - define the styles for that child div we created to have a width equal to the percentage value

> Additionally! Make sure you style everything with class "bar" to have some kind of height. Also when you get your percentage value, you'll probably also have to multiply by 100 because the actual value will be a decimal of some kind. eg. 0.75 == 75%
