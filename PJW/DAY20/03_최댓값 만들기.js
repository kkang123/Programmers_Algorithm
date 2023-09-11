// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

// 실패 (음수일때 적용이 안됨 테스트케이스 1번)
// function solution(numbers) {
//   numbers.sort((a, b) => b - a);
//   const result = numbers[0] * numbers[1];
//   return result;
// }

function solution(numbers) {
  let maxNum = numbers[0] * numbers[1];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const newMax = numbers[i] * numbers[j];
      if (newMax > maxNum) {
        maxNum = newMax;
      }
    }
  }

  return maxNum;
}

// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.29ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.13ms, 33.4MB)
// 테스트 12 〉	통과 (0.13ms, 33.6MB)
