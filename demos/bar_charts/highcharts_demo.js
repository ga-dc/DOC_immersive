$(document).ready(function(){
  // This will get the first returned node in the jQuery collection.
  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(extractAvgSalary)
  .then(graphAvgSalary);
});

function extractAvgSalary(results) {
  var dataPoints = [];
  for(var i = 1; i < results.length; i++){
    var currentResult = results[i];
    var state = currentResult[3];
    var numEmployees = parseInt(currentResult[1]);
    var annPayroll = parseInt(currentResult[2]) * 1000;

    if (numEmployees !== 0 && annPayroll !== 0) {
      var avgSalary = Math.round(annPayroll / numEmployees);
      var dataPoint = {state: state, avgSalary: avgSalary};
      dataPoints.push(dataPoint);
    }
  }
  return dataPoints;
}

function graphAvgSalary(dataPoints) {
  dataPoints = _.sortBy(dataPoints, "avgSalary").slice(0,10);

  $("#myChart").highcharts({
    chart: { type: 'column'},
    title: { text: 'Average Salaries'},
    xAxis: {
      categories: _.map(dataPoints, 'state')
    },
    yAxis: {
      title: {
        text: "Average Salary"
      }
    },
    series: [
      {
        name: "States",
        data: _.map(dataPoints, 'avgSalary')
      }
    ]
  });
}

// http://api.census.gov/data/timeseries/asm/industry?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=us:*&time=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6
// http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6
