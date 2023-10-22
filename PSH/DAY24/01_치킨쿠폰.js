function solution(chicken) {
    var answer = 0;
    let 쿠폰 = chicken;
    while(쿠폰 >= 10){
        answer += parseInt(쿠폰/10);
        쿠폰 = 쿠폰 - (parseInt(쿠폰/10)*10) + parseInt(쿠폰/10);
    }
    return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.04ms, 33.6MB)
// 테스트 10 〉	통과 (0.04ms, 33.5MB)