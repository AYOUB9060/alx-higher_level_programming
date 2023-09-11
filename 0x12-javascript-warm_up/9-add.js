#!/usr/bin/node

function add (a, b) {
  const c = a + b;
  console.log(c);
}

const A = Number(process.argv[2]);
const B = Number(process.argv[3]);
add(A, B);
