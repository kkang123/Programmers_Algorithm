function solution(balls, share) {
    var answer = 0;
    function factorial (num, count) {
        if (count == 1 || num <= 1){
            return num;
        }else{
            count--;
            return num * factorial(num-1, count)
        }
    }
    if(balls == share){
        return 1;
    }
    answer = factorial(balls, share)/factorial(share, share)
    return parseInt(answer);
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)
// 테스트 3 〉	통과 (0.03ms, 33.5MB)
// 테스트 4 〉	통과 (0.07ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	통과 (0.05ms, 33.4MB)
// 테스트 10 〉	통과 (0.05ms, 33.4MB)
// 테스트 11 〉	통과 (0.05ms, 33.4MB)
// 테스트 12 〉	통과 (0.05ms, 33.5MB)
// 테스트 13 〉	통과 (0.05ms, 33.5MB)
// 테스트 14 〉	통과 (0.05ms, 33.4MB)
// 테스트 15 〉	통과 (0.05ms, 33.4MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
// 테스트 17 〉	통과 (0.05ms, 33.4MB)
// 테스트 18 〉	통과 (0.05ms, 33.5MB)
// 테스트 19 〉	통과 (0.05ms, 33.5MB)
// 테스트 20 〉	통과 (0.05ms, 33.4MB)
// 테스트 21 〉	통과 (0.05ms, 33.4MB)
// 테스트 22 〉	통과 (0.05ms, 33.5MB)
// 테스트 23 〉	통과 (0.06ms, 33.4MB)
// 테스트 24 〉	통과 (0.04ms, 33.4MB)
// 테스트 25 〉	통과 (0.05ms, 33.5MB)
// 테스트 26 〉	통과 (0.05ms, 33.5MB)
// 테스트 27 〉	통과 (0.05ms, 33.5MB)
// 테스트 28 〉	통과 (0.05ms, 33.4MB)
// 테스트 29 〉	통과 (0.05ms, 33.5MB)
// 테스트 30 〉	통과 (0.05ms, 33.4MB)
// 테스트 31 〉	통과 (0.06ms, 33.4MB)
// 테스트 32 〉	통과 (0.06ms, 33.4MB)
// 테스트 33 〉	통과 (0.06ms, 33.5MB)
// 테스트 34 〉	통과 (0.05ms, 33.5MB)
// 테스트 35 〉	통과 (0.05ms, 33.5MB)