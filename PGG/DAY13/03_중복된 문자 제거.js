// 중복된 문자 제거
// 문자열 my_string이 매개변수로 주어집니다. my_string에서 중복된 문자를 제거하고 하나의 문자만 남긴 문자열을 return하도록 solution 함수를 완성해주세요.

// 중복제거 방법 https://hianna.tistory.com/422
// 배열을 문자열로 만드는 방법 https://codechacha.com/ko/javascript-array-to-string/

function solution(my_string) {
    const arr=[...my_string];
    return arr.filter((e,idx)=>{ return my_string.indexOf(e) === idx}).join("");
    
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 32.9MB)
// 테스트 4 〉	통과 (0.05ms, 33MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.04ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.4MB)

