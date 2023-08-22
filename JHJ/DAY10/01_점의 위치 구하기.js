function solution(dot) {
  return dot[0] > 0 && dot[1] > 0
    ? 1
    : dot[0] < 0 && dot[1] > 0
    ? 2
    : dot[0] < 0 && dot[1] < 0
    ? 3
    : 4;
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.3MB)
// 테스트 8 〉	통과 (0.03ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.03ms, 33.4MB)
// 테스트 12 〉	통과 (0.03ms, 33.4MB)
// 테스트 13 〉	통과 (0.03ms, 33.4MB)
// 테스트 14 〉	통과 (0.03ms, 33.5MB)
// 테스트 15 〉	통과 (0.03ms, 33.5MB)
// 테스트 16 〉	통과 (0.03ms, 33.4MB)

// (다른 사람 풀이) 구조분해 풀이 법
// 배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식
// https://velog.io/@tnstjd120/%EA%B5%AC%EC%A1%B0-%EB%B6%84%ED%95%B4-%ED%95%A0%EB%8B%B9Destructuring-Assignment
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}
