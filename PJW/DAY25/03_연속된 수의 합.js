// 연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 두 정수 num과 total이 주어집니다. 연속된 수 num개를 더한 값이 total이 될 때, 정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

function solution(num, total) {
  const result = [];

  for (let i = -1000; i <= 1000 - num; i++) {
    let sum = 0;
    const newArr = [];

    for (let j = 0; j < num; j++) {
      newArr.push(i + j);
      sum += i + j;
    }

    if (sum === total) {
      result.push(...newArr);
    }
  }

  return result;
}

// 여러분이 〉	통과 (0.49ms, 33.9MB)
// 이글을 〉	통과 (2.48ms, 37.1MB)
// 발견할까? 〉	통과 (2.45ms, 37MB)
// 궁금한 〉	통과 (0.69ms, 33.8MB)
// 마음에 〉	통과 (4.16ms, 37MB)
// 짧지만 〉	통과 (7.67ms, 37.6MB)
// 적었어요 〉	통과 (0.46ms, 33.8MB)
// 그동안 〉	통과 (0.63ms, 33.9MB)
// 정말로 〉	통과 (6.20ms, 38MB)
// 고생했어요 〉	통과 (7.01ms, 37.9MB)
