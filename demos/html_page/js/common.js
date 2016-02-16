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
  g = new Dygraph(el, data,
  {
    labels: [ "Year", "Employment" ],
    width: 800
  });
}
