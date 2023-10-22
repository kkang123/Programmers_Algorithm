function solution(my_string, letter) {
  let result = [...my_string].filter((v) => v !== letter).join("");
  return result;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)
// 테스트 10 〉	통과 (0.07ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.08ms, 33.5MB)
// 테스트 14 〉	통과 (0.05ms, 33.5MB)
// 테스트 15 〉	통과 (0.08ms, 33.4MB)
// 테스트 16 〉	통과 (0.09ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.06ms, 33.5MB)
// 테스트 19 〉	통과 (0.06ms, 33.5MB)
// 테스트 20 〉	통과 (0.05ms, 33.4MB)

// 다른 사람 풀이
// split(): 구분자를 기준으로 문자열을 잘라 배열로 입력할 때 사용하는 메서드
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}
