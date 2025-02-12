let myArray = [1, 4, 2, 3, 5, 6];

function sumFactor(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
    // sum += numbers[i];
  }
  return sum;
}

let result = sumFactor(myArray);
console.log(result);

let anotherArray = sumFactor([3,6,9,3,7,3,7,6])
console.log(`My result of anotherArrays: ${anotherArray}`);
