// 숨어있는 숫자의 덧셈 (1)
// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let result = 0;
    const arr = my_string.match(/[0-9]/g).map(n => (result += Number(n)));
    return result;
}

// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.12ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33MB)
// 테스트 4 〉	통과 (0.15ms, 33.4MB)
// 테스트 5 〉	통과 (0.13ms, 33.2MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)