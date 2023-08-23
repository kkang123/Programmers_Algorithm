// DAY 11
// 팩토리얼

function solution(n) {
    let i = 1;
    let factorial = 1;

    while (factorial <= n) {
        i++;
        factorial *= i;
    }

    return i - 1;
}


/*
테스트 1 〉	통과 (0.03ms, 33.2MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.3MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.4MB)
*/