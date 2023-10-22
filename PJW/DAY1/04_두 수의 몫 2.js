// 정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

// 1) 실패
function solution(num1, num2) {
  const answer = num1 / num2;
  return answer;
}

// 테스트 1
// 입력값 〉	10, 5
// 기댓값 〉	2
// 실행 결과 〉	테스트를 통과하였습니다.
// 테스트 2
// 입력값 〉	7, 2
// 기댓값 〉	3
// 실행 결과 〉	실행한 결괏값 3.5이 기댓값 3과 다릅니다.

//정수 num1, num2가 매개변수로 주어질 때, num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.
//정수로 반환

-Math.floor();
//주어진 숫자를 내림해 정수를 반환

//2)-Math.floor() 적용
function solution(num1, num2) {
  const answer = Math.floor(num1 / num2);
  return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.3MB)
// 테스트 4 〉	통과 (0.03ms, 33.2MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.02ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.6MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
// 테스트 11 〉	통과 (0.03ms, 33.6MB)
// 테스트 12 〉	통과 (0.02ms, 33.6MB)
// 테스트 13 〉	통과 (0.03ms, 33.5MB)
// 테스트 14 〉	통과 (0.03ms, 33.6MB)
// 테스트 15 〉	통과 (0.03ms, 33.5MB)
// 테스트 16 〉	통과 (0.03ms, 33.5MB)
