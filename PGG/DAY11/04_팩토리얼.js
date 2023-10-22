function solution(n) {
    let ans = 1;

    for(let i=1; i<=n; i++){
        ans *= i;
        if(ans === n){
            return i;
        }
        
        if(ans > n){
            return i-1;
        }
    }
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.6MB)
// 테스트 4 〉	통과 (0.03ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)