function solution(n) {
    let cnt = 0;
    let answer = 0;
    for (let i =  4; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) cnt ++;
        }
        if (cnt >= 3) answer++;
        cnt = 0;
    }
    return answer;
}

// 테스트 1 〉	통과 (0.19ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (0.11ms, 33.6MB)
