#!/usr/bin/node

const numbers = process.argv.slice(2).map(Number);

if (numbers.length <= 2) {
  console.log(0); // not enough numbers to find the second largest
} else {
  const largest = Math.max(...numbers); // Find the largest and second largest numbers in the array
  numbers.splice(numbers.indexOf(largest), 1);
  if (numbers.length === 1) {
    console.log(numbers[0]); // If there's only one number left, print it
  } else {
    const secondLargest = Math.max(...numbers); // Find the second largest number
    console.log(secondLargest);
  }
}
