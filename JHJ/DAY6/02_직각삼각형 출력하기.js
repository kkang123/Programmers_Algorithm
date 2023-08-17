const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= Number(input[0]); i++) {
    console.log("*".repeat(i));
  }
});

// 테스트 1 〉	통과 (67.27ms, 32.2MB)
// 테스트 2 〉	통과 (54.83ms, 32.2MB)
// 테스트 3 〉	통과 (50.76ms, 32.2MB)
// 테스트 4 〉	통과 (70.74ms, 32.3MB)
// 테스트 5 〉	통과 (46.55ms, 31.6MB)
// 테스트 6 〉	통과 (46.93ms, 31.8MB)
// 테스트 7 〉	통과 (121.80ms, 32.2MB)
// 테스트 8 〉	통과 (46.06ms, 32.2MB)
// 테스트 9 〉	통과 (45.96ms, 32.3MB)
// 테스트 10 〉	통과 (49.47ms, 32.3MB)
