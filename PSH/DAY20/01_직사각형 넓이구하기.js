// 2차원 좌표 평면에 변이 축과 평행한 직사각형이 있습니다. 직사각형 네 꼭짓점의 좌표 [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]가 담겨있는 배열 dots가 매개변수로 주어질 때, 직사각형의 넓이를 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    var answer = 0;
    
    let width = 0;
    let height = 0;
    
    let x1 = dots[0][0];
    let y1 = dots[0][1];
    
    const dot2 = dots.filter((item,i)=> item[0] === x1 && i!==0)
    let y2 = dot2[0][1]
    
    const dot3 = dots.filter((item,i)=> item[1] === y1 && i!==0)
    let x3 = dot3[0][0]
    
    height = Math.abs(y1-y2)
    width = Math.abs(x1-x3)
        
    answer = height * width
    
    return answer;
}

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 31.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 31.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.6MB)