function solution(num_list, n) {
    var answer = [];

    while(num_list.length > 0){
        answer.push(num_list.splice(0, n))
    }
    
    return answer;
}
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.3MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)