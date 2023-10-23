// 문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다. 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요.

function solution(A, B) {
  let cnt = 0;

  while (cnt <= B.length) {
    if (A === B) {
      break;
    }
    let str = A[A.length - 1];
    A = str + A.substr(0, A.length - 1);
    console.log(A);
    cnt++;
  }

  return cnt <= B.length ? cnt : -1;
}

// 테스트 1 〉	통과 (3.31ms, 33.5MB)
// 테스트 2 〉	통과 (3.25ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (3.50ms, 33.6MB)
// 테스트 5 〉	통과 (2.60ms, 33.4MB)
// 테스트 6 〉	통과 (2.83ms, 33.5MB)
// 테스트 7 〉	통과 (2.46ms, 33.4MB)
// 테스트 8 〉	통과 (3.02ms, 33.4MB)
