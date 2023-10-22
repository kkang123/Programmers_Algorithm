function solution(before, after) {
    var answer = 1;
    // after = after.split('')
    // before.split('').forEach(v=>{
    //     if(after.includes(v)){
    //         after.splice(after.indexOf(v), 1);
    //     }else{
    //         answer = 0;
    //     }
    // });
    
    for(let i = 0; i<before.length; i++){
        if(after.includes(before[i])){
            let idx = after.indexOf(before[i])
            after = after.slice(0,idx).concat(after.slice(idx+1));
        }else{
            answer = 0;
        }
    }
    return answer;
}

// 테스트 1 〉	통과 (0.14ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.15ms, 33.6MB)
// 테스트 4 〉	통과 (0.15ms, 33.4MB)
// 테스트 5 〉	통과 (0.71ms, 34MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.12ms, 33.5MB)
// 테스트 8 〉	통과 (0.27ms, 33.6MB)
// 테스트 9 〉	통과 (0.06ms, 33.5MB)
// 테스트 10 〉	통과 (0.21ms, 33.6MB)
// 테스트 11 〉	통과 (0.98ms, 34MB)
// 테스트 12 〉	통과 (0.68ms, 34.1MB)
// 테스트 13 〉	통과 (0.06ms, 33.4MB)
// 테스트 14 〉	통과 (0.05ms, 33.5MB)
// 테스트 15 〉	통과 (0.39ms, 33.6MB)
// 테스트 16 〉	통과 (0.51ms, 33.7MB)
// 테스트 17 〉	통과 (0.53ms, 33.7MB)
// 테스트 18 〉	통과 (1.04ms, 33.9MB)
// 테스트 19 〉	통과 (0.71ms, 34MB)
// 테스트 20 〉	통과 (1.06ms, 34.1MB)
// 테스트 21 〉	통과 (0.75ms, 34.2MB)
// 테스트 22 〉	통과 (0.09ms, 33.4MB)
// 테스트 23 〉	통과 (0.05ms, 33.5MB)