function solution(num_list) {
  let even = 0; //짝수
  let odd = 0; //홀수

  num_list.forEach((a) => (a % 2 === 0 ? ++even : ++odd));
  num_list = [even, odd];

  return num_list;
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
