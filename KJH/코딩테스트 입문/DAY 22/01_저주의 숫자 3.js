// DAY 22
// 저주의 숫자 3

// 3x 마을 사람들은 3을 저주의 숫자라고 생각하기 때문에 3의 배수와 숫자 3을 사용하지 않습니다. 3x 마을 사람들의 숫자는 다음과 같습니다.
// 정수 n이 매개변수로 주어질 때, n을 3x 마을에서 사용하는 숫자로 바꿔 return하도록 solution 함수를 완성해주세요.

function solution(n) {
    let answer = 0;

    for (let i = 0; i < n; i++) {
        answer++;
        while (answer % 3 === 0 || answer.toString().includes('3')) {
            answer++;
        }
    }

    return answer;
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.04ms, 33.3MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.14ms, 33.4MB)
테스트 5 〉	통과 (0.19ms, 33.3MB)
테스트 6 〉	통과 (0.12ms, 33.5MB)
테스트 7 〉	통과 (0.13ms, 33.5MB)
테스트 8 〉	통과 (0.12ms, 33.3MB)
테스트 9 〉	통과 (0.12ms, 33.4MB)
테스트 10 〉	통과 (0.11ms, 33.4MB)
테스트 11 〉	통과 (0.12ms, 33.4MB)
*/