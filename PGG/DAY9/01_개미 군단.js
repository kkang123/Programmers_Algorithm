function solution(hp) {
    let a,b,c;
    
    a = parseInt(hp/5);
    b = parseInt((hp%5)/3);
    c = ((hp%5)%3);
    
    const sum = a+b+c;
    return sum;
}


// 테스트 1 〉	통과 (0.03ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.03ms, 33.4MB)
// 테스트 6 〉	통과 (0.03ms, 33MB)
// 테스트 7 〉	통과 (0.03ms, 32.8MB)