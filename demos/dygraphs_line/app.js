$(document).ready(function() {
  buildStateSelect();
  buildNaicsSelect();
});

function graph(data, el) {
  var newData = [];
  for(var i = 2005; i <= 2013; i++) {
    newData.push([data[i][3], data[i][1]]);
  }
  g = new Dygraph(el, newData,
  {
    labels: [ "Year", "Employment" ]
  });
}
