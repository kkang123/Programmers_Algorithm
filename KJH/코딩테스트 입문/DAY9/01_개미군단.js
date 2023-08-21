// DAY 9
// 개미군단

function solution(hp) {
    return parseInt(hp / 5) + parseInt((hp%5)/3) + (hp%5)%3
}

/*
테스트 1 〉	통과 (0.03ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.4MB)
테스트 7 〉	통과 (0.03ms, 33.5MB)
*/