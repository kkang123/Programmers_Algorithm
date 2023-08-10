function solution(numbers) {
    let sum = 0;
    for(let i =0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return (sum / numbers.length);
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.4MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.03ms, 33.6MB)