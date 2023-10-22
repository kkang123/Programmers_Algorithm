// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(quiz) {
  return quiz.map((math) => {
    const [X, plusMinus, Y, equal, Z] = math.split(" ");
    return parseInt(X) + (plusMinus === "+" ? parseInt(Y) : -parseInt(Y)) ===
      parseInt(Z)
      ? "O"
      : "X";
  });
}

// 테스트 1 〉	통과 (0.08ms, 33.3MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.11ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.3MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.12ms, 33.4MB)
// 테스트 9 〉	통과 (0.09ms, 33.4MB)
// 테스트 10 〉	통과 (0.08ms, 33.4MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.09ms, 33.4MB)
// 테스트 13 〉	통과 (0.09ms, 33.4MB)
// 테스트 14 〉	통과 (0.09ms, 33.4MB)
// 테스트 15 〉	통과 (0.09ms, 33.4MB)
// 테스트 16 〉	통과 (0.10ms, 33.4MB)
// 테스트 17 〉	통과 (0.07ms, 33.4MB)
