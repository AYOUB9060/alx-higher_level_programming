#!/usr/bin/node

const argSize = process.argv[2];
const x = Number(argSize);

if (argSize === undefined || isNaN(x)) {
  console.log('Missing size');
} else if (x > 0) {
  for (let i = 0; i < x; i++) {
    console.log('X'.repeat(x));
  }
}
