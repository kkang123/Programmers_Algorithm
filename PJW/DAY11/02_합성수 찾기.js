// 약수의 개수가 세 개 이상인 수를 합성수라고 합니다. 자연수 n이 매개변수로 주어질 때 n이하의 합성수의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(n) {
  const hapNum = [];

  for (let num = 0; num <= n; num++) {
    let yakNum = 0;
    for (let i = 0; i <= num; i++) {
      if (num % i === 0) {
        yakNum++;
      }
    }
    if (yakNum >= 3) {
      hapNum.push(num);
    }
  }

  return hapNum.length;
}

// 테스트 1 〉	통과 (0.27ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.21ms, 33.4MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
