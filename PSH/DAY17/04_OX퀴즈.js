// 덧셈, 뺄셈 수식들이 'X [연산자] Y = Z' 형태로 들어있는 문자열 배열 quiz가 매개변수로 주어집니다. 수식이 옳다면 "O"를 틀리다면 "X"를 순서대로 담은 배열을 return하도록 solution 함수를 완성해주세요.
function solution(quiz) {
    let equations = [];
    
    quiz.forEach(item=>{
        equations.push(item.split(' '));
    }) // > [[ '3', '-', '4', '=', '-3' ]  [ '5', '+', '6', '=', '11' ] ]
    
    //연산결과를 저장한 배열
    let result = [];
    for(let i = 0; i<equations.length; i++){
        if(equations[i][1] === '+'){
            result.push(parseInt(equations[i][0]) + parseInt(equations[i][2]));
        }if(equations[i][1] === '-'){
            result.push(parseInt(equations[i][0]) - parseInt(equations[i][2]));
        }
    } // > [-1, 11]   
    
    //연산결과 vs 방정식 뒷부분 비교
    let answer = [];
    for(let i = 0; i<result.length; i++)
    if(equations[i][4] == result[i]){
        answer.push("O");
    }else if(equations[i][4] !== result[i]){
        answer.push("X");
    }
    
    return answer;
}
// 테스트 1 〉	통과 (0.09ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.6MB)
// 테스트 3 〉	통과 (0.12ms, 33.5MB)
// 테스트 4 〉	통과 (0.08ms, 33.5MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.08ms, 33.5MB)
// 테스트 7 〉	통과 (0.08ms, 33.5MB)
// 테스트 8 〉	통과 (0.11ms, 33.5MB)
// 테스트 9 〉	통과 (0.11ms, 33.5MB)
// 테스트 10 〉	통과 (0.10ms, 33.5MB)
// 테스트 11 〉	통과 (0.09ms, 33.5MB)
// 테스트 12 〉	통과 (0.11ms, 33.4MB)
// 테스트 13 〉	통과 (0.11ms, 33.4MB)
// 테스트 14 〉	통과 (0.13ms, 33.5MB)
// 테스트 15 〉	통과 (0.18ms, 33.5MB)
// 테스트 16 〉	통과 (0.10ms, 33.6MB)
// 테스트 17 〉	통과 (0.09ms, 33.4MB)

//다시풀이!