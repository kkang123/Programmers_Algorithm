function solution(n) {
    let result = 0;
    n%7===0 ? result = parseInt(n/7) : result = parseInt(n/7)+1;
    
    
    return result;
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)
// 테스트 10 〉	통과 (0.03ms, 33.5MB)
// 테스트 11 〉	통과 (0.03ms, 33.5MB)