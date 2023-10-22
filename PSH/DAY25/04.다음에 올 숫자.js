function solution(common) {
    
    // 등비수열 - a(초항) r(공비)^n 
        // a k+1 / a k = r
    // 등차수열 - a(초항) d(공차)  a+(n-1)d
        // a k+1 - a k = d
    
    let next = 0;
    let d = 0; // 공차
    let r = 0; // 공비
    
    if(isArithmetical(common)){ // 등차수열이면
        d = common[common.length-1] - common[common.length-2]
        next = common[common.length-1] + d;
    }else{
        r = common[common.length-1] / common[common.length-2]
        next = common[common.length-1] * r;
    }
    
    return next;
}

// 등차수열인지
function isArithmetical (arr) {
    return arr[2] - arr[1] == arr[1] - arr[0]
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)