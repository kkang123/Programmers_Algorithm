// 문자열 my_string이 매개변수로 주어집니다. my_string안의 모든 자연수들의 합을 return하도록 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = 0;
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .map(v => parseInt(v))
        .reduce((a,c)=>a+c)
}
// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.16ms, 33.6MB)
// 테스트 3 〉	통과 (0.14ms, 33.4MB)
// 테스트 4 〉	통과 (0.18ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.6MB)
// 테스트 6 〉	통과 (0.15ms, 33.4MB)