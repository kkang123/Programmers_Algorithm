// DAY 8
// 순서쌍의 개수

function solution(n) {
    let result = [];
    
    for(let i = 1; i<= n; i++){
        if(n % i === 0){
            result.push(i)
        }
    }
    return result.length
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (2.28ms, 36.6MB)
테스트 4 〉	통과 (0.05ms, 33.5MB)
테스트 5 〉	통과 (3.13ms, 36.6MB)
테스트 6 〉	통과 (5.62ms, 36.5MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.5MB)
테스트 9 〉	통과 (5.50ms, 36.6MB)
테스트 10 〉 통과 (6.11ms, 36.7MB)
*/