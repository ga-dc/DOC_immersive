// var state = {};
// state.name = states[0];
// state.numEmployees = numEmployees[0];
// state.annualPay = annualPay[0];


var states = [
  "Alabama",
  "California",
  "Connecticut",
  "District of Columbia",
  "Maine",
  "Minnesota"
];

var numEmployees = [
  234726,
  1111812,
  157363,
  1275,
  46741,
  288583
];

// annualPay expressed in thousands of dollars
var annualPay = [
  11759599,
  69487378,
  10586486,
  56900,
  2477958,
  16119212
]

var results = [];
for(var i = 0; i < states.length; i++ ) {
  var state = {
    name: states[i],
    numEmployees: numEmployees[i],
    annualPay: annualPay[i]
  };
  results.push(state);
}
