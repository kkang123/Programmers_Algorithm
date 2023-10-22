// 20230802
function solution(num, total) {
    let answer = [];
    let sum = 0;
    
    for(let i = -10; i <= total; i++){
        for(let j = 0; j < num; j++){
            sum += i+j
        }
        
        if(sum == total){
            for(let j = 0; j < num; j++){
                answer.push(i+j);
            }
            return answer;
        }
        
        sum=0
    }
}

// 테스트 1 〉	통과 (0.13ms, 33.4MB)
// 테스트 2 〉	통과 (0.14ms, 33.4MB)
// 테스트 3 〉	통과 (0.13ms, 33.4MB)
// 테스트 4 〉	통과 (0.13ms, 33.4MB)
// 테스트 5 〉	통과 (0.14ms, 33.4MB)
// 테스트 6 〉	통과 (0.16ms, 33.4MB)
// 테스트 7 〉	통과 (0.14ms, 33.4MB)
// 테스트 8 〉	통과 (0.13ms, 33.6MB)
// 테스트 9 〉	통과 (0.19ms, 33.6MB)
// 테스트 10 〉	통과 (0.19ms, 33.5MB)

// 20231011
function solution(num, total) {
    let piv = 0;
    const answer = [];
    if(num%2 == 0){
        // 짝수개
        piv = parseInt(total / num) - num / 2 + 1;
        answer.push(piv);
        for(let i = 1; i < num; i++){
            answer.push(piv + i);
        }
    }else{
        // 홀수개
        piv = parseInt(total / num);
        answer.push(piv);
        for(let i = 1; i < num / 2; i++){
            answer.push(piv - i);
            answer.push(piv + i);
        }
    }
    return answer.sort((a, b)=>a - b);
}

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.10ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.18ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.5MB)