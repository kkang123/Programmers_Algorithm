// DAY 18
// 문자열안에 문자열

// 문자열 str1, str2가 매개변수로 주어집니다. str1 안에 str2가 있다면 1을 없다면 2를 return하도록 solution 함수를 완성해주세요.


// 실패 1 코드실행은 다 성공했지만, 성공률 81

function solution(str1, str2) {

    return str1.indexOf(str2) > 0 ? 1 : 2 // (양수인지?)
}



function solution(str1, str2) {

return str1.indexOf(str2) > -1 ? 1 : 2 //(0이상인지?) 

}

// 성공
function solution(str1, str2) {

    return str1.includes(str2) ? 1 : 2;
    
}

/*
테스트 1 〉	통과 (0.02ms, 33.5MB)
테스트 2 〉	통과 (0.04ms, 33.5MB)
테스트 3 〉	통과 (0.02ms, 33.6MB)
테스트 4 〉	통과 (0.02ms, 33.5MB)
테스트 5 〉	통과 (0.02ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.5MB)
테스트 7 〉	통과 (0.02ms, 33.5MB)
테스트 8 〉	통과 (0.03ms, 33.4MB)
테스트 9 〉	통과 (0.03ms, 33.5MB)
테스트 10 〉	통과 (0.04ms, 33.5MB)
테스트 11 〉	통과 (0.03ms, 33.6MB)
*/