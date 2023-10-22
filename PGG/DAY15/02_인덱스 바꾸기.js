// 인덱스 바꾸기
// 문자열 my_string과 정수 num1, num2가 매개변수로 주어질 때, 
// my_string에서 인덱스 num1과 인덱스 num2에 해당하는 문자를 바꾼 문자열을 return 하도록 solution 함수를 완성해보세요.

//swap 참고 사이트 https://miiingo.tistory.com/364

function solution(my_string, num1, num2) {
    //구조분해 할당 사용
    let str = [...my_string];
    [str[num1], str[num2]] = [str[num2], str[num1]];
    return str.join('');

}

// 테스트 1 〉	통과 (0.04ms, 33.4MB)
// 테스트 2 〉	통과 (0.05ms, 33.4MB)
// 테스트 3 〉	통과 (0.05ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)