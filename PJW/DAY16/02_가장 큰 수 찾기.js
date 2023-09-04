// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let maxNum = array[0];
  let maxInd = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] > maxNum) {
      maxNum = array[i];
      maxInd = i;
    }
  }

  return [maxNum, maxInd];
}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
