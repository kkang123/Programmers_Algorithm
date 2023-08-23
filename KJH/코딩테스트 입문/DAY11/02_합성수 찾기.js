// DAY 11
// 합성수 찾기

function solution(n) {
    const arr = [];

    for (let i = 1; i <= n; i++) {
        const count = [];

        for (let j = 2; j <= i ; j++) {
            if (i % j === 0) {
                count.push(i % j);
            }
        }

        if (count.length >= 2) {
            arr.push(i);
        }
    }

    return arr.length;
}

/*
테스트 1 〉	통과 (0.23ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.3MB)
테스트 5 〉	통과 (0.23ms, 33.3MB)
테스트 6 〉	통과 (0.12ms, 33.4MB)
*/