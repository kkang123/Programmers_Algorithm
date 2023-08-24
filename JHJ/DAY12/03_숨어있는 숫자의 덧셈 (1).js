// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let result = [...my_string]
    .map(Number)
    .filter((a) => (a === 0 ? true : a))
    .reduce((a, b) => a + b);
  return result;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.11ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.08ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
