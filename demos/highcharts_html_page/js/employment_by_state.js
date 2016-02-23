function graphState(id) {
  var counter = 0;
  var data = {};

  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + id + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(convertResultsToObjects)
  .then(function(results) {
    var years = _.map(results, function(r) { return parseInt(r.YEAR); });
    var employees = _.map(results, function(r) { return parseInt(r.EMP); });
    var data = {
      title: "Time Series Data by State",
      name: results[0].GEO_TTL,
      years: years,
      employees: employees,
      xAxisName: "Year",
      yAxisName: "Employees"
    }
    graph(data, $("#employment-by-state"));
  });

}

function buildStateSelect() {
  var states = fipsCodes();
  states.forEach(function(state){
    $(".states").append($("<option value='" + state.fipsCode + "'>" + state.stateName + "</option>"));
  });
  $('.states').on("change", function() {
    graphState($(this).val());
  });

}
