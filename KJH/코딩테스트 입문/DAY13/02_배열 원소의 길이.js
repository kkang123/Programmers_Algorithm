// DAY 13
// 배열 원소의 길이

// 문제 설명
// 문자열 배열 strlist가 매개변수로 주어집니다. strlist 각 원소의 길이를 담은 배열을 retrun하도록 solution 함수를 완성해주세요.

function solution(strlist) {
    let arr = [];
    for(let i = 0; i < strlist.length; i++){
        arr.push(strlist[i].length);
    }
    return arr
}

/*
테스트 1 〉	통과 (0.05ms, 33.4MB)
테스트 2 〉	통과 (0.03ms, 33.4MB)
테스트 3 〉	통과 (0.05ms, 33.4MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.04ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.4MB)
*/