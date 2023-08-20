function solution(hp) {
    var answer = 0;
    
    let afterGeneral = hp%5
    answer += parseInt(hp/5)
    
    let afterSoldier = afterGeneral%3
    answer += parseInt(afterGeneral/3)
    
    let afterErgate = afterSoldier%1
    answer += parseInt(afterSoldier/1)
    
    return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.3MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.4MB)
// 테스트 7 〉	통과 (0.04ms, 33.3MB)