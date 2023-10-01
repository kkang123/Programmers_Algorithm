function solution(numlist, n) {
    return numlist.sort((a,b)=> {
        if(Math.abs(a-n) === Math.abs(b-n)){
            return b - a
        }else{
            return Math.abs(a-n) - Math.abs(b-n)
        }
    });
}

// 테스트 1 〉	통과 (0.17ms, 33.4MB)
// 테스트 2 〉	통과 (0.16ms, 33.4MB)
// 테스트 3 〉	통과 (0.14ms, 33.4MB)
// 테스트 4 〉	통과 (0.15ms, 33.4MB)
// 테스트 5 〉	통과 (0.12ms, 33.4MB)
// 테스트 6 〉	통과 (0.13ms, 33.3MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)