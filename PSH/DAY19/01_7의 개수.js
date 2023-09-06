// 머쓱이는 행운의 숫자 7을 가장 좋아합니다. 정수 배열 array가 매개변수로 주어질 때, 7이 총 몇 개 있는지 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
    var answer = 0;
    array.forEach(v=>{
        answer += v.toString().split('').filter(v=>v==='7').length
    })
    return answer;
}

// 테스트 1 〉	통과 (0.17ms, 33.7MB)
// 테스트 2 〉	통과 (0.10ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.5MB)
// 테스트 4 〉	통과 (0.20ms, 33.6MB)