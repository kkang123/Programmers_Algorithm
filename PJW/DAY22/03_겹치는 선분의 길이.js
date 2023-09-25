// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

// line_2.png

// 선분이 두 개 이상 겹친 곳은 [-2, -1], [0, 1]로 길이 2만큼 겹쳐있습니다.

function solution(lines) {
  let line = new Array(200).fill(0);

  for (let i = 0; i < lines.length; i++) {
    let [min, max] = lines[i];
    for (let j = min; j < max; j++) {
      line[j]++;
    }
  }

  let count = 0;
  for (let i = 0; i < line.length; i++) {
    if (line[i] > 1) {
      count++;
    }
  }

  return count;
}

// 테스트 1 〉	통과 (0.26ms, 33.4MB)
// 테스트 2 〉	실패 (0.56ms, 33.5MB)
// 테스트 3 〉	통과 (0.24ms, 33.4MB)
// 테스트 4 〉	실패 (0.41ms, 33.5MB)
// 테스트 5 〉	통과 (0.28ms, 33.5MB)
// 테스트 6 〉	실패 (0.31ms, 33.4MB)
// 테스트 7 〉	통과 (0.22ms, 33.5MB)
// 테스트 8 〉	실패 (0.32ms, 33.5MB)
// 테스트 9 〉	통과 (0.16ms, 33.4MB)
// 테스트 10 〉	통과 (0.15ms, 33.6MB)
