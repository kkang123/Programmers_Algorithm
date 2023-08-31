// 문자열 my_string이 매개변수로 주어질 때, 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    var answer = '';
    my_string.split('').forEach(v=>{
        if(v.charCodeAt(0) >= 97){ //소문자면
            answer += v.toUpperCase()
        }else{// 대문자면
            answer += v.toLowerCase()
        };
    })
    return answer;
}

// 테스트 1 〉	통과 (0.08ms, 33.6MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (0.41ms, 33.5MB)
// 테스트 7 〉	통과 (0.22ms, 33.6MB)