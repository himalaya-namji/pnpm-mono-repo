/**
 * 두 자연수 A와 B가 주어진다. 이때, A+B, A-B, A*B, A/B(몫), A%B(나머지)를 출력하는 프로그램을 작성하시오. 
  두 자연수 A와 B가 주어진다. (1 ≤ A, B ≤ 10,000)
  첫째 줄에 A+B, 둘째 줄에 A-B, 셋째 줄에 A*B, 넷째 줄에 A/B, 다섯째 줄에 A%B를 출력한다.
 */
const path = require("path");
var input = require("fs")
  // .readFileSync(path.resolve(__dirname, "./example.txt"))
  .readFileSync(path.resolve(__dirname, "./dev/stdin"))
  .toString()
  .split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(parseInt(a / b));
console.log(a % b);
