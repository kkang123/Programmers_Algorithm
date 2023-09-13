// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// image.png
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function solution(board) {
  let result = 0;
  let test = 0;

  board.forEach((a, x) => {
    a.forEach((b, y) => {
      if (b === 1) {
        if (x !== 0) {
          if (board[x - 1][y - 1] === 0) {
            board[x - 1].splice(y - 1, 1, 2);
          }
          if (board[x - 1][y] === 0) {
            board[x - 1].splice(y, 1, 2);
          }
          if (board[x - 1][y + 1] === 0) {
            board[x - 1].splice(y + 1, 1, 2);
          }
        }
        if (board[x][y - 1] === 0) {
          board[x][y - 1] = 2;
        }
        if (board[x][y + 1] === 0) {
          board[x][y + 1] = 2;
        }
        if (x !== board.length - 1) {
          if (board[x + 1][y - 1] === 0) {
            board[x + 1].splice(y - 1, 1, 2);
          }
          if (board[x + 1][y] === 0) {
            board[x + 1].splice(y, 1, 2);
          }
          if (board[x + 1][y + 1] === 0) {
            board[x + 1].splice(y + 1, 1, 2);
          }
        }
      }
    });
  });

  board.forEach((v) => {
    v.forEach((sv) => {
      if (sv === 0) {
        result += 1;
      }
    });
  });

  return result;
}

// 테스트 1 〉	통과 (0.15ms, 33.3MB)
// 테스트 2 〉	통과 (0.13ms, 33.4MB)
// 테스트 3 〉	통과 (0.17ms, 33.4MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.15ms, 33.4MB)
// 테스트 6 〉	통과 (0.22ms, 33.4MB)
// 테스트 7 〉	통과 (0.24ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.5MB)
// 테스트 9 〉	통과 (0.15ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)
// 테스트 11 〉	통과 (0.16ms, 33.4MB)
// 테스트 12 〉	통과 (0.16ms, 33.5MB)
// 테스트 13 〉	통과 (0.14ms, 33.3MB)
// 테스트 14 〉	통과 (0.36ms, 33.5MB)
