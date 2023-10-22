// 영어 대소문자로 이루어진 문자열 my_string이 매개변수로 주어질 때, my_string을 모두 소문자로 바꾸고 알파벳 순서대로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요.

function solution(my_string) {
  var answer = "";
  return my_string.toLowerCase().split("").sort().join("");
}

// 테스트 1 〉	통과 (0.03ms, 33.3MB)
// 테스트 2 〉	통과 (0.03ms, 33.3MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
