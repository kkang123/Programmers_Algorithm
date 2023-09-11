// 직사각형 넓이 구하기
// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

/* 실패
function solution(dots) {
    dots = dots.sort();
    let h = dots[1][1] - dots[0][1];
    let w = dots[2][0] - dots[1][0];
    return h*w;
}

테스트 1 〉	실패 (0.06ms, 33.6MB)
테스트 2 〉	통과 (0.04ms, 33.6MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)

틀린이유 : 절댓값을 안 했음!
*/

function solution(dots) {
    dots.sort();
    let h = Math.abs(dots[1][1] - dots[0][1]);
    let w = Math.abs(dots[2][0] - dots[1][0]);
    return h*w;
}

// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.3MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)