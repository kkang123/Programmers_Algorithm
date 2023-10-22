function solution(numbers) {
    var answer = [];
    for(let i =0; i < numbers.length ; i++){
        answer.push(numbers[i] * 2);
    }
    return answer;
}

// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.12ms, 33.7MB)
// 테스트 7 〉	통과 (0.11ms, 33.7MB)
// 테스트 8 〉	통과 (0.12ms, 33.7MB)
// 테스트 9 〉	통과 (0.12ms, 33.5MB)
// 테스트 10 〉	통과 (0.09ms, 33.6MB)
