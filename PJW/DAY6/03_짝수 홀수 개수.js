// 정수가 담긴 리스트 num_list가 주어질 때, num_list의 원소 중 짝수와 홀수의 개수를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 !== 0).length,
  ];
}

// 테스트 1 〉	통과 (0.22ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.3MB)
// 테스트 3 〉	통과 (0.20ms, 33MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
