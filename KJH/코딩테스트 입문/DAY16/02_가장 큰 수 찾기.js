// DAY16
// 가장 큰 수 찾기

// 정수 배열 array가 매개변수로 주어질 때, 가장 큰 수와 그 수의 인덱스를 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(array) {
    let Index = 0;
    let max = 0;
    
    for(let i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
            Index = i;
        }
    }
    
    return [max, Index];
}

/*
테스트 1 〉	통과 (0.04ms, 33.4MB)
테스트 2 〉	통과 (0.12ms, 33.5MB)
*/