function solution(numbers, direction) {
  direction === "left"
    ? numbers.push(numbers.shift())
    : numbers.unshift(numbers.pop());

  return numbers;
}

// 테스트 1 〉	통과 (0.05ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
