// 정수 num과 k가 매개변수로 주어질 때, num을 이루는 숫자 중에 k가 있으면 num의 그 숫자가 있는 자리 수를 return하고 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(num, k) {
  return String(num).indexOf(k) === -1 ? -1 : String(num).indexOf(k) + 1;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.6MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.6MB)
// 테스트 7 〉	통과 (0.05ms, 33.6MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
