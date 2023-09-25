// DAY 21
// 숨어있는 숫자의 덧셈 (2)

// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let found = my_string.match(/\d+/g);

    return found ? found.reduce((a, c) => a + parseInt(c), 0) : 0;
}

/*
테스트 1 〉	통과 (0.13ms, 33.5MB)
테스트 2 〉	통과 (0.12ms, 33.5MB)
테스트 3 〉	통과 (0.16ms, 33.6MB)
테스트 4 〉	통과 (0.12ms, 33.6MB)
테스트 5 〉	통과 (0.14ms, 33.4MB)
테스트 6 〉	통과 (0.12ms, 33.4MB)
테스트 7 〉	통과 (0.13ms, 33.6MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
테스트 9 〉	통과 (0.12ms, 33.4MB)
테스트 10 〉	통과 (0.15ms, 33.4MB)
*/