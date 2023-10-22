// 문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.

function solution(my_string) {
  const numbers = [...my_string]
    .map((str) => parseInt(str))
    .filter((num) => !isNaN(num));
  numbers.sort((a, b) => a - b);
  return numbers;
}

// 테스트 1 〉	통과 (0.13ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.4MB)
// 테스트 3 〉	통과 (0.22ms, 33.4MB)
// 테스트 4 〉	통과 (0.23ms, 33.5MB)
