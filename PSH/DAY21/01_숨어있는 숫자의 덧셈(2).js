// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    return my_string
        .replace(/[A-z]/g, ' ')
        .split(' ')
        .map(v=> v ? parseInt(v) : 0)
        .reduce((a,c)=>a+c,0);
}

// 테스트 1 〉	통과 (0.19ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.3MB)
// 테스트 4 〉	통과 (0.20ms, 33.4MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.3MB)
// 테스트 8 〉	통과 (0.12ms, 33.4MB)
// 테스트 9 〉	통과 (0.13ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)