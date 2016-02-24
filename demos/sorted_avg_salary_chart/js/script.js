var url = "http://api.census.gov/data/timeseries/asm/state?get=NAICS_TTL,EMP,PAYANN,GEO_TTL&for=state:*&YEAR=2014&NAICS=31-33&key=81cdc733d3ac0f3496a88eebbed0a31478c403c6";

// make an ajax reqeust
$.getJSON(url)
.then(convertResultsToObjects)  // convert from an array of arrays, to objects
.then(calculateAvgSalary)       // divide payann by num employees
.then(drawBarChart);

function drawBarChart(data) {
  // write code to sort the data by average salary
  // verify that it works
  var sortedData = _.sortBy(data, 'averageSalary').reverse();
  console.log(sortedData);

  // then write another line to limit the data set to the
  // first or last 10 states (after sorting)
  // hint: look up array splice, myPets.splice(?????)
  // another option is _.last(???), _.first(????)
  // var top10states = sortedData.slice(0, 10)
  var top10states = _.first(sortedData, 10);

  // use `pluck` to get the right data
  var stateNames = _.pluck(top10states, 'GEO_TTL');
  var averageSalaries = _.pluck(top10states, 'averageSalary');

  // console.log(stateNames);
  // console.log(averageSalaries);

  // select the proper div from HTML
  $("#average-salaries").highcharts(
    {
      chart: { type: 'column'},
      title: { text: 'Average Salaries'},
      xAxis: {
        categories: stateNames
      },
      yAxis: {
        min: _.min(averageSalaries) * 0.9,
        max: _.max(averageSalaries) * 1.05,
        title: {
          text: "Average Salary"
        }
      },
      series: [
        {
          name: "States",
          data: averageSalaries
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
    var currentRow = response[row];
    var newRowObj = _.object(headers, currentRow);
    results.push(newRowObj);
  }

  // return the results so they can be used by the next function
  return results;
}
