// 정수 배열 array와 정수 n이 매개변수로 주어질 때, array에 들어있는 정수 중 n과 가장 가까운 수를 return 하도록 solution 함수를 완성해주세요.

function solution(array, n) {
    var answer = 0;
    
    let distance = array.map(v=>Math.abs(n-v));
    let minD = Math.min(...distance)
    let indexMin = distance.indexOf(minD);
    answer = array[indexMin]
    
    distance.forEach((d, i)=>{
        if(d == minD){
            answer = answer > array[i] ? array[i] : answer;
        }
    })
    
    return answer;
}

// 테스트 1 〉	통과 (0.07ms, 33.4MB)
// 테스트 2 〉	통과 (0.07ms, 33.5MB)
// 테스트 3 〉	통과 (0.07ms, 33.4MB)
// 테스트 4 〉	통과 (0.07ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.15ms, 33.6MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)
// 테스트 8 〉	통과 (0.15ms, 33.4MB)
// 테스트 9 〉	통과 (0.15ms, 33.5MB)
// 테스트 10 〉	통과 (0.13ms, 33.5MB)
// 테스트 11 〉	통과 (0.07ms, 33.5MB)
// 테스트 12 〉	통과 (0.07ms, 33.4MB)
// 테스트 13 〉	통과 (0.07ms, 33.4MB)
// 테스트 14 〉	통과 (0.07ms, 33.4MB)
// 테스트 15 〉	통과 (0.07ms, 33.4MB)
// 테스트 16 〉	통과 (0.07ms, 33.4MB)
// 테스트 17 〉	통과 (0.06ms, 33.4MB)
// 테스트 18 〉	통과 (0.07ms, 33.4MB)