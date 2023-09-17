// DAY 21
// 안전지대

// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.

function solution(board) {
    const n = board.length; // 배열의 크기 (n x n)
    let Count = 0; // 안전한 지역의 칸 수를 저장하는 변수

    // 모든 칸을 순회
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] === 0) {
                // 주변 지뢰 좌표
                const dx = [-1, 0, 1, -1, 1, -1, 0, 1];
                const dy = [-1, -1, -1, 0, 0, 1, 1, 1];

                let Safe = true; // 현재 칸이 안전한지
                for (let k = 0; k < 8; k++) { // 주변 확인
                    const newX = i + dx[k]; // 행 좌표
                    const newY = j + dy[k]; // 열 좌표

                    // 주변 칸이 배열 범위 내에 있고, 주변 칸이 지뢰(1)인 경우
                    if (newX >= 0 && newX < n && newY >= 0 && newY < n && board[newX][newY] === 1) {
                        Safe = false; // 주변에 지뢰가 있으면 현재 칸은 안전하지 않음
                        break; // 안전하지 않으면 멈춤
                    }
                }

                if (Safe) {
                    Count++; // 주변에 지뢰가 없으면 현재 칸은 안전함
                }
            }
        }
    }

    return Count;
}

/*
테스트 1 〉	통과 (0.15ms, 33.5MB)
테스트 2 〉	통과 (0.26ms, 33.5MB)
테스트 3 〉	통과 (0.14ms, 33.5MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.15ms, 33.4MB)
테스트 6 〉	통과 (0.19ms, 33.5MB)
테스트 7 〉	통과 (0.18ms, 33.5MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.14ms, 33.4MB)
테스트 11 〉	통과 (0.06ms, 33.4MB)
테스트 12 〉	통과 (0.15ms, 33.6MB)
테스트 13 〉	통과 (0.14ms, 33.5MB)
테스트 14 〉	통과 (0.13ms, 33.5MB)
*/