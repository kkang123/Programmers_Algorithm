// DAY 24
// A로 B 만들기

function solution(before, after) {
    let answer = 0;
    let cnt = 0;
    for (let i = 0; i < before.length; i++) {
        if (before.split("").filter(char => char === before[i]).length === after.split("").filter(char => char === before[i]).length) {
        cnt++;
        }
    }
    if (cnt === before.length) {
        answer = 1;
    }
    return answer;
    }
    
/*
테스트 1 〉	통과 (0.19ms, 33.6MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.26ms, 33.5MB)
테스트 4 〉	통과 (0.19ms, 33.6MB)
테스트 5 〉	통과 (59.08ms, 37.9MB)
테스트 6 〉	통과 (0.19ms, 33.5MB)
테스트 7 〉	통과 (0.23ms, 33.5MB)
테스트 8 〉	통과 (9.90ms, 37.8MB)
테스트 9 〉	통과 (0.17ms, 33.6MB)
테스트 10 〉	통과 (5.66ms, 37.2MB)
테스트 11 〉	통과 (43.47ms, 37.9MB)
테스트 12 〉	통과 (55.30ms, 38MB)
테스트 13 〉	통과 (0.07ms, 33.7MB)
테스트 14 〉	통과 (0.17ms, 33.5MB)
테스트 15 〉	통과 (6.61ms, 37.4MB)
테스트 16 〉	통과 (17.39ms, 37.9MB)
테스트 17 〉	통과 (13.72ms, 37.9MB)
테스트 18 〉	통과 (43.66ms, 37.9MB)
테스트 19 〉	통과 (48.73ms, 37.9MB)
테스트 20 〉	통과 (49.18ms, 38MB)
테스트 21 〉	통과 (48.02ms, 38MB)
테스트 22 〉	통과 (0.15ms, 33.6MB)
테스트 23 〉	통과 (0.15ms, 33.5MB)
*/