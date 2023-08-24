function solution(n) {
  let cnt = 0;
  let result = 0;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        cnt++;
      }
    }
    if (cnt > 2) {
      ++result;
    }
    cnt = 0;
  }

  return result;
}

// 테스트 1 〉	통과 (0.22ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
