// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
    var answer = 0;
    const numberStr = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]
    numberStr.forEach((v,i)=>{
        const regex = new RegExp(`${v}`, 'g');
        numbers = numbers.replace(regex, i);
    })
    answer = parseInt(numbers)
    return answer;
}

//정규표현식 안에 변수 넣는법 https://leeseong010.tistory.com/142

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.09ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.6MB)
// 테스트 4 〉	통과 (0.08ms, 33.4MB)
// 테스트 5 〉	통과 (0.09ms, 33.4MB)
// 테스트 6 〉	통과 (0.08ms, 33.4MB)
// 테스트 7 〉	통과 (0.09ms, 33.4MB)
// 테스트 8 〉	통과 (0.08ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.6MB)