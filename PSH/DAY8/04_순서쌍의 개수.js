function solution(n) {
    var answer = 0;
    for(let i = 0; i <= n; i++){
        if(n%i==0){
            answer++;
        }
    }
    return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.3MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (21.85ms, 36.3MB)
// 테스트 4 〉	통과 (0.03ms, 33.3MB)
// 테스트 5 〉	통과 (45.84ms, 36.3MB)
// 테스트 6 〉	통과 (5.32ms, 36.3MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (5.10ms, 36.3MB)
// 테스트 10 〉	통과 (5.35ms, 36.3MB)