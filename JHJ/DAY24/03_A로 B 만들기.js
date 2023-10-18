// 문자열 before와 after가 매개변수로 주어질 때, before의 순서를 바꾸어 after를 만들 수 있으면 1을, 만들 수 없으면 0을 return 하도록 solution 함수를 완성해보세요.

// 내 풀이
function solution(before, after) {
  let newBefore = before.split("").sort();
  let newAfter = after.split("").sort();

  return newBefore.map((v, i) => v === newAfter[i]).filter((v) => v === true)
    .length === after.length
    ? 1
    : 0;
}

// 다른 사람 풀이
function solution(before, after) {
  return before.split("").sort().join("") === after.split("").sort().join("")
    ? 1
    : 0;
}

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.55ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.26ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.6MB)
// 테스트 10 〉	통과 (0.15ms, 33.5MB)
// 테스트 11 〉	통과 (0.51ms, 33.5MB)
// 테스트 12 〉	통과 (0.58ms, 33.5MB)
// 테스트 13 〉	통과 (0.09ms, 33.5MB)
// 테스트 14 〉	통과 (0.06ms, 33.5MB)
// 테스트 15 〉	통과 (0.26ms, 33.4MB)
// 테스트 16 〉	통과 (0.42ms, 33.6MB)
// 테스트 17 〉	통과 (0.40ms, 33.5MB)
// 테스트 18 〉	통과 (0.80ms, 33.6MB)
// 테스트 19 〉	통과 (0.52ms, 33.5MB)
// 테스트 20 〉	통과 (0.52ms, 33.5MB)
// 테스트 21 〉	통과 (0.52ms, 33.4MB)
// 테스트 22 〉	통과 (0.06ms, 33.4MB)
// 테스트 23 〉	통과 (0.06ms, 33.4MB)
