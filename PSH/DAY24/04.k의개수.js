function solution(i, j, k) {
    let answer = 0;

    for (i; i <= j; i++){
        answer += i.toString().split('').filter(v=>v==k).length;
    }
    
    // const bet = [];
    // for (i; i <= j; i++){
    //     bet.push(i);
    // }
    // answer = bet.join('').split('').filter(v=>v==k).length
    return answer;
}

// 테스트 1 〉	통과 (36.70ms, 41MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.3MB)
// 테스트 4 〉	통과 (9.89ms, 36.8MB)
// 테스트 5 〉	통과 (2.58ms, 34.4MB)
// 테스트 6 〉	통과 (0.14ms, 33.3MB)
// 테스트 7 〉	통과 (0.47ms, 33.7MB)
// 테스트 8 〉	통과 (10.33ms, 37.1MB)