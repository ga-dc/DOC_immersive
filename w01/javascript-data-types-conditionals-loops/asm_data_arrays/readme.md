# ASM Data manipulation with basic JS

Let's do some calculations with some actual data sets from the Department of Commerce.

Here are the following three arrays we'll be using:

```js
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
```

Each index value represents the same state for each corresponding array. Examples:

`Alabama's number of Employees is 234726 and annual pay of 11759599`
`Maine's number of Employees is 46741 and annual pay of 2477958`

> Another thing to note is that the annual pay is a number of thousands of dollars paid to those in the manufacturing industry for that particular state.

Given these arrays and what you've learned in class.

Go ahead and loop through these data structures to create a new array. This array should be the average salary of a person in manufacturing by state.
