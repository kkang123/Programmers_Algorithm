function solution(my_string, n) {
    var answer = '';
    my_string.split('').forEach((item, index, arr)=>{
        for(let i = 0; i < n; i++) {
            answer+=item;
        }
    })
    return answer;
}

// 테스트 1 〉	통과 (0.09ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.10ms, 33.4MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)