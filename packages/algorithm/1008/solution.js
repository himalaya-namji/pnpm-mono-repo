const path = require("path");
var input = require("fs")
  .readFileSync(path.resolve(__dirname, "./example.txt"))
  //   .readFileSync(path.resolve(__dirname, "./dev/stdin"))
  .toString()
  .split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a / b);
