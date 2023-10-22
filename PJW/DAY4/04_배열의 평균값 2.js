// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소의 평균값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
  let sum = 0; //누적한 값을 변수에 누적해서 저장
  let arr = 0;
  while (arr < numbers.length) {
    sum = sum + numbers[arr];
    arr = arr + 1;
  }
  //sum : 배열의 총 합

  return sum / numbers.length;
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.3MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
