// 정확성 테스트 실패
// 실패 이유: 가장 많이 나온 수를 찾는 건데 가장 많이 나온 숫자가 몇 번 나왔는 지 찾아서.
function solution(array) {
  let cnt = {};
  let maxCnt = 0;
  let result = 0;

  array.forEach((x) => {
    // cnt[x] = (cnt[x] || 0) + 1; 이렇게 줄여서 쓰던데 잘 모르겠습니다.
    if (!cnt[x]) {
      cnt[x] = 1;
    } else {
      cnt[x] += 1;
    }
  });

  maxCnt = Math.max(...Object.values(cnt));
  result = Object.keys(cnt).filter((x) => Object.values(cnt)[x - 1] === maxCnt);
  // Object.values(cnt)[x - 1] === maxCnt (X) 실패 원인 코드
  result = result.length === 1 ? parseInt(result) : -1;

  return result;
}

// 테스트 1 〉	실패 (0.10ms, 33.6MB)
// 테스트 2 〉	통과 (0.80ms, 34.4MB)
// 테스트 3 〉	통과 (0.87ms, 34.5MB)
// 테스트 4 〉	실패 (0.22ms, 33.7MB)
// 테스트 5 〉	실패 (0.11ms, 33.6MB)
// 테스트 6 〉	실패 (0.13ms, 33.7MB)
// 테스트 7 〉	통과 (0.12ms, 33.7MB)
// 테스트 8 〉	실패 (0.10ms, 33.7MB)
// 테스트 9 〉	통과 (0.08ms, 33.6MB)
// 테스트 10 〉	실패 (0.10ms, 33.5MB)
// 테스트 11 〉	통과 (0.09ms, 33.6MB)
// 테스트 12 〉	실패 (0.16ms, 33.8MB)
// 테스트 13 〉	통과 (0.16ms, 33.7MB)
// 테스트 14 〉	실패 (0.49ms, 33.9MB)
// 테스트 15 〉	실패 (0.35ms, 33.9MB)
// 테스트 16 〉	실패 (0.52ms, 34.2MB)

// 정확성 테스트 성공
function solution(array) {
  let cnt = {};
  let maxCnt = 0;
  let result = 0;

  // cnt[x] = (cnt[x] || 0) + 1;
  array.forEach((x) => {
    if (!cnt[x]) {
      cnt[x] = 1;
    } else {
      cnt[x] += 1;
    }
  });

  maxCnt = Math.max(...Object.values(cnt));
  result = Object.keys(cnt).filter((x) => cnt[x] === maxCnt);
  //cnt[x] === maxCnt 수정 코드
  result = result.length === 1 ? parseInt(result) : -1;

  return result;
}

// 테스트 1 〉	통과 (0.09ms, 33.6MB)
// 테스트 2 〉	통과 (0.19ms, 33.8MB)
// 테스트 3 〉	통과 (0.19ms, 33.7MB)
// 테스트 4 〉	통과 (0.18ms, 33.6MB)
// 테스트 5 〉	통과 (0.09ms, 33.6MB)
// 테스트 6 〉	통과 (0.11ms, 33.6MB)
// 테스트 7 〉	통과 (0.10ms, 33.7MB)
// 테스트 8 〉	통과 (0.10ms, 33.7MB)
// 테스트 9 〉	통과 (0.08ms, 33.6MB)
// 테스트 10 〉	통과 (0.08ms, 33.6MB)
// 테스트 11 〉	통과 (0.08ms, 33.6MB)
// 테스트 12 〉	통과 (0.11ms, 33.5MB)
// 테스트 13 〉	통과 (0.21ms, 33.8MB)
// 테스트 14 〉	통과 (0.19ms, 33.6MB)
// 테스트 15 〉	통과 (0.19ms, 33.7MB)
// 테스트 16 〉	통과 (0.20ms, 33.7MB)
