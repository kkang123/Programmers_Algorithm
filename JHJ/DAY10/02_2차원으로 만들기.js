function solution(num_list, n) {
  let leng = num_list.length / n;
  let result = [];
  let num = n;

  for (let i = 0; i < leng; i++) {
    result[i] = num_list.slice(i * n, num);
    num += n;
  }

  return result;
}

// 테스트 1 〉	통과 (0.04ms, 33.2MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.2MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
