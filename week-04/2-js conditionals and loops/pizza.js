let numberofGuest = 0;

let pizzaSize;
// small <= 2
// medium <= 5
// large

// if (numberofGuest <= 2) {
//   console.log("You need small size pizza.");
// } else if (numberofGuest <= 5) {
//   console.log("You need medium size pizza.");
// } else if (numberofGuest <= 7) {
//   console.log("You need large size pizza.");
// } else {
//   console.log("You need multiple size pizza.");
// }



// also known as greedy algorithm
if (numberofGuest <= 2) {
  pizzaSize = "You need small size pizza.";
} else if (numberofGuest <= 5) {
  pizzaSize = "You need medium size pizza.";
} else if (numberofGuest <= 7) {
  pizzaSize = "You need large size pizza.";
} else {
  pizzaSize = "You need multiple size pizza.";
}

console.log(pizzaSize);
