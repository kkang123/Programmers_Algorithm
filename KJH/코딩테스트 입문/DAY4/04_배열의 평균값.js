// DAY4
// 배열의 평균값

function solution(numbers) {
    let answer =  0;
    numbers.forEach(v => {
        answer += v;
    })
    
    answer = answer / numbers.length
    
    
    return answer;
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
*/