// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
  let result = 0;

  if (common[1] - common[0] === common[2] - common[1]) {
    let num = common[1] - common[0];
    result = common.pop() + num;
  } else {
    let num = common[1] / common[0];
    result = common.pop() * num;
  }

  return result;
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
