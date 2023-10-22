// DAY 25
// 연속된 수의 합

// 문제 설명
// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  let d = 0;
  for (var i = 1; i < num; i++) {
    d += i;
  }

  let start = Math.floor((total - d) / num);

  let answer = [];
  for (var i = start; i < start + num; i++) {
    answer.push(i);
  }

  return answer;
}

/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.07ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.6MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.4MB)
테스트 7 〉	통과 (0.04ms, 33.1MB)
테스트 8 〉	통과 (0.04ms, 33.1MB)
테스트 9 〉	통과 (0.12ms, 33.5MB)
테스트 10 〉	통과 (0.12ms, 33.5MB)
*/
