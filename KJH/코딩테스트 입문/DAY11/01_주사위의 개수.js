// DAY 11
// 주사위의 개수

function solution(box, n) {
    return parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n)
}

/*
테스트 1 〉	통과 (0.03ms, 33.1MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.03ms, 33.1MB)
*/