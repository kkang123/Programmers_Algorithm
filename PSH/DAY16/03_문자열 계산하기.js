// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.
function solution(my_string) {
    var answer = 0;
    let my_arr = my_string.split(' ')
    answer += parseInt(my_arr[0]);
    my_arr.forEach((v,i,arr)=>{
        if(v === '-'){
            answer -= parseInt(arr[i+1])
        }else if(v === "+"){
            answer += parseInt(arr[i+1])
        }
    })
    return answer
}
// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.5MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.1MB)
// 테스트 10 〉	통과 (0.07ms, 33.1MB)