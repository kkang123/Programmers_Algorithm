function solution(num_list) {
    return [num_list.filter(v=>v%2==0).length, num_list.filter(v=>v%2==1).length];
}

// 테스트 1 〉	통과 (0.11ms, 33.4MB)
// 테스트 2 〉	통과 (0.04ms, 33.4MB)
// 테스트 3 〉	통과 (0.12ms, 33.4MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)