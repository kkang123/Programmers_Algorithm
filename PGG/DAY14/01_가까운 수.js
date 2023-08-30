
// 가까운 수
// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.
function solution(array, n) {
    array.sort((a, b) => a-b);
    let newArr =[];
    let min = 0;
    let minIdx = 0;
    
    //n에서 빼서 절댓값
    //array.map((num, i) => (newArr[i] = Math.abs(n-num)));
    
    //작은 값 찾기, 그 인덱스를 가리키는 원래 배열의 숫자 출력
    

    for (let i = 0; i < array.length; i++) {
        newArr.push(Math.abs(n-array[i]))
        min = Math.min(...newArr);
        minIdx = newArr.indexOf(min);
    } 
    
    return array[minIdx];
}


// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.3MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.19ms, 33.4MB)
// 테스트 7 〉	통과 (0.24ms, 33.4MB)
// 테스트 8 〉	통과 (0.18ms, 33.4MB)
// 테스트 9 〉	통과 (0.16ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)
// 테스트 11 〉	통과 (0.16ms, 33.4MB)
// 테스트 12 〉	통과 (0.06ms, 33.4MB)
// 테스트 13 〉	통과 (0.06ms, 33.5MB)
// 테스트 14 〉	통과 (0.07ms, 33.4MB)
// 테스트 15 〉	통과 (0.06ms, 33.5MB)
// 테스트 16 〉	통과 (0.05ms, 33.5MB)
// 테스트 17 〉	통과 (0.05ms, 33.4MB)
// 테스트 18 〉	통과 (0.05ms, 33.4MB)