# D3.js

[screencast](https://vimeo.com/133149838)

## Learning Objectives

- CRUD the DOM with d3
- Bind data to DOM elements
- Scale data to fit the viewport
- Use d3 helper methods like `min` and `max`

http://d3js.org/

## The Possibilities are Endless

- http://www.nytimes.com/interactive/2012/11/30/us/tax-burden.html?_r=0
- http://www.jasondavies.com/animated-bezier/
- http://bl.ocks.org/mbostock/3048450
- http://bl.ocks.org/mbostock/4060366
- http://www.koalastothemax.com/
- https://www.jasondavies.com/maps/transition/
- http://animateddata.co.uk/lab/d3-tree/
- http://d3tetris.herokuapp.com/

>D3 allows you to bind arbitrary data to a Document Object Model (DOM), and then apply data-driven transformations to the document. For example, you can use D3 to generate an HTML table from an array of numbers. Or, use the same data to create an interactive SVG bar chart with smooth transitions and interaction.

## Hello World

```js
var paragraphs = $("p")
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs[i]
  paragraph.style.color = "white"
}
```

vs

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.16/d3.min.js" charset="utf-8"></script>
```

```js
d3.selectAll("p").style("color", "white")

// or even:

d3.selectAll("p").style("color", function() {
  return "hsl(" + Math.random() * 360 + ",100%,50%)"
})

d3.selectAll("p").style("font-size", function() {
  return (Math.random() * 12 + 12) + "px"
})

```

## You do: D3 experiments in the console:

[page with d3 preloaded](http://ga-wdi-exercises.github.io/d3-console/)

## We do: Let's make a bar chart

http://github.com/ga-wdi-exercises/d3-bar-chart/

1. Remove the hardcoded HTML
2. Select the chart element and save it to a variable
3. Enter new data
4. Set the width for each bar
5. Set the text for each bar

### Scaling

d3 scales allow us to scale our data to fit into the space allotted.

The scaling functions provided by d3 map an input domain to an output range.

```js
var linearScale = d3.scale.linear()
                    .domain([0,420]) // input
			              .range([0,100])  // output
```

and if you don’t know the max, use d3's `max` method:

```js
var max = d3.max(data)
var linearScale = d3.scale.linear()
                          .domain([0,max])
			                    .range([0,100])
```
