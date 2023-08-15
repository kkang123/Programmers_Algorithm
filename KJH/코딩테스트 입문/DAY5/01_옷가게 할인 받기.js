// DAY5
// 옷가게 할인 받기

function solution(price) {
    if (price >= 500000){
        return price - Math.floor(price * 0.2)
    }else if (price >= 300000) {
        return price - Math.floor(price * 0.1)
    } else if (price >= 100000){
        return Math.floor(price-(price * 0.05))
    }
    else{                               
        return price
    }
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.04ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.6MB)
테스트 7 〉	통과 (0.03ms, 33.5MB)
테스트 8 〉	통과 (0.04ms, 33.4MB)
테스트 9 〉	통과 (0.04ms, 33.5MB)
테스트 10 〉	통과 (0.06ms, 33.4MB)
테스트 11 〉	통과 (0.05ms, 33.4MB)
테스트 12 〉	통과 (0.04ms, 33.5MB)
테스트 13 〉	통과 (0.03ms, 33.4MB)
테스트 14 〉	통과 (0.04ms, 33.4MB)
테스트 15 〉	통과 (0.03ms, 33.4MB)
테스트 16 〉	통과 (0.04ms, 33.4MB)
테스트 17 〉	통과 (0.06ms, 33.5MB)
테스트 18 〉	통과 (0.06ms, 33.4MB)
테스트 19 〉	통과 (0.05ms, 33.5MB)
테스트 20 〉	통과 (0.03ms, 33.5MB)
*/