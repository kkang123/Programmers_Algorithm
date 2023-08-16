// 정수 n이 주어질 때, n이하의 짝수를 모두 더한 값을 return 하도록 solution 함수를 작성해주세요.

function solution(n) {
  let answer = 0;
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      answer += i;
    }
  }
  return answer;
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
