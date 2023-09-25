// DAY 21
// 외계어 사전

// PROGRAMMERS-962 행성에 불시착한 우주비행사 머쓱이는 외계행성의 언어를 공부하려고 합니다. 알파벳이 담긴 배열 spell과 외계어 사전 dic이 매개변수로 주어집니다. spell에 담긴 알파벳을 한번씩만 모두 사용한 단어가 dic에 존재한다면 1, 존재하지 않는다면 2를 return하도록 solution 함수를 완성해주세요.

function solution(spell, dic) {
    // spell 합치기
    let arr = spell.sort().join("")

    return dic.map(a => a.split("").sort().join("")).find(a=> a===arr) !== undefined ? 1: 2
}

/*
테스트 1 〉	통과 (0.09ms, 33.4MB)
테스트 2 〉	통과 (0.23ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.5MB)
테스트 4 〉	통과 (0.10ms, 33.4MB)
테스트 5 〉	통과 (0.10ms, 33.4MB)
테스트 6 〉	통과 (0.09ms, 33.5MB)
테스트 7 〉	통과 (0.08ms, 33.4MB)
테스트 8 〉	통과 (0.12ms, 33.5MB)
테스트 9 〉	통과 (0.10ms, 33.4MB)
*/