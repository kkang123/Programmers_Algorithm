// 문자열 my_str과 n이 매개변수로 주어질 때, my_str을 길이 n씩 잘라서 저장한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(my_str, n) {
    var answer = [];
    for(let i = 0; i < my_str.length; i+= n){
        answer.push(my_str.slice(i, i+n))
    }
    return answer;
}

// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.08ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.6MB)
// 테스트 7 〉	통과 (0.04ms, 33.6MB)
// 테스트 8 〉	통과 (0.06ms, 33.5MB)