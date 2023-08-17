function solution(letter) {
  let code = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  let key = {};

  code.map((a, b) => {
    for (let i = 0; i < letter.length; i++) {
      key[a] = String.fromCharCode(97 + b);
    }
  });

  let result = letter.split(" ").map((a, b) => (a = key[a]));

  return result.join("");
}

// 테스트 1 〉	통과 (0.39ms, 33.5MB)
// 테스트 2 〉	통과 (0.28ms, 33.4MB)
// 테스트 3 〉	통과 (0.32ms, 33.5MB)
// 테스트 4 〉	통과 (0.34ms, 33.5MB)
// 테스트 5 〉	통과 (0.28ms, 33.5MB)
// 테스트 6 〉	통과 (0.49ms, 33.6MB)
// 테스트 7 〉	통과 (0.40ms, 33.4MB)
