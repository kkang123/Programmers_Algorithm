// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let result = "";

  for (let i = 0; i < my_string.length; i++) {
    let char = my_string[i];
    if (char === char.toUpperCase()) {
      result += char.toLowerCase();
    } else {
      result += char.toUpperCase();
    }
  }

  return result;
}

// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.13ms, 33.6MB)
// 테스트 3 〉	통과 (0.13ms, 33.7MB)
// 테스트 4 〉	통과 (0.14ms, 33.5MB)
// 테스트 5 〉	통과 (0.26ms, 33.6MB)
// 테스트 6 〉	통과 (0.31ms, 33.6MB)
// 테스트 7 〉	통과 (0.31ms, 33.8MB)
