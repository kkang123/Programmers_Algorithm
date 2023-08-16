// "*"의 높이와 너비를 1이라고 했을 때, "*"을 이용해 직각 이등변 삼각형을 그리려고합니다. 정수 n 이 주어지면 높이와 너비가 n 인 직각 이등변 삼각형을 출력하도록 코드를 작성해보세요.

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= +input[0]; i += 1) console.log("*".repeat(i));
});

// 테스트 1 〉	통과 (65.51ms, 32.3MB)
// 테스트 2 〉	통과 (49.93ms, 32.3MB)
// 테스트 3 〉	통과 (69.59ms, 32.2MB)
// 테스트 4 〉	통과 (60.73ms, 32.3MB)
// 테스트 5 〉	통과 (79.57ms, 32.2MB)
// 테스트 6 〉	통과 (62.43ms, 32.3MB)
// 테스트 7 〉	통과 (66.82ms, 32.4MB)
// 테스트 8 〉	통과 (76.65ms, 32.3MB)
// 테스트 9 〉	통과 (51.08ms, 32.3MB)
// 테스트 10 〉	통과 (58.72ms, 32.3MB)
