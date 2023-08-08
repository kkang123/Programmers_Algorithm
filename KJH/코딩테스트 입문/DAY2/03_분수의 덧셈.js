// Day 2
// 03_분수의 덧셈

function solution(numer1, denom1, numer2, denom2) {
    const answer = [];
    
    // a 분자
    const a = numer1 * denom2 + numer2 * denom1;
    // b 분모
    const b = denom1 * denom2;
    
    // 나머지가 0이면 b를 반환
    // 0이 아니면 b % 나머지 값을 계산
    const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b ));
    
    answer[0] = a / gcd(a, b)
    answer[1] = b / gcd(a, b)
    return answer;
}



/*
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33.4MB)
테스트 3 〉	통과 (0.06ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.4MB)
테스트 9 〉	통과 (0.06ms, 33.4MB)
테스트 10 〉	통과 (0.08ms, 33.4MB)
테스트 11 〉	통과 (0.06ms, 33.3MB)
테스트 12 〉	통과 (0.07ms, 33.3MB)
테스트 13 〉	통과 (0.07ms, 33.5MB)
테스트 14 〉	통과 (0.06ms, 33.5MB)
테스트 15 〉	통과 (0.06ms, 33.5MB)
*/