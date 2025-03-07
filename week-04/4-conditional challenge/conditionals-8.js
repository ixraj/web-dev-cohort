// Determine if a number is positive, negative, or zero.
// Problem Statement: Write a function that uses if-else to classify a number.

function checkNumberType(num) {
  if (num > 0) {
    return "Positive";
  } else if (num < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

let result = checkNumberType(0);
console.log(result);
