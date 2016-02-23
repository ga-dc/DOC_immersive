var url = "http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6";

// make an ajax reqeust
$.getJSON(url)
  .then(convertResultsToObjects) // convert from an array of arrays, to objects
  .then(logResults); // for now, log the results of the conversion to objects

function logResults(data) {
  console.log(data);
}

function convertResultsToObjects(response) {
  // grab the header row, since it's always the first row
  var headers = response[0];

  var results = []; // empty array which will store our converted objects

  // for each row, skipping the first (header) row
  for(var row=1; row < response.length; row++) {
    var currentRow = response[row]; // get the current row
    var newRowObj = {}; // make a new object to hold the converted data

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
