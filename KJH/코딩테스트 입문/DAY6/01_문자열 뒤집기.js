// DAY6
// 문자열 뒤집기

function solution(my_string) {
    var answer = my_string.split("");
    
    var answer_reverse = answer.reverse();
    return answer_reverse.join('');
}


/*
테스트 1 〉	통과 (0.04ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.03ms, 33.5MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
*/