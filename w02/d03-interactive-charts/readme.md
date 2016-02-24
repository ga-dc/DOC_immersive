# Interactive Charts

## Learning Objectives
- render html elements with data sourced from script files
- Utilize html elements to dynamically change endpoints for `$.getJSON`
- render graphs based on input from html

## Framing

Well, we've certainly learned a significant amount of information in the last week and a half or so. We've learned about javascript one of the most prominent languages of the web. Through javascript we can manipulate elements in our HTML, adjust styles, request data and even render graphs.

Today we'll be learning how to make interactive graphs. Let's take a look at [Who's in the American Center](http://visual.ly/whos-american-center?view=true)

## Think - Pair & Share
Take a couple minutes to play around with the site. Click on the different links, see where America stands on all the issues! Some things to think about while you play:

- does each clickable category just have an html page stored with the graph pre defined with some data?
- If not, how are these graphs being rendered?
- at a high level, does what we click influence the kind of data we're getting?

Now pair with someone and discuss the following:
- Assume that clicking DOES influence the data we get from AJAX, how does that work?
- what is changing and how does that affect the graph that's displayed?

## Interactive Charts

So we're not learning anything new today.... kind of. We're just learning about a different way to use the tools we've learned about.

At a high level, these are the things we want to do:

1. provide an interface for user input
2. grab the user input to influence the type of `$.getJSON` request
3. take that request and render a graph

We did this sort of thing in week 1 with the weather app, only we didn't render any kind of graph.

Throughout today, we will be building out graphs with select boxes for users to dynamically change the content of the graph.

The goal of today will be to build most of [this application](http://ga-dc.github.io/DOC_immersive/). The top chart you see you've already built most of. Our focus for today will be building the two interactive charts in the middle to the bottom of the page.

If we take a look and inspect these select boxes, we can see the different names of categories and states, but there's also these value properties in our html. Let's take a look at the URL we were using yesterday:

```js
"http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6"
```

Do you see any values that are similar in the option elements as the one in the URL?

In order for us to leverage these values, we need to first build out the select options. I have a list of 51 state codes for manufacturing. You can find it [here](https://raw.githubusercontent.com/ga-dc/DOC_immersive/master/demos/highcharts_html_page/js/data/fips.js).

In HTML, I want you to write an option box for each object that you see in this list. Just kidding! That would be crazy, I would have to be pretty sick to make you guys hard code all of these values as `<option>` elements in our HTML. Instead, we'll do this sort of thing in javascript using jQuery.

Let's create the two files we're going to need(... again) `index.html` and `script.js` but also `fips.js`:

in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
  <script src="fips.js"></script>
  <script src="script.js"></script>
</head>
<body>
  <h1>Interactive Chart</h1>
  <select class="states"></select>
  <div id="employment-by-state"></div>
</body>
</html>
```

> In the html, we've linked to jQuery and UnderscoreJS as well as the empty `fips.js` and `script.js` files. Additionally we've created a `<select>` box which will hold our different options and a `<div>` which will contain our graph.

In `fips.js`, we're going to the copy the contents of the code found [here](https://raw.githubusercontent.com/ga-dc/DOC_immersive/master/demos/highcharts_html_page/js/data/fips.js).

Let's take a close look at part of this file

```js
function fipsCodes() {
  return [
    { fipsCode: "01", stateName: "Alabama"},
    { fipsCode: "02", stateName: "Alaska"},
    { fipsCode: "04", stateName: "Arizona"},
    // more objects follow
  ]
}
```

When we go to invoke this function later in our code, it will just return an array of objects and then we can set that return value to a variable. It's just data, only stored locally.

## Appending options!
We want to be able to see all of the states in `fips.js` as an `<option>` tag in our `<select class="states"></select>` element.

Let's write the function to build out all of the `<option>` elements we'll need in our `<select>` tag.

In script.js:

```js
$(document).ready(function(){
  function buildStateSelect() {
    var states = fipsCodes();
    states.forEach(function(state){
      $(".states").append($("<option value='" + state.fipsCode + "'>" + state.stateName + "</option>"));
    });  
  }

  buildStateSelect()
})


```

> in this function we grab all the state fips codes and store it to `var states`. Then for each state we append an `<option>` element that has a value of that state's fips code as well as the text of the option being that state's name

Excellent, now we have an option to choose states, so coooool. Just one problem, it doesn't do anything. We can select a state and thats about it. Let's go ahead and attach an event listener to the `<select>` element. The event should fire when a user changes states.

```js
function buildStateSelect() {
  var states = fipsCodes();
  states.forEach(function(state){
    $(".states").append($("<option value='" + state.fipsCode + "'>" + state.stateName + "</option>"));
  });
  $('.states').on("change", function() {
    console.log("state has been changed")
    // code to graph a state will go here!
  });
}
```

Remember how we added a value to our `<option>` elements. Turns out the ASM API uses the fips code in the url. Let's take a look at this link:

```
http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:02&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6
```

If we put in a different number for state, and look at `fips.js` we'll see that all the data corresponds.

We're going to definitely need that value from the `<option>` elements.

We're also starting to see that code is getting a little crazy and less maintainable. So we want to abstract the functionality of building the graph into a separate function. We'll call it `graphState()`

in the `change` event in `script.js`:

```js
$('.states').on("change", function() {
  graphState($(this).val());
});
```

> Note that we're grabbing the value from the option tag by doing `$(this).val()` and passing it into the function we're about to build

Let's start defining our `graphState` function now. The first thing that we want to do is make sure we're getting the right information when we change the option for a state.

In `script.js`:

```js
function graphState(id){
  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + id + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(function(response){
    console.log(response)
  })
}
```

> In this json request we're using the value of the <option> when it was changed to supply the id for the endpoint of the API. We can see that as we change the option in our html, the state that we are changing to is whats being `console.log`'ed

So we know we're getting the right data, I wonder if there's some old code we can leverage to convert these results into objects... yess! from the last lesson.

```js
function convertResultsToObjects(response) {
  // grab the header row, since it's always the first row
  var headers = response[0];

  // empty array which will store our converted objects
  var results = [];

  // for each row, skipping the first (header) row
  for(var row=1; row < response.length; row++) {
    // get the current row
    var currentRow = response[row];
    // make a new object to hold the converted data
    var newRowObj = {};

    // for each column in the current row, move the data into the object
    // using the headers as the key, and the value from the current row as the
    // value
    for(var col=0; col < currentRow.length; col++) {
      var key  = headers[col];
      var value = currentRow[col];

      // we have to use the bracket notation here instead of the 'dot' notation
      // because the key is a variable (i.e. we don't know what it is until
      // the code runs)
      newRowObj[key] = value;
    }

    results.push(newRowObj);
  }

  // return the results so they can be used by the next function
  return results;
}
```

> We'll even kept the comments Adam made in the code if you want to review this later.

Now that we have that functionality we can convert our results into an object and use that object to generate the graph.

Before we finish building the `graphState` functionality. Let's do a little exercise.

## In Pairs - Investigate the old code!
Think back a couple of lessons ago when we looked at the highchart's code for a line graph. Look at [this fiddle](http://jsfiddle.net/gh/get/jquery/1.9.1/highslide-software/highcharts.com/tree/master/samples/highcharts/demo/line-labels/) if you need a reference.

With your parter:
- look at the different visual properties on the graph
- compare that with what is written in code in the jsFiddle
- write down everything that we need to change in order to make a line graph about manufacturing
- of those things, write down information can we get from the API

## Back to manugraphing ... get it?

So we've pieced together most of the information we're going to need, lets further package those things into an object so we can write our chart functionality a little more semantically. We're going to use Adam's code from yesterday to package the results into nice objects.

In `script.js`:

```js
function graphState(id) {
  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + id + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(convertResultsToObjects)
  .then(function(results) {
    // using underscore's map function to return an array of just the values we want
    var years = _.map(results, function(r) { return parseInt(r.YEAR); });
    var employees = _.map(results, function(r) { return parseInt(r.EMP); });
    var data = {
      title: "Time Series Data by State",
      name: results[0].GEO_TTL,
      years: years,
      employees: employees,
      xAxisName: "Year",
      yAxisName: "Employees"
    }
  });

}
```

> In this object `data` we're packaging up all of the things that will be different in a line graph.

Finally, lets actually create the chart using highcharts! Our final version of `script.js`:

```js
function graphState(id) {
  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + id + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(convertResultsToObjects)
  .then(function(results) {
    // using underscore's map function to return an array of just the values we want
    var years = _.map(results, function(r) { return parseInt(r.YEAR); });
    var employees = _.map(results, function(r) { return parseInt(r.EMP); });
    var data = {
      title: "Time Series Data by State",
      name: results[0].GEO_TTL,
      years: years,
      employees: employees,
      xAxisName: "Year",
      yAxisName: "Employees"
    }
    $("#employment-by-state").highcharts({
      title: {
        text: data.title,
        x: -20 //center
      },
      xAxis: {
        title: {
          text: data.xAxisName
        },
        categories: data.years
      },
      yAxis: {
        title: {
            text: data.yAxisName
        },
        plotLines: [{
            value: 0,
            width: 1,
            color: '#808080'
        }]
      },
      tooltip: {
        valueSuffix: data.yAxisName
      },
      legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle',
        borderWidth: 0
      },
      series: [{
        name: data.name,
        data: data.employees
      }]
    })
  });
}
```

> There are several opportunities to refactor our code already, we're going to do one refactoring but feel free to see what can be abstracted. If we abstract and modularize things correctly, our code will be more semantic and more maintainable. Example: Let's say the api format changes. W don't want to have to look through our entire code base to figure out where to fix it. We know we have a function who's only job is to convert the results of the API into an object. So the only code we have to adjust will be in that function.

## Refactor
Oh wait, there's never a final version!  Our graph state functionality is getting a bit messy. Let's abstract the generation of the chart into a separate function.

```js
function graphState(id) {
  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + id + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(convertResultsToObjects)
  .then(function(results) {
    // using underscore's map function to return an array of just the values we want
    var years = _.map(results, function(r) { return parseInt(r.YEAR); });
    var employees = _.map(results, function(r) { return parseInt(r.EMP); });
    var data = {
      title: "Time Series Data by State",
      name: results[0].GEO_TTL,
      years: years,
      employees: employees,
      xAxisName: "Year",
      yAxisName: "Employees"
    }
    graph(data, $("#employment-by-state"))
  })

function graph(data, el) {
  el.highcharts({
    title: {
      text: data.title,
      x: -20 //center
    },
    xAxis: {
      title: {
        text: data.xAxisName
      },
      categories: data.years
    },
    yAxis: {
      title: {
          text: data.yAxisName
      },
      plotLines: [{
          value: 0,
          width: 1,
          color: '#808080'
      }]
    },
    tooltip: {
      valueSuffix: data.yAxisName
    },
    legend: {
      layout: 'vertical',
      align: 'right',
      verticalAlign: 'middle',
      borderWidth: 0
    },
    series: [{
      name: data.name,
      data: data.employees
    }]
  })
}
```

## You do - NAICS interactive
Create an interactive chart that shows number of employees in certain types of manufacturing from 2005 - 2014

Here's the endpoint for the URL you'll need:

```
http://api.census.gov/data/timeseries/asm/industry?get=NAICS_TTL,EMP,GEO_TTL&for=us:*&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=" + naicsCode + "&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6
```

Here's the js file that contains the data you'll need:

https://raw.githubusercontent.com/ga-dc/DOC_immersive/master/demos/highcharts_html_page/js/data/naics.js

We built a lot of this code throughout today. Try and recreate it with this new chart.

## I do - Refactor or Runthrough of solution (if we have time)
