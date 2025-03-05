// // In String ----
// let person1 = "Aditya";
// let person2 = person1;

// person2 = "Raj";

// console.log(person1); // Output: "Aditya";
// console.log(person2); // Output: "Raj";

// // In Object ----
// let firstName = {
//   name: "Aditya",
// };
// let lastName = firstName;
// lastName.name = "Raj";

// console.log(firstName); // Output: "Raj";
// console.log(lastName); // Output: "Raj";

// // In Array ----
// let listOfName = ["Aditya", "Aman"];
// let moreName = listOfName;

// moreName[0] = "Raj";
// console.log(moreName); // Output: ["Raj", "Aman"]
// console.log(listOfName); // Output: ["Raj", "Aman"]

/**
 * Now how to fix memory problem. accidental memory leaks, make more secure ==========
 */

// How to copy object
let person1 = {
  firstName: "Aditya",
  lastName: "Raj",
  address: {
    city: "Gurugram",
    county: "India",
  },
};

// let person2 = {
//   ...person1, // ... = spread operator
//   address: {
//     ...person1.address,
//   },
// };

let person1_ka_String = JSON.stringify(person1);
console.log(person1_ka_String);

let person1_ka_String_kaVapaseSe_Obj = JSON.parse(person1_ka_String);
console.log(person1_ka_String_kaVapaseSe_Obj);

let person2 = {
  ...person1,
};

person2.firstName = "Aman";
person2.lastName = "Kumar";
// person2.address = {}; // initialize address an empty object
person2.address.city = "Kanpur";
person2.address.county = "Bharat";

console.log(person1);
console.log(person2);
