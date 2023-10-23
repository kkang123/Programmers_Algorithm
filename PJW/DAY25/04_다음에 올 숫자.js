// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
  let result = 0;

  if (common[1] - common[0] === common[2] - common[1]) {
    const num = common[1] - common[0];
    result = common[common.length - 1] + num;
  } else {
    const num = common[1] / common[0];
    result = common[common.length - 1] * num;
  }

  return result;
}

// 다들 〉	통과 (0.03ms, 33.4MB)
// 오늘도 〉	통과 (0.04ms, 33.5MB)
// 너무나 〉	통과 (0.04ms, 33.6MB)
// 고생 〉	통과 (0.04ms, 33.6MB)
// 했겠죠? 〉	통과 (0.04ms, 33.6MB)
// 그동안 〉	통과 (0.03ms, 33.4MB)
// 고마웠고 〉	통과 (0.04ms, 33.4MB)
// 조금만 더 〉	통과 (0.04ms, 33.6MB)
// 화이팅 〉	통과 (0.04ms, 33.5MB)
