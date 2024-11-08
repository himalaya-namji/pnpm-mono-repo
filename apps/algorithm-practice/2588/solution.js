/**
 * 곱셈

 */

const input = require("fs")
  .readFileSync("./example.txt")
  //   .readFileSync("/dev/stdin")
  .toString()
  .replace(/\r/g, "")
  .split("\n");
let a = input[0].split("");
let b = input[1].split("");
console.log("data:", input, a, b);

// const data = require("fs").readFileSync("/dev/stdin").toString().trim();
