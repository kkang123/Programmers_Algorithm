// DAY6
// 문자 반복 출력하기

function solution(my_string, n) {
    let str = my_string.split('');
    
    let result = str.map(v=> v.repeat(n)).join("")

    return result;
}

/*
테스트 1 〉	통과 (0.05ms, 33.2MB)
테스트 2 〉	통과 (0.05ms, 33MB)
테스트 3 〉	통과 (0.05ms, 33.6MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
*/