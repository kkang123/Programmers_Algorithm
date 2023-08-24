function solution(n) {
    var answer = 0;
    if(n<3){return 0}
    
    for(let i = 4; i <= n; i++){
        let count = 0;
        for(let j = 1; j <= i; j++){
            if(i%j == 0){
                count++;
            }
        }
        if(count >= 3){
            answer++;
        }
    }
    
    return answer;
}

// 테스트 1 〉	통과 (0.23ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.6MB)
// 테스트 5 〉	통과 (0.31ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.4MB)