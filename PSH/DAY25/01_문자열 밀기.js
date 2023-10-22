function solution(A, B) {
    var answer = 0;
    for(let i=0; i<A.length; i++){
        if(A == B){
            return answer;
        }else{
            A = A.slice(-1).concat(A.slice(0,-1));
            answer++;
        }
    }
    return answer == A.length ? -1 : answer;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.1MB)
// 테스트 6 〉	통과 (0.07ms, 33.1MB)
// 테스트 7 〉	통과 (0.12ms, 33.4MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)