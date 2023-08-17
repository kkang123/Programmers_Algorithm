// DAY7
// 짝수의 합

function solution(n) {
    let answer = 0;
    for(let i = 0; i <= n; i++){
        if(i% 2 === 0){
            answer += i;
        }
    }
    return answer
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.6MB)
// 테스트 5 〉	통과 (0.03ms, 33.6MB)
// 테스트 6 〉	통과 (0.03ms, 33.6MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)