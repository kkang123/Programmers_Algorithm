// DAY 25
// 다음에 올 숫자

// 문제 설명
// 등차수열 혹은 등비수열 common이 매개변수로 주어질 때, 마지막 원소 다음으로 올 숫자를 return 하도록 solution 함수를 완성해보세요.

function solution(common) {
  let one = common[0];
  let two = common[1];
  let three = common[2];

  let result;

  //등차수열
  if (two - one === three - two) {
    result = common[common.length - 1] + (two - one);
    // 등비 수열
  } else if (Math.floor(two / one) === Math.floor(three / two)) {
    result = common[common.length - 1] * Math.floor(two / one);
  }

  return result;
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.04ms, 33.5MB)
테스트 9 〉	통과 (0.04ms, 33.5MB)
*/
