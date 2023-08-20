function solution(price) {
    if(price >= 500000){
        return Math.trunc(price * 0.8);
    }else if(price >= 300000){
        return Math.trunc(price * 0.90);
    }else if(price >= 100000){
        return Math.trunc(price * 0.95);
    }else{
        return price;
    }
}

// 테스트 1 〉	통과 (0.03ms, 33.4MB)
// 테스트 2 〉	통과 (0.03ms, 33.3MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.5MB)
// 테스트 8 〉	통과 (0.03ms, 33.3MB)
// 테스트 9 〉	통과 (0.03ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.03ms, 33.4MB)
// 테스트 12 〉	통과 (0.04ms, 33.4MB)
// 테스트 13 〉	통과 (0.05ms, 33.4MB)
// 테스트 14 〉	통과 (0.05ms, 33.5MB)
// 테스트 15 〉	통과 (0.03ms, 33.3MB)
// 테스트 16 〉	통과 (0.03ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.06ms, 33.5MB)
// 테스트 19 〉	통과 (0.03ms, 33.4MB)
// 테스트 20 〉	통과 (0.03ms, 33.4MB)

// else에 price가 아닌 answer를 넣어 할인 받지 못하는 경우에 0이 출력되는 오류 발생했었음