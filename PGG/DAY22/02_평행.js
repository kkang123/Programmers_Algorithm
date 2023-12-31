// 평행
// 점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.

// [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
// 주어진 네 개의 점을 두 개씩 이었을 때, 두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 return 하도록 solution 함수를 완성해보세요.

function solution(dots) {
    // 선분이 평행하다는 것 == 기울기가 같다는 것
    // 기울기는 y1-y2 ÷ x1-x2
    
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    
    // 1 - 2, 3 - 4
    if((y1 - y2) / (x1 - x2) === (y3 - y4) / (x3 - x4)) return 1;
    // 1 - 3, 2 - 4
    if((y1 - y3) / (x1 - x3) === (y2 - y4) / (x2 - x4)) return 1;
    // 1 - 4, 2 - 3
    if((y1 - y4) / (x1 - x4) === (y2 - y3) / (x2 - x3)) return 1;
    
    return 0;
}

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.10ms, 33.4MB)
// 테스트 9 〉	통과 (0.07ms, 33.4MB)
// 테스트 10 〉	통과 (0.09ms, 33.4MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)
// 테스트 12 〉	통과 (0.07ms, 33.5MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.5MB)
// 테스트 15 〉	통과 (0.06ms, 33.5MB)
// 테스트 16 〉	통과 (0.06ms, 33.5MB)
// 테스트 17 〉	통과 (0.07ms, 33.4MB)