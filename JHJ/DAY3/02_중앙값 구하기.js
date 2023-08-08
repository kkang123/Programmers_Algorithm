function solution(array) {
  return array
    .sort((a, b) => a - b)
    .filter((v, i) => i == Math.floor(array.length / 2))[0];
}

// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.18ms, 33.5MB)
// 테스트 7 〉	통과 (0.15ms, 33.5MB)
// 테스트 8 〉	통과 (0.24ms, 33.6MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
