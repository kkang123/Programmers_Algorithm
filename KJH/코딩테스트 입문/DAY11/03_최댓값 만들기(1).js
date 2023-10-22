// DAY11
// 최댓값 만들기(1)

function solution(numbers) {
    numbers.sort((a, b) => (a-b));
    let last = numbers[numbers.length - 1];
    let last_2 =  numbers[numbers.length - 2];
    
    return last * last_2
}

/*
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.1MB)
테스트 4 〉	통과 (0.04ms, 33.1MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.3MB)
테스트 7 〉	통과 (0.04ms, 33.4MB)
테스트 8 〉	통과 (0.05ms, 33.4MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.05ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.05ms, 33.4MB)
테스트 13 〉	통과 (0.05ms, 33.4MB)
테스트 14 〉	통과 (0.05ms, 33.5MB)
테스트 15 〉	통과 (0.05ms, 33.4MB)
*/