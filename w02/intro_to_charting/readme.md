# Charting

## LO's
- leverage HTML, CSS, and JS to create a basic bar chart
- load dependencies for charting libraries to web application
- utilize highchart and chartjs libraries to create bar, pie, scatter, line graphs

## ASM revisted
### Creating a wrapper for the results.
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

### Better yet.. lets refactor!
There's a lot of wrapper logic happening in our promise now. Let's abstract that functionality and build a function that will do that instead.

The function should take the response from the AJAX request and manipulate the format such that they are objects in the sample above.

### Use the data
Take the data that is now an array of objects and create some divs for each object.

In each div:
- the states name
- the number of employees
- and the annual pay

### Make a bar chart for the number of employees
1. Find the state with the most employees and store that in a variable called `max_employees`
2. For each state, display the same information as before
  - in addition create a child div with a class of "bar"
  - take the current state's employees and divide that by the `max_employees` to get a percentage value.
  - define the styles for that child div we created to have a width equal to the percentage value determined in the prior step

> Additionally! Make sure you style everything with class "bar" to have some kind of height. Also when you get your percentage value, you'll probably also have to multiply by 100 because the actual value will be a decimal of some kind. eg. 0.75 == 75%


So we've started building charts! This chart is relatively rudimentary. You'll notice that this chart that we built doesn't use any external dependencies except for jQuery. The raw elements of a chart are still there though! What are some things that we did?

- grabbed information using ajax
- created a "bar" by getting the state's number of employees as a percentage of the state with the most employees.
- bars are labeled with their state and raw number of employees.

As it stands we have the makings of data vis already! If we spent another hour or so toying with CSS we could probably make it into a pretty legit bar chart.

## Charting libraries

There's a saying in software development, "We stand on the shoulders of giants". IE. Let's not recreate the wheel. Even though we just did.. it gives you a better idea of what these charting libraries are doing under the hood.

Let's just not do it ... anymore! Turns out, there are a lot of resources out there that do much of the charting for you. We'll just be learning about a few in this class, certainly not all of them.

Charting libraries provide us an interface with which we can input some data, and out comes a nice little chart. Some of the interfaces are a bit more complex and others are relatively simple. It all depends on the type of chart you're making, the complexity of that chart, and the interface a specific library provides for that chart.

## Highcharts
