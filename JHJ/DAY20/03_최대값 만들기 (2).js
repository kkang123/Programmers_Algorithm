// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let result;

  numbers.forEach((a, ai) => {
    numbers.forEach((b, bi) => {
      if (ai !== bi) {
        result >= a * b ? result : (result = a * b);
      }
    });
  });

  return result;
}

// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.78ms, 35.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.4MB)
// 테스트 11 〉	통과 (0.07ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.4MB)
