function solution(money) {
    var answer = [];
    let cupNum = Math.trunc(money/5500);
    let change = money%5500;
    answer = [cupNum, change];
    return answer;
}

function solution(money) {
    return [Math.trunc(money/5500), money%5500];
}

// 테스트 1 〉	통과 (0.06ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.02ms, 33.4MB)