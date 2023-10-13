// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
  let arr = [];
  let cnt = 0;

  for (let num = i; num <= j; num++) {
    if (String(num).includes(k)) {
      arr[cnt++] = num;
    }
  }

  return arr
    .join("")
    .split("")
    .filter((v) => v === String(k)).length;
}

// 테스트 1 〉	통과 (24.85ms, 44.1MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (2.13ms, 34MB)
// 테스트 5 〉	통과 (1.26ms, 33.8MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.28ms, 33.5MB)
// 테스트 8 〉	통과 (6.90ms, 37.9MB)
