// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
  if (common[2] - common[1] === common[1] - common[0]) {
    return common[common.length - 1] + (common[1] - common[0]);
  } else {
    return common[common.length - 1] * (common[1] / common[0]);
  }
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
