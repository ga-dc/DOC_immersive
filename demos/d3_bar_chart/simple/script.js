var chartData = [
  { name: "Alabama", pop: 40},
  { name: "Alaska", pop: 100},
  { name: "Arkansas", pop: 150},
  { name: "California", pop: 160},
  { name: "Colorado", pop: 420},
  { name: "Connecticut", pop: 230}
];

var maxPop = d3.max(chartData, function(state) { return state.pop });

var xScale = d3.scale.linear()
                .range([0, 500])
                .domain([0, maxPop])

d3.select(".chart").selectAll("div")
  .data(chartData)
    .enter().append("div")
    .style("width", function(d) { return xScale(d.pop) + "px"})
    .text(function(d) { return d.name + " " + d.pop })
