# Exercise: Temperature Converter

## Part I
Goal: Create a program that can convert a temperature in Fahrenheit to Celsius or Kelvin.

## Setup

* Create an `index.html` file.
* Create a `script.js` file.
* Make sure to link the script file in the `index.html`.

## Rules

Your application should...
* Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
* The application should print out the user-submitted temperature in the two remaining units in the console.
* So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
  ```text
  32° F = 0°C = 273.15K
  ```

## Part II - Rules

Your application should...
* Prompt the user for a starting `temperature`. This should be a numerical value that represents degrees.
* Prompt the user for a starting `temperature_unit`. This will represent either Fahrenheit, Celsius or Kelvin.
* The application should print out the user-submitted temperature in the two remaining units.
  * So, if the user submitted `32` and `fahrenheit`, the program should output something like the below. Feel free to customize this however you'd like.
    ```text
    32° F = 0°C = 273.15K
    ```

Using Conditionals, have your code accept either fahrenheit, celsius or kelvin, and output the other two temp types.

Your temperatures, both user-submitted and converted, should be stored and accessed from an array. Your array will end up looking something like this...

  `var fahrenheitTemps = [ startingTemp, convertedTemp1, convertedTemp2 ];`

When you `console.log` the temperatures to display them in the console, make sure you do that by accessing the values stored in the array.

### Part III
- refactor your code to use at least 1 function to abstract some functionality.

### Bonus

Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
