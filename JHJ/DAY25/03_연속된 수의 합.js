// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  //     1부터 m까지의 자연수의 합을 구하는공식은 아래와 같습니다.
  // (n * (n + 1)) / 2 == total

  // 자 그렇다면 도출해내야하는 리스트의 마지막 원소가 m일텐데 위 공식을 이용하여 아래와 같이 도출해낼수있습니다.
  // m == (((total * 2) / n) + n - 1) / 2

  let lastNum = 0;
  let startNum = 0;
  let result = [];
  let cnt = 0;

  lastNum = ((total * 2) / num + num - 1) / 2;
  startNum = lastNum - num + 1;

  for (let i = startNum; i <= lastNum; i++) {
    result[cnt++] = i;
  }

  return result;
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.13ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
