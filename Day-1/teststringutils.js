// const test = require("../Day-1/stringutils");

// console.log(test.capitalized(["avinash", "sneha", "vibha"]));
// console.log(test.reverse("Sneha"));


const test = require("../Day-1/stringutils");

function capitalizeArray(arr) {
  return arr.map((str) => test.capitalized(str));
}

 function reverseArray(arr) {
    return arr.reverse().map((str) => test.reverse(str)).reverse();
  }

console.log(capitalizeArray(["avinash", "sneha", "vibha"]));
console.log(reverseArray(["avinash", "sneha", "vibha"]));


