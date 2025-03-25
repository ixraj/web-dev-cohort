const arr1 = ["hello", 3, ["raj"], null, { fullName: "aditya raj" }];

// length = number of elements, and length is property
console.log(arr1.length);

// Index
console.log(arr1[2]);

// at()
console.log(arr1.at(1)); // Output: 3
console.log(arr1.at(-1)); // Output: { fullname : "aditya raj"}

// push() - return length of arrays
const arr2 = ["a", "b"];
console.log(arr2.push("c")); // Output: 3
console.log(arr2.push(null, 2)); // Output: 5
console.log(arr2); // Output: [ 'a', 'b', 'c', null, 2 ]

// pop() - modifies the original array and, return remove elements
const arr3 = ["a", "b", "c", "d"];
arr3.pop();
console.log(arr3.pop()); //Output: c
console.log(arr3); //Output: ['a', 'b']

// shift() - remove the first element, modifies the original array arrays and return the shifted element
console.log(arr3.shift()); //Output: a
console.log(arr3); //Output: ['b', 'c', 'd']

// unshift() - adds a new element to the beginning of the array, modifies the original array, and returns the length of the new array.
console.log(arr3.unshift(1, 2)); // Output: 6
console.log(arr3); // Output: [ 1, 2, 'a', 'b', 'c', 'd' ]

// includes() - if passed value exist then return "true" if not then return "false"
// includes is case-sensitive
console.log(arr3.includes("a")); // Output: true
console.log(arr3.includes(10)); // Output: false

// indexOf() - if elements exist then return length of element if not then reuturn "-1"
// - str.indexOf(searchValue , index)
// - indexOf is case-sensitive
// - always start with left to right
const animals = ["lion", "dog", "tiger", "elephant", "dog"];
console.log(animals.indexOf("lion")); // Output: 0
console.log(animals.indexOf("Lion")); // Output: -1
console.log(animals.indexOf("dog")); // Output: 1
console.log(animals.indexOf("dog", 3)); // Output: 4
console.log(animals.indexOf("dog", -1)); // Output: 4
console.log(animals.indexOf("dog", -3)); // Output: 4
console.log(animals.indexOf("dog", -4)); // Output: 1

// lastIndexOf() - if elements exist then return length of element if not then reuturn "-1"
// - str.lastIndexOf(searchValue , index)
// - lastIndexOf is case-sensitive
// - always start with right to left
// - opposite to indexOf()
console.log(animals.lastIndexOf("lion")); // Output: 0
console.log(animals.lastIndexOf("Lion")); // Output: -1
console.log(animals.lastIndexOf("dog")); // Output: 4
console.log(animals.lastIndexOf("dog", 3)); // Output: 1
console.log(animals.lastIndexOf("dog", -1)); // Output: 4
console.log(animals.lastIndexOf("dog", -3)); // Output: 1
console.log(animals.lastIndexOf("dog", -4)); // Output: 1

// toString() - converts an array to a string and returns the string representation of the array
const arrToStr = ["a", "b", "c", "d", "e"];
console.log(arrToStr.toString()); // Output: 'a,b,c,d,e'
console.log(arrToStr); // Output: [ 'a', 'b', 'c', 'd', 'e' ]

// join() - similar to toString, but allows you to join the elements with a specified separator.
console.log(arrToStr.join("--")); // Output: 'a--b--c--d--e'
console.log(arrToStr); // Output: [ 'a', 'b', 'c', 'd', 'e' ]

// fill() - used to change all elements in an array to a specified value
// - str.fill(value, start, end);
console.log(arrToStr.fill()); // Output: [ undefined, undefined, undefined, undefined, undefined ]
console.log(arrToStr.fill("a")); // Output: [ 'a', 'a', 'a', 'a', 'a' ]
console.log(arrToStr.fill("a1", 2, 4)); // Output: [ 'a', 'a', 'a1', 'a1', 'a' ]

// flat() - use to nested arrays in a single arrays
// - default value to depth is 1
// - does not change existing arrays
// - use "Infinity" for all levels of nested arrays
const arr4 = [1, 2, 3, [4, 5, [6, 7, [8, 9, [0]]]]];
console.log(arr4.flat()); // Output: [ 1, 2, 3, 4, 5, [ 6, 7, [ 8, 9, [ 0 ] ] ] ]
console.log(arr4.flat(3)); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9, [ 0 ] ]
console.log(arr4.flat(Infinity)); // Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ]
console.log(arr4); // Output: [ 1, 2, 3, [ 4, 5, [ 6, 7, [ 8, 9, [ 0 ] ] ] ] ]

// concat() - use to merger 2 or more arrays in single array
// - does not change existing arrays
const list1 = [1, 2, 3];
const list2 = [4, 5, 6];
const list3 = [7, 8, 9];
console.log(list1.concat(list2)); // Output: [ 1, 2, 3, 4, 5, 6 ]
console.log(list1.concat(list2, list3)); // Output: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

// reverse() - used to reverse the elements of an array and modifies the original array
const reverseArrays = [1, "a", null, true];
console.log(reverseArrays.reverse()); // Output: [ true, null, 'a', 1 ]
console.log(reverseArrays); // Output: [ true, null, 'a', 1 ]

// slice() - used to cut a part of an array and return it as a new array without modifying the original array
// - doesn't change the original array and, can use negative indices to count from the end
const sliceArray = ["hi", "hello", "hola", "namste"];
console.log(sliceArray.slice()); // Output: [ 'hi', 'hello', 'hola', 'namste' ]
console.log(sliceArray.slice(2, 3)); // Output: [ 'hola' ]
console.log(sliceArray.slice(2, 4)); // Output: [ 'hola', 'namste' ]
console.log(sliceArray.slice(-3, -2)); //Output : [ 'hello' ]

// splice() – used to add or remove elements from an array, modifies the original array and returns an array of removed elements.
const spliceArrays = [1, 2, 3, 4, 5];
console.log(spliceArrays.splice(0, 3)); // Output: [ 1, 2, 3 ]
console.log(spliceArrays.splice(-1)); // Output: [ 5 ]
console.log(spliceArrays.splice(4, 0, "a", "b")); // Output: []
console.log(spliceArrays); // Output: [ 4, 'a', 'b' ]

// sort() - use to arrange in oreders and, change original arrays
const sortStr = ["f", "x", "z", "a", "p", "g"];
const sortNum = [5, 0, 3, 2, 4, 9];
console.log(sortStr.sort()); // Output: [ 'a', 'f', 'g', 'p', 'x', 'z' ]
console.log(sortNum.sort()); // Output: [ 0, 2, 3, 4, 5, 9 ]

// some() checks if at least one array element satisfies condition
// - we use like callback
const number = [12, 40, 53, 1, 314];
function findNumber(large) {
  return large > 40;
}
console.log(number.some(findNumber)); // Output: true

// every() checks all array element satisfies condition
const number1 = [12, 40, 53, 1, 314];
function findNumber(large) {
  return large > 10;
}
console.log(number1.every(findNumber)); // Output: false

// forEach() used to execute a function on each element in an array
const foreachArray = ["a", "b", "c", "d", "e"];
foreachArray.forEach(function (element, index) {
  console.log(element, index); //Output: [ 'a', 0 ] [ 'b', 1 ] [ 'c', 2 ] [ 'd', 3 ] [ 'e', 4 ]
});

// map() creates a new array by applying a function to each element of an existing array
const mapArrays = ["a", "b", "c", "d", "e"];
const printMap = mapArrays.map(function (element) {
  return element;
});
console.log(printMap);
// return in arrays

// find() used to find an element in an array and returns the first matching value
const findArray = [5, 12, 8, 130, 44];
const result1 = findArray.find(function (x) {
  return x > 50;
});
console.log(result1); // Output: 130

// findIndex() used to find an element in an array and returns the index of the first matching element
const result2 = findArray.findIndex(function (x) {
  return x > 50;
});
console.log(result2); // Output: 3

// findLast() is the opposite of find()
// findLastIndex() is the opposite of findIndex()

// reduce() array method that accumulates a single value (like sum or product) by applying a function on each element. It processes elements from left to right and returns the final result
const reduceArrays = [1, 2, 3, 4, 5];
const sum = reduceArrays.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 15

// reduceRight() is oppositive of reduce()
// - reduce works left to right
// - reduceRight works right to left