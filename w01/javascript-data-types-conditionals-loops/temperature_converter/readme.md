# Exercise: Temperature Converter

Goal: Create a program that can convert a temperature in Fahrenheit, Celsius or Kelvin to the other two units.

## Setup

* Create an `index.html` file.
* Create a `script.js` file.
* Make sure to link the script file in the `index.html`.

## Rules

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

  `var fahrenheitTemps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];`

### Bonus I

Use an array to store and access the user-submitted and converted temperatures. An example...
```js
var temps = [ STARTING_TEMP, CONVERTED_TEMP_1, CONVERTED_TEMP_2 ];
```

When you `console.log` the temperatures, make sure you do that by accessing the values stored in the array.

### Bonus II

Use a for or while loop to print out the conversion results for each temperature. It's OK if you need to simplify your `console.log` statements and remove strings.  

### Bonus III

Using loops, create an interface that continues to ask the user for temp conversions until the user requests to stop.
