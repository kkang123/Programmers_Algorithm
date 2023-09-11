// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

//새 풀이 (20230909)
function solution(polynomial) {
    let answer = []
    const xterms = [], constants = [];
    
    polynomial.split(' + ').forEach(v=>{
        if(v.includes('x')){
            xterms.push(v); 
        }else{
            constants.push(v);  
        }
    })
    
    // x항 계수 더하기
    if(xterms.length !== 0){ // x항이 있는지 확인
        let sumX = 0;
        xterms.forEach(v=>{  
            v = v.replace('x', ''); 
            sumX += v === '' ? 1 : parseInt(v) 
        })
        // answer 배열에 추가하기
        sumX === 1 ? answer.push('x') : answer.push(sumX + 'x') // 계수 합이 1이면 생략
    }
    
    // 상수항
    constants.length === 0 ? null : // 상수항 없으면 null - 아무 동작 x 
        answer.push(constants.reduce((a,c)=> parseInt(a) + parseInt(c))); //있으면 push
    
    return answer.join(' + ')
}

// 테스트 1 〉	통과 (0.12ms, 33.5MB)
// 테스트 2 〉	통과 (0.10ms, 33.4MB)
// 테스트 3 〉	통과 (0.10ms, 33.5MB)
// 테스트 4 〉	통과 (0.12ms, 33.4MB)
// 테스트 5 〉	통과 (0.15ms, 33.4MB)
// 테스트 6 〉	통과 (0.09ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	통과 (0.11ms, 33.5MB)
// 테스트 9 〉	통과 (0.11ms, 33.5MB)
// 테스트 10 〉	통과 (0.09ms, 33.4MB)
// 테스트 11 〉	통과 (0.12ms, 33.5MB)
// 테스트 12 〉	통과 (0.10ms, 33.4MB)


// 이전 풀이 (20230715)
function solution(polynomial) {
    var answer = '';

    polynomial = polynomial.split(" ");

    let coefficient = 0;
    let constant = 0;
    
    for(var i = 0; i < polynomial.length; i++){
        let item = polynomial[i];
        if (item[item.length-1] == 'x'&& item !== "+"){
            if(isNaN(parseInt(item.slice(0, item.length-1)))){
                coefficient++;
            }else{
                coefficient += parseInt(item.slice(0, item.length-1));
            }
        }else if(item[item.length-1] !== 'x' && isNaN(parseInt(item)) == false ){
            constant += parseInt(item);
        }        
    } 
    
    if(constant !== 0 && coefficient !== 0 && coefficient !== 1){
        answer += coefficient + "x" + " + " + constant;
    }else if(coefficient !== 0 && coefficient !== 1){
        answer += coefficient + 'x';
    }else if(coefficient == 1 && constant == 0){
        answer = "x";
    }else if(coefficient == 1 && constant !== 0){
        answer = "x"+ " + " + constant;
    }else if(constant !== 0){
        answer += constant;
    }
    
    return answer;
}

// 테스트 1 〉	통과 (2.02ms, 33.6MB)
// 테스트 2 〉	통과 (3.21ms, 33.7MB)
// 테스트 3 〉	통과 (0.14ms, 33.5MB)
// 테스트 4 〉	통과 (2.11ms, 33.6MB)
// 테스트 5 〉	통과 (2.13ms, 33.5MB)
// 테스트 6 〉	통과 (2.08ms, 33.5MB)
// 테스트 7 〉	통과 (1.93ms, 33.5MB)
// 테스트 8 〉	통과 (2.30ms, 33.7MB)
// 테스트 9 〉	통과 (2.12ms, 33.6MB)
// 테스트 10 〉	통과 (0.08ms, 33.5MB)
// 테스트 11 〉	통과 (0.08ms, 33.5MB)
// 테스트 12 〉	통과 (2.05ms, 33.5MB)