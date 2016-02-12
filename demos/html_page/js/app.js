$(document).ready(function() {
  buildStateSelect();
  buildNaicsSelect();

  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(convertResultsToObjects)
  .then(extractAvgSalary)
  .then(graphAvgSalary);
});
