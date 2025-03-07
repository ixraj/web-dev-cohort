// Given a temperature and a scale ("C" or "F"), convert it to the other scale.
// Problem Statement: Write a function that uses switch-case to convert temperature.

function convertTemperature(value, scale) {
  switch (scale) {
    case "C":
      return (value * 9) / 5 + 32 + +"°F";
    case "F":
      return ((value - 32) * 5) / 9 + "°C";
    default:
      return "Invalid Scale";
  }
}

let result = convertTemperature(2, "F");
console.log(result);
