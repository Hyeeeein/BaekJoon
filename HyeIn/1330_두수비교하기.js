let filePath = process.platform === "linux" ? 0 : "example.txt";
let input = require("fs").readFileSync(filePath).toString().split(" ");

let a = parseInt(input[0]);
let b = parseInt(input[1]);

if (a > b) {
  console.log(">");
} else if (a < b) {
  console.log("<");
} else if (a === b) {
  console.log("==");
}
