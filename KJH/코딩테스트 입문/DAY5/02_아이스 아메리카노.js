// DAY5
// 아이스 아메리카노

function solution(money) {
    let wallet = []
    
    let ice = parseInt(money / 5500)
    let coin  = money % 5500
    
    wallet[0] = ice
    wallet[1] = coin
    
    return wallet
}

/*
테스트 1 〉	통과 (0.03ms, 33.6MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.04ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.4MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
*/