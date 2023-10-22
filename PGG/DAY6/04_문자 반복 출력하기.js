

// https://codechacha.com/ko/javascript-convert-string-to-array/
// 문자열을 배열에 넣는 방법 참고

function solution(my_string, n) {
    const arr = [...my_string];
    let str = '';
    for(let i=0 ; i < arr.length; i++){
        for(let j=0 ; j < n; j++){
            str += arr[i];
        }
    }
    return str;
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)

//구조분해 할당 사용 풀이
//https://dongi-coding.tistory.com/355

/*
function solution(my_string, n) {
    var answer = [...my_string].map(v => v.repeat(n)).join("");
    console.log(answer);
    return answer;
}
*/
