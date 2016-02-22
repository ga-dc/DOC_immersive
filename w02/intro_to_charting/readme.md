# Charting

## LO's
- leverage HTML, CSS, and JS to create a basic bar chart
- load dependencies for charting libraries to web application
- utilize highchart and chartjs libraries to create bar, pie, scatter, line graphs
- use charting functions in librariers to create charts
- input data into highchart/chartjs formats to generate data in charts.


## ASM revisted- where we left off ...
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

## ChartJS - Bar Charts

ChartJS is one charting library we'll be learning about today.  It's fairly intuitive and simple to use. Let take a look at its [documentation](http://www.chartjs.org/docs/). If you look at the navigation on the left hand side, you can see that chartJS supports various different types of graphs. Today we'll be learning about making bar charts and pie graphs with chartJS.

The first thing we're going to do is make a simple chart about Mary, Tom and Sue and their apple eating habits across a 5 day work week. The following is a table to depict Mar, Tom, and Sue's apple ingestion habits. We want to turn the following data into something with data visualization:

### Dem apples

|      | monday | tuesday | wednesday | thursday | friday |
|------|--------|---------|-----------|----------|--------|
| Mary | 2      | 1       | 4         | 1        | 4      |
| Tom  | 1      | 2       | 3         | 2        | 5      |
| Sue  | 1      | 1       | 4         | 1        | 5      |

> the number signifies how many apples each person has consumed per that day.

Alrighty, we need to create the same 2 files we've always created up to this point, `index.html` and `script.js`.

In the `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <canvas id="myChart" height="500px" width="500px"></canvas>
  <script src="https://code.jquery.com/jquery-2.2.0.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/1.0.2/Chart.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

> you'll notice we've included a couple of new things we haven't seen before. Including the CDN for chartjs as well as an HTML canvas element. The HTML `<canvas>` element is used to draw graphics on a web page normally through javascript.

One thing to note is that each charting library is structured a bit differently. The way its configured and how data needs to be formatted can vary significantly.

Let's create our first bar chart using chartJS.

In the `script.js`:

```js
$(document).ready(function(){
  // grabs the html element so that we can use it to build our chart later.
  var ctx = $("#myChart").get(0).getContext("2d");
})

```

> chartJS doesn't support jquery so we have to convert the jquery object into a regular JS object.

Next we have to define the data in a specific way defined by chartJS.

I want to give you what the final line of our JS will look like

```js
var myBarChart = new Chart(ctx).Bar(data)
```

> this thing Chart, it was defined by chartJS. As was `.Bar`. What isn't defined is data, we need to define that. What this line of code says to me is, I'm going to create a new chart, its type will be bar, and it will have some data(the data we haven't defined yet).

Let's define data now. In many charting libraries, including chartJS, they want their data formatted pretty specifically. Here's what it looks like for bar charts in ChartJS. In `script.js`:

```js
var data = {
  labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
  datasets: [
    {
      label: "Mary",
      fillColor: "lemonchiffon",
      strokeColor: "#5580aa",
      data: [2, 1, 4, 1, 4]
    },
    {
      label: "Tom",
      fillColor: "papayawhip",
      strokeColor: "plum",
      data: [1, 2, 3, 2, 5]
    },
    {
      label: "Sue",
      fillColor: "lightcyan",
      strokeColor: "palevioletred",
      data: [1, 1, 4, 1, 5]
    }
  ]
}
```

> As we look at this data, we can start to the see the importance of indexing in arrays. Specifically, how each of these indexes need to correspond to a specific day.

If we look at our application now, we can see a nice bar chart visualizing mary, tom, and sue's apple eating habits.

If we take the last line of code and modify it a bit... instead of:

```js
var myBarChart = new Chart(ctx).Bar(data)
```

Let's try:

```js
var myBarChart = new Chart(ctx).Bar(data, {
  multiTooltipTemplate: "<%= datasetLabel %> - <%= value %>"
})
```

If we take a look at the chart now and hover over the days, we can see some helpful text as we hover. Many different graphs have various options that you can pass in. In the example above the options are just passed in as an object of key-value pairs. Refer to the documentation to see all the different options you can put in!

## You do - ASM revisted* 2! - Make a bar graph!
With the data arrays at the very top of the page. Make a bar graph using chartJS that charts the number of employees in manufacturing per state.
- the x - axis should contain the different state names
- there should be a bar for the number of employees for each state.
- *bonus* include a bar for the annual pay and make sure it's labeled when you hover over it
- *mega bonus* include a bar for the average salary and make sure it's labeled when you hover over it

## Pie Charts
For this next exercise, we'll maintain our existing code and just get rid of the contents of `script.js`

To clearly see how pie charts work in chartJS, we're going to use some carefully selected fake data. We're going to graph the results of a survey of 100 people that were asked what their favorite fruit among apples, bananas and oranges. The survey results:

- Apples: 50
- Oranges: 30
- Bananas: 20

> Let's use a nice round number like 100, so we can clearly see percentages that we're familiar with.

Let's take a look at how the data for this pie graph will have to be structured:

```js
$(document).ready(function(){
  var ctx = $("#myChart").get(0).getContext("2d");
  var data = [
    {
        value: 50,
        color:"red",
        highlight: "#FF5A5E",
        label: "Apples"
    },
    {
        value: 30,
        color: "orange",
        highlight: "#5AD3D1",
        label: "Oranges"
    },
    {
        value: 20,
        color: "yellow",
        highlight: "#FFC870",
        label: "Bananas"
    }
]
 var myBarChart = new Chart(ctx).Pie(data)
})
```

## You do - Make a pie graph!
Make a pie graph of the class!

This pie graph should visually break down how many people in the class has first names in the following ranges:

- A through I
- J through R
- S through Z

## HighchartJS
The next library we'll be learning is highchartJS. You'll see lots of similarities in the way data structures are being used; however, for these next two sections we'll be doing line graphs and scatter plots.

For this next section I want to show you a chart first:

![highchart](highchart.png)

Here's the code that generated that chart.

`index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>

  <div id="container" style="width: 100%; height: 650px"></div>
  <script src="https://code.jquery.com/jquery-2.2.0.js"></script>
  <script src="https://code.highcharts.com/highcharts.js"></script>
  <script src="script.js"></script>
</body>
</html>
```

`script.js`:

```js
$(document).ready(function(){
  $('#container').highcharts({
    chart: {
      type: 'line'
    },
    title: {
      text: 'Monthly Average Temperature'
    },
    subtitle: {
      text: 'Source: WorldClimate.com'
    },
    xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    yAxis: {
      title: {
        text: 'Temperature (°C)'
      }
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true
        },
        enableMouseTracking: false
      }
    },
    series: [{
      name: 'Tokyo',
      data: [7.0, 6.9, 9.5, 14.5, 18.4, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
    }, {
      name: 'London',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
    }]
  });
});
```

## Think pair share - You do, with a partner!
For the first 15 minutes:
- Duplicate this code on your own machine.
- Familiarize yourself with the code and play with it. Adjust values and see what changes.

For the following 10 minutes pair up with a partner and do the following:
- Identify each visual feature of the graph and map them to parts of the code
- Identify similarities between highcharts and chartjs
- Identify differences between highcharts and chartjs

## You do - Build a line chart using highcharts
Build a line chart for total sales of 3 products: shoes, sunglasses, scarves.

You have the following information:

|          |jan |feb |mar |apr |may |jun |jul |aug |sep |oct |nov |dec |
|----------|----|----|----|----|----|----|----|----|----|----|----|----|
|shoes     |1121|1050|1287|1350|1257|1478|1357|1201|1135|1333|1569|2000|
|sunglasses|758 |669 |521 |489 |652 |859 |923 |887 |623 |389 |542 |1109|
|scarves   |1101|694 |332 |231 |78  |52  |48  |78  |301 |594 |658 |1608|

> Theses numbers are in 10 thousands of dollars and are also completely made up

Use highcharts to build a graph with the information above. Each point in a line should represent how much in sales a particular item did for its corresponding month. The line itself should be a visual representation of how much sales a particular product had.

Leverage the code from the pairing exercise to write this graph.

## You do - Pick another type of chart, and build it! Using either chartJS or HighchartJS.
