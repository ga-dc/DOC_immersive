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

results = [
  {
    name: "Alabama",
    numEmployees: 234726,
    annualPay: 11759599,
    averageSalary: 50123
  },
  {
    name: "California",
    numEmployees: 1231239823,
    annualPay: 3739978124,
  },
  ....
]

// start by making an empty results array
// iterate over one of the arrays
// each time (in the loop), make a new object
// set the properties on that object using the 3 arrays (and the index `i`)
// add the object to your results array
