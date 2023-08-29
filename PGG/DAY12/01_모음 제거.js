// 모음 제거
// 영어에선 a, e, i, o, u 다섯 가지 알파벳을 모음으로 분류합니다. 문자열 my_string이 매개변수로 주어질 때 모음을 제거한 문자열을 return하도록 solution 함수를 완성해주세요.


function solution(my_string) {
    const aeiou = 'aeiou';
    let newString = my_string.split('');
    for(let i = 0; i<aeiou.length; i++){
        for(let j = 0; j<my_string.length; j++){
            if(newString.includes(aeiou[i])){
            newString.splice(newString.indexOf(aeiou[i]), 1)
            } 
        }  
    }
    return newString.join('');
    
    //정규표현식 사용해서 한 번에 푸는 방법
    // return my_string.replace(/['a','e','i','o','u']/g,'');
    
}


// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.4MB)
// 테스트 3 〉	통과 (0.15ms, 33.4MB)
// 테스트 4 〉	통과 (0.21ms, 33.5MB)
// 테스트 5 〉	통과 (0.15ms, 33.5MB)
// 테스트 6 〉	통과 (0.20ms, 33.5MB)