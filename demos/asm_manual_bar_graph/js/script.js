var url = "http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6";
$.getJSON(url)
  .then(convertResultsToObjects)
  .then(addResultsToPage);

function addResultsToPage(data) {
  console.log(data);
  // \$("body").append("<div>")
}

function convertResultsToObjects(response) {
  var headers = response[0];

  var results = [];
  for(var row=1; row < response.length; row++) {
    var currentRow = response[row];
    var newRowObj = {};
    for(var col=0; col < currentRow.length; col++) {
      var key  = headers[col];
      var value = currentRow[col];
      newRowObj[key] = value;
    }

    results.push(newRowObj);
  }

  return results;
}
