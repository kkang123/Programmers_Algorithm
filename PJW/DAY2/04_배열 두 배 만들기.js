// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  return numbers.map((item) => item * 2);
}

// 테스트 1 〉	통과 (0.04ms, 33.1MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.3MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.10ms, 33.7MB)
// 테스트 7 〉	통과 (0.10ms, 33.8MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.05ms, 33.6MB)
// 테스트 10 〉	통과 (0.06ms, 33.6MB)
