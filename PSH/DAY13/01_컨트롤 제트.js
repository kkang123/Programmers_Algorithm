// 숫자와 "Z"가 공백으로 구분되어 담긴 문자열이 주어집니다. 문자열에 있는 숫자를 차례대로 더하려고 합니다. 이 때 "Z"가 나오면 바로 전에 더했던 숫자를 뺀다는 뜻입니다. 숫자와 "Z"로 이루어진 문자열 s가 주어질 때, 머쓱이가 구한 값을 return 하도록 solution 함수를 완성해보세요.
function solution(s) {
    var answer = 0;
    let splitZ = s.split(' ');
    splitZ.forEach((v,i,arr)=>{
        if(v == 'Z'){
            arr[i-1] = 0;
            arr[i] = 0;
        }else{
            arr[i] = parseInt(v);
        }
    })
    answer = splitZ.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return answer;
}
// 테스트 1 〉	통과 (0.17ms, 33.5MB)
// 테스트 2 〉	통과 (0.16ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.16ms, 33.4MB)
// 테스트 5 〉	통과 (0.16ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.07ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.4MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (0.16ms, 33.4MB)
// 테스트 13 〉	통과 (0.08ms, 33.4MB)
// 테스트 14 〉	통과 (0.08ms, 33.5MB)
// 테스트 15 〉	통과 (0.16ms, 33.4MB)
// 테스트 16 〉	통과 (0.16ms, 33.4MB)
// 테스트 17 〉	통과 (0.17ms, 33.4MB)
// 테스트 18 〉	통과 (0.17ms, 33.4MB)
// 테스트 19 〉	통과 (0.17ms, 33.5MB)
// 테스트 20 〉	통과 (0.16ms, 33.4MB)