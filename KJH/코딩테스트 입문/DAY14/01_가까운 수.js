// DAY 14
// 가까운 수

// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
    // 제한 사항 똑바로 안보고 풀어서 테스트 5랑 13 실패 떳네요...
    array.sort((a, b) => a - b)
    let closest = array[0];


    for (const num of array) {
        if (Math.abs(num - n) < Math.abs(closest - n)) {
            closest = num;
        }
    }

    return closest;
}

/*
테스트 1 〉	통과 (0.06ms, 33MB)
테스트 2 〉	통과 (0.06ms, 33MB)
테스트 3 〉	통과 (0.06ms, 32.9MB)
테스트 4 〉	통과 (0.06ms, 32.8MB)
테스트 5 〉	통과 (0.06ms, 33.2MB)
테스트 6 〉	통과 (0.27ms, 33MB)
테스트 7 〉	통과 (0.15ms, 33MB)
테스트 8 〉	통과 (0.15ms, 33.5MB)
테스트 9 〉	통과 (0.15ms, 33MB)
테스트 10 〉	통과 (0.16ms, 33.4MB)
테스트 11 〉	통과 (0.15ms, 33.3MB)
테스트 12 〉	통과 (0.06ms, 33.3MB)
테스트 13 〉	통과 (0.06ms, 33.3MB)
테스트 14 〉	통과 (0.06ms, 33.3MB)
테스트 15 〉	통과 (0.06ms, 33.3MB)
테스트 16 〉	통과 (0.05ms, 33.3MB)
테스트 17 〉	통과 (0.05ms, 33.4MB)
테스트 18 〉	통과 (0.05ms, 33.5MB)
*/