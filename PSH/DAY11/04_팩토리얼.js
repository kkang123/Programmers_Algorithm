function solution(n) {
    var answer = 1;
    let i = 1;
    while(answer <= n){
        answer *= i;
        i++;
    }
    return i-2;
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 33.7MB)
// 테스트 4 〉	통과 (0.04ms, 33.6MB)
// 테스트 5 〉	통과 (0.03ms, 33.6MB)
// 테스트 6 〉	통과 (0.06ms, 33.6MB)