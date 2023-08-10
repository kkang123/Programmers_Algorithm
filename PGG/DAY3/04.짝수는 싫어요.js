function solution(n) {
    const ans = [];
    for(let i=1; i<=n; i+=2){
        ans.push(i);
    }
    return ans;
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.6MB)
// 테스트 5 〉	통과 (0.06ms, 33.6MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)