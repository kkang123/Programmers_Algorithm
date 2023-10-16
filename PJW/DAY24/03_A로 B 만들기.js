// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// function solution(before, after) {
//     const reverseBefore = before.split('').reverse().join('');
//     return reverseBefore === after ? 1 : 0;
// }

function solution(before, after) {
  const sortedBefore = [...before].sort().join("");
  const sortedAfter = [...after].sort().join("");
  return sortedBefore === sortedAfter ? 1 : 0;
}

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.72ms, 33.6MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.25ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.15ms, 33.5MB)
// 테스트 11 〉	통과 (0.66ms, 33.5MB)
// 테스트 12 〉	통과 (0.45ms, 33.5MB)
// 테스트 13 〉	통과 (0.03ms, 33.6MB)
// 테스트 14 〉	통과 (0.05ms, 33.4MB)
// 테스트 15 〉	통과 (0.12ms, 33.4MB)
// 테스트 16 〉	통과 (0.22ms, 33.6MB)
// 테스트 17 〉	통과 (0.23ms, 33.5MB)
// 테스트 18 〉	통과 (0.51ms, 33.5MB)
// 테스트 19 〉	통과 (0.46ms, 33.5MB)
// 테스트 20 〉	통과 (0.48ms, 33.6MB)
// 테스트 21 〉	통과 (0.46ms, 33.5MB)
// 테스트 22 〉	통과 (0.04ms, 33.4MB)
// 테스트 23 〉	통과 (0.04ms, 33.5MB)
