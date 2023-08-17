function solution(hp) {
  let general = 0; // 장군개미
  let soldier = 0; // 병정개미
  let worker = 0; // 일개미

  general = ~~(hp / 5);
  soldier = ~~((hp - general * 5) / 3);
  worker = ~~(hp - (general * 5 + soldier * 3));

  return general + soldier + worker;
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
