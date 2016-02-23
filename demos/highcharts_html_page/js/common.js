function convertResultsToObjects(results) {
  var objectArray = [];
  var headers = results[0];
  var numCols = headers.length;
  var numRows = results.length;

  for(var rowNum = 1; rowNum < numRows; rowNum++){
    var currentRow = results[rowNum];
    var newObj = {};
    for(var colNum = 0; colNum < numCols; colNum++) {
      var header = headers[colNum];
      newObj[header] = currentRow[colNum];
    }
    objectArray.push(newObj);
  }

  return objectArray;
}


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
      valueSuffix: '°C'
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
  // g = new Dygraph(el, data,
  // {
  //   labels: [ "Year", "Employment" ],
  //   width: 800
  // });
}
