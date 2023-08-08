function solution(numer1, denom1, numer2, denom2) {
    var answer = [];
    
    let denom = denom1 * denom2
    let numer = (numer1 * denom2) + (numer2 * denom1);
    let com = [];

    if(numer > denom){
        for(let i = 0; i < numer+1; i++){ 
            if(denom % i == 0 && numer % i == 0){
                com.push(i)
            }
        }
    }else{
        for(let i = 0; i < denom+1; i++){ 
            if(denom % i == 0 && numer % i == 0){
                com.push(i)
            }
        }
    }

    answer = [numer/com[com.length-1], denom/com[com.length-1]]
    return answer;
}

// 테스트 1 〉	통과 (2.74ms, 36.4MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (0.16ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.3MB)
// 테스트 5 〉	통과 (0.16ms, 33.4MB)
// 테스트 6 〉	통과 (11.55ms, 36.6MB)
// 테스트 7 〉	통과 (8.02ms, 36.3MB)
// 테스트 8 〉	통과 (4.35ms, 36.7MB)
// 테스트 9 〉	통과 (3.89ms, 36.3MB)
// 테스트 10 〉	통과 (2.89ms, 36.2MB)
// 테스트 11 〉	통과 (0.18ms, 33.5MB)
// 테스트 12 〉	통과 (6.63ms, 36.6MB)
// 테스트 13 〉	통과 (6.63ms, 36.6MB)
// 테스트 14 〉	통과 (6.46ms, 36.3MB)
// 테스트 15 〉	통과 (0.34ms, 33.4MB)