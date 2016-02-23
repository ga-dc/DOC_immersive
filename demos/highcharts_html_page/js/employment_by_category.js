function graphNAICSCode(naicsCode) {
  var counter = 0;
  var data = {};

    $.getJSON("http://api.census.gov/data/timeseries/asm/industry?get=NAICS_TTL,EMP,GEO_TTL&for=us:*&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=" + naicsCode + "&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
    .then(convertResultsToObjects)
    .then(function(results) {
      var years = _.map(results, function(r) { return parseInt(r.YEAR); });
      var employees = _.map(results, function(r) { return parseInt(r.EMP); });
      data = {
        title: "Time Series Data by Manufacturing Category",
        name: results[0].NAICS_TTL,
        years: years,
        employees: employees,
        xAxisName: "Year",
        yAxisName: "Employees"
      }
      console.log(data)
      graph(data, $("#employment-by-category"));
    });

}

function buildNaicsSelect() {
  naicsCodes().forEach(function(naicsCode){
    $(".naics").append($("<option value='" + naicsCode.code + "'>" + naicsCode.description + "</option>"));
  });
  $('.naics').on("change", function() {
    graphNAICSCode($(this).val());
  });
}
