//이진수 더하기
// 이진수를 의미하는 두 개의 문자열 bin1과 bin2가 매개변수로 주어질 때, 두 이진수의 합을 return하도록 solution 함수를 완성해주세요.

function solution(bin1, bin2) {
    let b1=parseInt(bin1, 2);
    let b2 =parseInt(bin2, 2);
    return (b1+b2).toString(2);
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.5MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.03ms, 33.4MB)
// 테스트 8 〉	통과 (0.03ms, 33.5MB)
// 테스트 9 〉	통과 (0.03ms, 33.4MB)