// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  const numbersArr = numbers.sort((a, b) => b - a);
  const maxNum = numbersArr[0] * numbersArr[1];
  return maxNum;
}

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.5MB)
// 테스트 10 〉	통과 (0.06ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.4MB)
// 테스트 13 〉	통과 (0.04ms, 33.4MB)
// 테스트 14 〉	통과 (0.07ms, 33.5MB)
// 테스트 15 〉	통과 (0.04ms, 33.4MB)
