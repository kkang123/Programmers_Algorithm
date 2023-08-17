// 최빈값은 주어진 값 중에서 가장 자주 나오는 값을 의미합니다. 정수 배열 array가 매개변수로 주어질 때, 최빈값을 return 하도록 solution 함수를 완성해보세요. 최빈값이 여러 개면 -1을 return 합니다.

function solution(array) {
  // 1. 배열을 오름차순으로 정렬
  array.sort((a, b) => a - b);

  let maxCount = 0; // 최대 빈도수를 저장할 변수 초기화
  let mostCount = -1; // 최빈값을 저장할 변수 초기화
  let currentCount = 0; // 현재 숫자의 빈도수를 저장할 변수 초기화

  // 2. 배열 데이터의 가장 낮은 순서부터 오른쪽으로 비교
  for (let i = 0; i < array.length; i++) {
    currentCount++;

    // 3. 오른쪽의 요소를 뺐을 때 0이 나오는 요소들을 카운트
    if (i === array.length - 1 || array[i] !== array[i + 1]) {
      if (currentCount > maxCount) {
        maxCount = currentCount;
        mostCount = array[i];
      } else if (currentCount === maxCount) {
        mostCount = -1;
      }
      currentCount = 0;
    }
  }

  return mostCount; // 최빈값 반환
}

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.6MB)
// 테스트 3 〉	통과 (0.16ms, 33.7MB)
// 테스트 4 〉	통과 (0.14ms, 33.6MB)
// 테스트 5 〉	통과 (0.14ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.6MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.15ms, 33.7MB)
// 테스트 9 〉	통과 (0.06ms, 33.6MB)
// 테스트 10 〉	통과 (0.05ms, 33.5MB)
// 테스트 11 〉	통과 (0.06ms, 33.6MB)
// 테스트 12 〉	통과 (0.14ms, 33.6MB)
// 테스트 13 〉	통과 (0.15ms, 33.7MB)
// 테스트 14 〉	통과 (0.17ms, 33.6MB)
// 테스트 15 〉	통과 (0.15ms, 33.6MB)
// 테스트 16 〉	통과 (0.16ms, 33.5MB)
