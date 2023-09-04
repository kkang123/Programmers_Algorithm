function solution(quiz) {
    let answer = [];
    

    quiz.forEach(temp => {
        let [X, operator, Y, Equal, Z] = temp.split(" ");
        
        let numX = Number(X);
        let numY = Number(Y);
        let numZ = Number(Z);

        
        if(operator === '+'){
            result = numX + numY;
        } else if (operator === '-'){
            result = numX - numY;
        }
        
        if(result === numZ){
            answer.push('O')
        } else {
            answer.push('X')
        }
    });
    
    
    return answer;
}

// eval 문자열 계산해주는 함수

// 보안 문제: eval 함수를 사용하면 사용자 입력을 직접 실행할 수 있기 때문에 보안 취약점이 발생할 수 있습니다. 사용자 입력을 eval에 직접 전달하면 해커가 악의적인 코드를 실행할 수 있으므로 주의해야 합니다.

// 성능 문제: eval 함수는 코드를 실행하기 위해 파싱과 컴파일 과정이 필요하므로 성능 저하가 발생할 수 있습니다. 따라서 불필요한 경우에는 사용을 피하는 것이 좋습니다.

// 스코프: eval 함수 내에서 선언된 변수와 함수는 eval 함수 내에서만 유효하며 외부 스코프에서는 접근할 수 없습니다.

// 대체 방법: eval 함수를 대체하기 위해 JavaScript에는 다양한 안전한 방법과 라이브러리가 있습니다. eval 함수 사용을 최소화하고 다른 방법을 고려하는 것이 좋습니다.


/*
테스트 1 〉	통과 (0.11ms, 33.5MB)
테스트 2 〉	통과 (0.11ms, 33.6MB)
테스트 3 〉	통과 (0.12ms, 33.6MB)
테스트 4 〉	통과 (0.09ms, 33.4MB)
테스트 5 〉	통과 (0.10ms, 33.5MB)
테스트 6 〉	통과 (0.14ms, 33.4MB)
테스트 7 〉	통과 (0.10ms, 33.6MB)
테스트 8 〉	통과 (0.11ms, 33.5MB)
테스트 9 〉	통과 (0.11ms, 33.5MB)
테스트 10 〉	통과 (0.11ms, 33.5MB)
테스트 11 〉	통과 (0.11ms, 33.5MB)
테스트 12 〉	통과 (0.12ms, 33.5MB)
테스트 13 〉	통과 (0.12ms, 33.4MB)
테스트 14 〉	통과 (0.12ms, 33.5MB)
테스트 15 〉	통과 (0.11ms, 33.5MB)
테스트 16 〉	통과 (0.14ms, 33.5MB)
테스트 17 〉	통과 (0.10ms, 33.5MB)
*/