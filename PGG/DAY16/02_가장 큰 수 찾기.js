// 가장 큰 수 찾기
// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.


function solution(array) {
    let arr = [];
    let a = Math.max(...array);
    arr.push(a);
    arr.push(array.indexOf(a));
    
    return arr;
    
    // let a = Math.max(...array);
    // return [a, array.indexOf(a)];

}

// 테스트 1 〉	통과 (0.03ms, 33.3MB)
// 테스트 2 〉	통과 (0.03ms, 33.4MB)