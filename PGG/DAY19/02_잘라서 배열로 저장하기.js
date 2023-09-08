// 잘라서 배열로 저장하기
// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    let i = 0;
    let arr = [];
    while(i<my_str.length){
        arr.push([...my_str].splice(i, n).join(''));
        i+=n;
    }
    return arr;
}

// 테스트 1 〉	통과 (0.18ms, 33.5MB)
// 테스트 2 〉	통과 (0.15ms, 33.5MB)
// 테스트 3 〉	통과 (0.12ms, 33.6MB)
// 테스트 4 〉	통과 (0.09ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.04ms, 33.5MB)
// 테스트 8 〉	통과 (0.23ms, 33.5MB)