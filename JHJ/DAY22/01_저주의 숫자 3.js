// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
// 1	1	6	8
// 2	2	7	10
// 3	4	8	11
// 4	5	9	14
// 5	7	10	16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let result = 0;
  let cnt = 0;

  while (cnt < n) {
    cnt++;
    result++;

    if (result % 3 === 0) {
      result++;
    }

    if (String(result).includes("3")) {
      while (true) {
        result++;
        if (!String(result).includes("3")) {
          if (result % 3 === 0) {
            result++;
          }
          break;
        }
      }
    }
  }

  return result;
}

// 테스트 1 〉	통과 (0.04ms, 33.3MB)
// 테스트 2 〉	통과 (0.04ms, 33.3MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.15ms, 33.5MB)
// 테스트 6 〉	통과 (0.14ms, 33.4MB)
// 테스트 7 〉	통과 (0.14ms, 33.5MB)
// 테스트 8 〉	통과 (0.13ms, 33.4MB)
// 테스트 9 〉	통과 (0.12ms, 33.5MB)
// 테스트 10 〉	통과 (0.11ms, 33.2MB)
// 테스트 11 〉	통과 (0.13ms, 33.4MB)
