// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

// line_2.png

// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

function solution(lines) {
  let cnt = 1;
  let result = {};

  lines.forEach(([start, end]) => {
    for (let i = start; i < end; i++) {
      if (result[i] >= 1) {
        result[i] += 1;
      } else {
        result[i] = 1;
      }
    }
  });

  return Object.entries(result).filter(([key, value]) => value > 1).length;
}

// 테스트 1 〉	통과 (0.66ms, 33.5MB)
// 테스트 2 〉	통과 (0.73ms, 33.7MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.54ms, 33.6MB)
// 테스트 5 〉	통과 (0.27ms, 33.4MB)
// 테스트 6 〉	통과 (0.38ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.6MB)
// 테스트 8 〉	통과 (0.44ms, 33.5MB)
// 테스트 9 〉	통과 (0.29ms, 33.4MB)
// 테스트 10 〉	통과 (0.19ms, 33.4MB)
