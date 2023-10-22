// DAY 24
// k의 개수

// 문제 설명
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
    let answer = 0;
    
    for (let num = i; num <= j; num++) {
        const numString = num.toString();
        for (let c of numString) {
        if (c === k.toString()) {
            answer += 1;
        }
        }
    }
    
    return answer;
    }

/*
테스트 1 〉	통과 (19.87ms, 38.1MB)
테스트 2 〉	통과 (0.07ms, 33.5MB)
테스트 3 〉	통과 (0.05ms, 33.6MB)
테스트 4 〉	통과 (4.65ms, 37.3MB)
테스트 5 〉	통과 (6.28ms, 37.2MB)
테스트 6 〉	통과 (0.24ms, 33.4MB)
테스트 7 〉	통과 (0.86ms, 33.6MB)
테스트 8 〉	통과 (424.88ms, 37.5MB)
*/