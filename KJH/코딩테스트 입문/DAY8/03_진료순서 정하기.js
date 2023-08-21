// DAY 8
// 진료순서 정하기

function solution(emergency) {
    let userInput = [];
    userInput = emergency;
    
    let sortValue = [...userInput].sort((a, b) => b - a)
    
    userInput.forEach((v, i) => {
    userInput[i] = sortValue.indexOf(v) + 1
    });
    return userInput
}

/*
테스트 1 〉	통과 (0.10ms, 33.4MB)
테스트 2 〉	통과 (0.05ms, 33.5MB)
테스트 3 〉	통과 (0.07ms, 33.4MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.09ms, 33.4MB)
테스트 6 〉	통과 (0.06ms, 33.5MB)
테스트 7 〉	통과 (0.06ms, 33.4MB)
테스트 8 〉	통과 (0.06ms, 33.5MB)
*/