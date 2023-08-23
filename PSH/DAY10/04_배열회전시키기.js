function solution(numbers, direction) {
    var answer = [];
    if(direction == 'left'){
        numbers.push(numbers.splice(0,1)[0])
    }else if(direction == 'right'){
        numbers.unshift(numbers.splice(-1,1)[0])
    }
    return numbers;
}

// 테스트 1 〉	통과 (0.04ms, 33.6MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)