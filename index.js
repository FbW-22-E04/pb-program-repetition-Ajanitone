// ## 1. Run Along
// Create a `while` loop that runs as long as the variable `i` is less than 15. Print the value of `i`.

let i = 0;

while (i < 15) {
  console.log("Q1: i is", i);
  i++;
}

// ## 2. Add it up

// Create a `while` loop that calculates the sum of numbers from 1-20.

let count = 0;
let a = 0;

while (a <= 20) {
  count += a;
  a++;
  console.log("Q2:", count);
}

// ## 3. Do.. while statement...

// Use a `do..while` loop that executes the statement `The number is [i]` while `i` is less than `20`.

let k = 0;
do {
  console.log(`Q3: The number is ${k}`);
  k++;
} while (k < 20);
