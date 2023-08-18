function solution(angle) {
    const ans = (angle > 0 && angle < 90) ? 1
    : (angle === 90) ? 2
    : (angle > 90 && angle < 180) ? 3
    : (angle === 180) ? 4
    : 5;
    return ans;
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)

/*
case 사용한 풀이
function solution(angle) {
    switch(angle) {
        case 90: return 2;
        case 180: return 4;
        default:
            return angle > 0 && angle < 90 ? 1 : 3;
    }
}
*/