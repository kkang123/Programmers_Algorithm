// 암호 해독
// 군 전략가 머쓱이는 전쟁 중 적군이 다음과 같은 암호 체계를 사용한다는 것을 알아냈습니다.

// * 암호화된 문자열 cipher를 주고받습니다.
// * 그 문자열에서 code의 배수 번째 글자만 진짜 암호입니다.
// 문자열 cipher와 정수 code가 매개변수로 주어질 때 해독된 암호 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(cipher, code) {
    let arr = [...cipher];
    let answer = [];
    //idx를 0부터가 아닌 1부터로 맞춰주기 위해 unshift 사용
    arr.unshift("");
    arr.map((num, idx) => {
        if(idx % code === 0){
            answer.push(num);
        }
    });
    return answer.join('');
}

// 테스트 1 〉	통과 (0.07ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.06ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.12ms, 33.5MB)
// 테스트 7 〉	통과 (0.19ms, 33.5MB)
// 테스트 8 〉	통과 (0.19ms, 33.4MB)
// 테스트 9 〉	통과 (0.15ms, 33.5MB)
// 테스트 10 〉	통과 (0.14ms, 33.5MB)
// 테스트 11 〉	통과 (0.09ms, 33.6MB)