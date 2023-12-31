// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.

// 10진법	3x 마을에서 쓰는 숫자	10진법	3x 마을에서 쓰는 숫자
// 1	1	6	8
// 2	2	7	10
// 3	4	8	11
// 4	5	9	14
// 5	7	10	16
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  let arr = [];

  for (let i = 0; i < 10000; i++) {
    if (i % 3 !== 0 && !i.toString().split("").includes("3")) {
      arr.push(i);
    }
  }
  return arr[n - 1];
}

// 테스트 1 〉	통과 (4.77ms, 37.4MB)
// 테스트 2 〉	통과 (4.09ms, 37.5MB)
// 테스트 3 〉	통과 (3.95ms, 37.3MB)
// 테스트 4 〉	통과 (4.14ms, 37.3MB)
// 테스트 5 〉	통과 (6.62ms, 37.5MB)
// 테스트 6 〉	통과 (3.94ms, 37.5MB)
// 테스트 7 〉	통과 (3.93ms, 37.3MB)
// 테스트 8 〉	통과 (4.97ms, 37.3MB)
// 테스트 9 〉	통과 (4.87ms, 37.3MB)
// 테스트 10 〉	통과 (6.20ms, 37.4MB)
// 테스트 11 〉	통과 (3.92ms, 37.3MB)
