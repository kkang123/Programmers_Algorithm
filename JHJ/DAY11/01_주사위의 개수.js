function solution(box, n) {
  return box.map((v) => ~~(v / n)).reduce((a, b) => a * b);
}

// 테스트 1 〉	통과 (0.04ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
