function factorial(num) {
  if (num <= 1) {
    return num;
  }
  return num * factorial(num - 1);
}

function solution(n) {
  let result = 0;
  for (;;) {
    result++;
    if (factorial(result) > n) {
      return --result;
    }
  }
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.7MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
