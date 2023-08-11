function solution(n) {
  return Array(n)
    .fill(0)
    .map((_, i) => i + 1)
    .filter((v) => v % 2 === 0)
    .reduce((a, b) => a + b, 0);
}

// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.20ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.6MB)
// 테스트 7 〉	통과 (0.12ms, 33.5MB)
