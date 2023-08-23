function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1);
}

// 테스트 1 〉	통과 (0.04ms, 33.6MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.02ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.6MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)

/*
splice 사용

function solution(numbers, num1, num2) {
    return numbers.splice(num1, num2-num1+1);
}

filter 사용

function solution(numbers, num1, num2) {
    return numbers.filter((n, i) => num1 <= i && i <= num2);
}
*/