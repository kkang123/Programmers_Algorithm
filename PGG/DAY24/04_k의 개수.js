// k의 개수
// 1부터 13까지의 수에서, 1은 1, 10, 11, 12, 13 이렇게 총 6번 등장합니다. 정수 i, j, k가 매개변수로 주어질 때, i부터 j까지 k가 몇 번 등장하는지 return 하도록 solution 함수를 완성해주세요.

function solution(i, j, k) {
    let a ='';
    for(i; i<=j; i++){
        a += i;
    }

    return a.split(k).length-1;
}


// 테스트 1 〉	통과 (18.34ms, 45MB)
// 테스트 2 〉	통과 (0.04ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (1.14ms, 34.1MB)
// 테스트 5 〉	통과 (0.56ms, 33.8MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.13ms, 33.4MB)
// 테스트 8 〉	통과 (5.94ms, 38.4MB)