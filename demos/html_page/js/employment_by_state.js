function graphState(id) {
  var counter = 0;
  var data = {};

  $.getJSON("http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,GEO_TTL&for=state:" + id + "&YEAR=2005,2006,2007,2008,2009,2010,2011,2012,2013,2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6")
  .then(convertResultsToObjects)
  .then(function(results) {
    var data = _.map(results, function(r) { return [r.YEAR, r.EMP]; });
    graph(data, $("#employment-by-state").get(0));
  });

}

function buildStateSelect() {
  var states = fipsCodes();
  sortedStatesArray = sortedKeyArray(states);
  sortedStatesArray.forEach(function(id){
    $(".states").append($("<option value='" + id + "'>" + states[id] + "</option>"));
  });
  $('.states').on("change", function() {
    graphState($(this).val());
  });

}

function fipsCodes() {
  return {
    "01": "Alabama",
    "02": "Alaska",
    "04": "Arizona",
    "05": "Arkansas",
    "06": "California",
    "08": "Colorado",
    "09": "Connecticut",
    "10": "Delaware",
    "11": "District of Columbia",
    "12": "Florida",
    "13": "Geogia",
    "15": "Hawaii",
    "16": "Idaho",
    "17": "Illinois",
    "18": "Indiana",
    "19": "Iowa",
    "20": "Kansas",
    "21": "Kentucky",
    "22": "Louisiana",
    "23": "Maine",
    "24": "Maryland",
    "25": "Massachusetts",
    "26": "Michigan",
    "27": "Minnesota",
    "28": "Mississippi",
    "29": "Missouri",
    "30": "Montana",
    "31": "Nebraska",
    "32": "Nevada",
    "33": "New Hampshire",
    "34": "New Jersey",
    "35": "New Mexico",
    "36": "New York",
    "37": "North Carolina",
    "38": "North Dakota",
    "39": "Ohio",
    "40": "Oklahoma",
    "41": "Oregon",
    "42": "Pennsylvania",
    "44": "Rhode Island",
    "45": "South Carolina",
    "46": "South Dakota",
    "47": "Tennessee",
    "48": "Texas",
    "49": "Utah",
    "50": "Vermont",
    "51": "Virginia",
    "53": "Washington",
    "54": "West Virginia",
    "55": "Wisconsin",
    "56": "Wyoming"
  };
}

function sortedKeyArray(obj){
  keys = Object.keys(obj);
  return(keys.sort());
}
