// 정수가 담긴 배열 array와 정수 n이 매개변수로 주어질 때, array에 n이 몇 개 있는 지를 return 하도록 solution 함수를 완성해보세요.

function solution(array, n) {
  let cnt = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] === n) {
      cnt++;
    }
  }
  return cnt;
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.06ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.7MB)
