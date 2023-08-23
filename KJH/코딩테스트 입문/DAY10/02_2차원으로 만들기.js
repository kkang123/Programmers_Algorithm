// DAY 10
// 2차원으로 만들기

function solution(num_list, n) {
    let answer = [];
    
    for(let i = 0; i < num_list.length; i += n){
        answer.push(num_list.slice(i, i + n))
    }
    
        
    return answer;
}

/*
테스트 1 〉	통과 (0.04ms, 33.6MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.04ms, 33.5MB)
테스트 7 〉	통과 (0.04ms, 33.5MB)
*/