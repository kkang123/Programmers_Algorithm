function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    //전체 다 곱하기
    let a = numer1 * denom2 + numer2 * denom1
    let b = denom1 * denom2
    let maximum = 1
    
    //최소 공약수 찾기
    for (let i = 1; i <= a; i++) {
        if(a % i === 0 && b % i === 0) {
            maximum = i
        }
    }
    return [a / maximum, b / maximum]
    
    return answer;
}

// 테스트 1 〉	통과 (3.55ms, 36.4MB)
// 테스트 2 〉	통과 (0.16ms, 33.4MB)
// 테스트 3 〉	통과 (0.15ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.13ms, 33.5MB)
// 테스트 6 〉	통과 (12.69ms, 36.4MB)
// 테스트 7 〉	통과 (6.33ms, 36.4MB)
// 테스트 8 〉	통과 (4.06ms, 36.3MB)
// 테스트 9 〉	통과 (27.86ms, 36.4MB)
// 테스트 10 〉	통과 (2.87ms, 36.4MB)
// 테스트 11 〉	통과 (0.14ms, 33.4MB)
// 테스트 12 〉	통과 (0.16ms, 33.5MB)
// 테스트 13 〉	통과 (0.15ms, 33.6MB)
// 테스트 14 〉	통과 (0.20ms, 33.4MB)
// 테스트 15 〉	통과 (0.46ms, 33.5MB)