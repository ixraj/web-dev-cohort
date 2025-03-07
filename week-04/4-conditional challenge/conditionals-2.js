// You are given three numbers. Determine the largest among them.

// Problem Statement: Write a function that takes three numbers and returns the largest using if-else.

// // Mine -----
// function findLargest(a, b, c) {
//   let largestNum = a;
//   if (b > largestNum) {
//     largestNum = b;
//   } else {
//     largestNum = c;
//   }
//   return largestNum;
// }

// Solution -----
function findLargest(a, b, c) {
  if (a > b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}

let result = findLargest(12, 23, 1);
console.log(result);
