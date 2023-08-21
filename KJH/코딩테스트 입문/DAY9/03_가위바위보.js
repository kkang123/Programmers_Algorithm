// DAY 9
// 가위바위보

function solution(rsp) {
    let arr = {
        2 : 0,
        0 : 5,
        5 : 2
    };
    
    return [...rsp].map(v => arr[v]).join("")
    
}

/*
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (0.08ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.08ms, 33.5MB)
*/