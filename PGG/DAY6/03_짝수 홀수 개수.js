function solution(num_list) {
    let arr = [];
    let oddCnt = 0;
    let evenCnt = 0;
    
    for(let i = 0 ; i < num_list.length; i++){
        num_list[i] % 2 == 0 ? evenCnt++ : oddCnt++ ;
    }
    arr.push(evenCnt);
    arr.push(oddCnt);
    
    return arr;
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.12ms, 33.5MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.6MB)