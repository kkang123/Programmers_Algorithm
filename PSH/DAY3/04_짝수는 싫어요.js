function solution(n) {
    return Array(n)
        .fill(0)
        .map((v, i)=>i+1)
        .filter(v=>v<=n&&v%2==1)
        .sort((a,b)=>a-b,0);
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.5MB)
// 테스트 3 〉	통과 (0.16ms, 33MB)
// 테스트 4 〉	통과 (0.14ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.3MB)
// 테스트 6 〉	통과 (0.14ms, 33.4MB)
// 테스트 7 〉	통과 (0.13ms, 33.3MB)
// 테스트 8 〉	통과 (0.13ms, 33.4MB)