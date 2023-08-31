// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string, num1, num2) {
  var answer = "";
  for (let i = 0; i < my_string.length; i++) {
    if (i === num1) {
      answer += my_string[num2];
    } else if (i === num2) {
      answer += my_string[num1];
    } else {
      answer += my_string[i];
    }
  }
  return answer;
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
