function solution(my_string, n) {
  let result = [];

  for (let i = 0; i < my_string.length; i++) {
    result[i] = my_string[i].repeat(n);
  }

  return result.join("");
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
