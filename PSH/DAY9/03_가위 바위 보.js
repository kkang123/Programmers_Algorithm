function solution(rsp) {
    var answer = '';
    let rspArr = rsp.split('');
    rspArr.forEach(v=>{
        if(v == 0){
            answer += 5
        }else if(v == 5){
            answer += 2
        }else if(v == 2){
            answer += 0
        }
    })
    return answer;
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.6MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.05ms, 33.6MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)