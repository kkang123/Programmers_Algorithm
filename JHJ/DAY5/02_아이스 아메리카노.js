function solution(money) {
  const result = [parseInt(money / 5500), money % 5500];
  return result;
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
