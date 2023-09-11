// 정수 배열 numbers가 매개변수로 주어집니다. numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 return하도록 solution 함수를 완성해주세요.

function solution(numbers) {
    let answer = 0;
    let max = 0; 
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let num1 = numbers[i];
            let num2 = numbers[j];
            
            if( max < num1 * num2 ){
                max = num1 * num2
            }
        }
    }
    
    answer = max
    return answer;
}
// 테스트 1 〉	통과 (0.16ms, 33.6MB)
// 테스트 2 〉	통과 (0.14ms, 33.6MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.50ms, 33.4MB)
// 테스트 5 〉	통과 (0.04ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.5MB)
// 테스트 7 〉	실패 (0.05ms, 33.5MB) <<<<
// 테스트 8 〉	통과 (0.04ms, 33.6MB)
// 테스트 9 〉	통과 (0.04ms, 33.6MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.12ms, 33.5MB)
// 테스트 12 〉	통과 (0.14ms, 33.5MB)

function solution(numbers) {
    let answer = 0;
    let max = []; 
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let num1 = numbers[i];
            let num2 = numbers[j];
            
            max.push( num1 * num2 )
        }
    }
    
    answer = Math.max(...max)
    return answer;
}

// 테스트 2 〉	통과 (0.14ms, 33.5MB)
// 테스트 3 〉	통과 (0.05ms, 32.9MB)
// 테스트 4 〉	통과 (0.49ms, 33.1MB)
// 테스트 5 〉	통과 (0.05ms, 33.4MB)
// 테스트 6 〉	통과 (0.18ms, 33.1MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.4MB)
// 테스트 9 〉	통과 (0.04ms, 33.5MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.12ms, 33.4MB)
// 테스트 12 〉	통과 (0.13ms, 33MB)

function solution(numbers) {
    let answer = 0;
    let max; 
    
    for(let i = 0; i < numbers.length - 1; i++){
        for(let j = i + 1; j < numbers.length; j++){
            let num1 = numbers[i];
            let num2 = numbers[j];
            
            if(!max){
                max = num1 * num2
            }else if(max < num1*num2){
                max = num1 * num2
            }
        }
    }
    
    answer = max
    return answer;
}

// 테스트 1 〉	통과 (0.12ms, 33.5MB)
// 테스트 2 〉	실패 (0.11ms, 33.6MB) <<<
// 테스트 3 〉	통과 (0.04ms, 33.6MB)
// 테스트 4 〉	통과 (0.54ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.4MB)
// 테스트 6 〉	통과 (0.12ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.5MB)
// 테스트 8 〉	통과 (0.04ms, 33.5MB)
// 테스트 9 〉	통과 (0.04ms, 33.4MB)
// 테스트 10 〉	통과 (0.04ms, 33.4MB)
// 테스트 11 〉	통과 (0.14ms, 33.5MB)
// 테스트 12 〉	통과 (0.12ms, 33.4MB)