//문자열 my_string이 매개변수로 주어질 때, my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 return 하도록 solution 함수를 작성해보세요.
function solution(my_string) {
    return my_string
        .replace(/[^0-9]/g, '')
        .split('')
        .map(v=>parseInt(v))
        .sort((a,b)=>a-b,0);
}

// 테스트 1 〉	통과 (0.18ms, 33.6MB)
// 테스트 2 〉	통과 (0.16ms, 33.5MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (0.26ms, 33.4MB)