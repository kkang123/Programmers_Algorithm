// DAY 13
// 중복된 문자 제거

// 문제 설명
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    return [...new Set(my_string)].join("")
}

/*
테스트 1 〉	통과 (0.05ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.03ms, 33.6MB)
테스트 5 〉	통과 (0.04ms, 33.4MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.03ms, 33.4MB)
*/