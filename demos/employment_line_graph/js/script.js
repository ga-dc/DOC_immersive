Highcharts.setOptions({
    lang: {
        thousandsSep: ','
    }
});

var naicsCode = "311";
var url = "http://api.census.gov/data/timeseries/asm/industry?get=NAICS_TTL,EMP,GEO_TTL&for=us:*&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=" + naicsCode + "&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6";

// make an ajax reqeust
$.getJSON(url)
.then(convertResultsToObjects)  // convert from an array of arrays, to objects
.then(drawLineGraph);

function drawLineGraph(data) {
  // grab the data we want from the results
  var years       = _.pluck(data, 'YEAR');
  var employment  = _.pluck(data, 'EMP');

  // convert it to integers (it comes as strings)
  employment  = employment.map( function(num) { return parseInt(num); });
  years       = years.map(      function(num) { return parseInt(num); });

  $("#employment-by-category").highcharts(
    {
      chart: { type: 'spline'},
      title: { text: 'Employment by Year'},
      xAxis: { categories: years },
      yAxis: {
        title: { text: "Employment by Year" }
      },
      series: [
        {
          name: "Manufacturing",
          data: employment
        }
      ]
    }
  );

  return data;
}

function logResults(data) {
  console.log(data);

  return data;
}

function calculateAvgSalary(data) {
  // iterate (loop) over data, and for each state object, calculate and add the
  // average salaray as a property on that object
  for(var i=0; i < data.length; i++) {
    var currentState = data[i];
    var currentAverage = (parseInt(currentState.PAYANN) / parseInt(currentState.EMP)) * 1000;
    currentState.averageSalary = currentAverage;
  }

  return data; // return the updated data so it can be used by the next function
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
