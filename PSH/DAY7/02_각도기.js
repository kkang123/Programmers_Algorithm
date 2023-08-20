function solution(angle) {
    var answer = 0;
    switch(true) {
        case (angle > 0 && angle < 90):
            answer = 1;
            break;
        case (angle == 90):
            answer = 2;
            break;
        case (angle > 90 && angle < 180):
            answer = 3;
            break;
        case (angle >= 180):
            answer = 4;
            break;
    }
    return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)