// DAY 8
// 배열자르기

function solution(numbers, num1, num2) {
    let answer = [];
    answer = numbers;
    
    return answer.slice(num1, num2 + 1);
}

/*
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.5MB)
테스트 5 〉	통과 (0.04ms, 33.6MB)
*/