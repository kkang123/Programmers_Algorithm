// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  return my_string.replace(/a|e|i|o|u/g, "");
}

// 테스트 1 〉	통과 (0.17ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.4MB)
