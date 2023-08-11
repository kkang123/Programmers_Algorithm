function solution(n) {
        let sum = 0;
        for(let i = 0; i <= n; i++){
            if(i%2 == 0){
                sum += i;
            }
        }
        return sum
}

// 테스트 1 〉	통과 (0.05ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.6MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.03ms, 33.6MB)
// 테스트 5 〉	통과 (0.06ms, 33.6MB)
// 테스트 6 〉	통과 (0.03ms, 33.6MB)
// 테스트 7 〉	통과 (0.03ms, 33.5MB)


function solution(n) {
    let evens = Array(n).fill(0).map((_,i)=>i+1).filter(v=>v%2==0);

    if(evens.length > 1){
        return evens.reduce((a,c)=>a+c)
    }else if(evens.length == 1){
        return evens[0];
    }else{
        return 0;
    }
}

// 테스트 1 〉	통과 (0.15ms, 33.6MB)
// 테스트 2 〉	통과 (0.14ms, 33.6MB)
// 테스트 3 〉	통과 (0.20ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.7MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.06ms, 33.5MB)
// 테스트 7 〉	통과 (0.09ms, 33.6MB)