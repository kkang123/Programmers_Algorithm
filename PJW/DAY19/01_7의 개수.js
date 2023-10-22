// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
  let cnt = 0;
  for (let i = 0; i < array.length; i++) {
    const item = String(array[i]);
    for (let n = 0; n < item.length; n++) {
      const seven = item[n];
      if (seven === "7") {
        cnt++;
      }
    }
  }
  return cnt;
}

// 테스트 1 〉	통과 (0.12ms, 33.3MB)
// 테스트 2 〉	통과 (0.05ms, 33.1MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.12ms, 33.5MB)
