// DAY3
// 중앙값 구하기

function solution(array) {
    return array.sort((a, b) => a - b)[parseInt(array.length / 2)]
    
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.4MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
테스트 7 〉	통과 (0.06ms, 33.5MB)
테스트 8 〉	통과 (0.07ms, 33.5MB)
테스트 9 〉	통과 (0.04ms, 33.5MB)
*/