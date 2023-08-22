function solution(numbers, num1, num2) {
    var answer = [];
    answer = numbers.slice(num1, num2+1)
    return answer;
}

// 테스트 1 〉	통과 (0.03ms, 33.3MB)
// 테스트 2 〉	통과 (0.03ms, 33.3MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)