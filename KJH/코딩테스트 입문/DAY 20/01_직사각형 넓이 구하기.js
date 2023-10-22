// DAY 20
// 직사각형 넓이 구하기

// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    const [x1, y1] = dots[0];
    const [x2, y2] = dots[1];
    const [x3, y3] = dots[2];
    const [x4, y4] = dots[3];

    dots.sort((a, b) => a - b)

    
    let a1 = Math.abs(y1 - y2)
    let a2 = Math.abs(x1 - x3)
    

 return a1 * a2
}

/*
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.08ms, 33.4MB)
테스트 3 〉	통과 (0.08ms, 33.4MB)
테스트 4 〉	통과 (0.09ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
*/