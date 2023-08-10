function solution(array) {
    var arr = [];
    arr = array.sort(function (a, b) { return a - b });
    mid = parseInt(arr.length/2);
    return arr[mid];
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.05ms, 33.5MB)