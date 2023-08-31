// DAY 15
// 영어가 싫어요


// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
    const newNum = {
        "zero": "0",
        "one": "1",
        "two": "2",
        "three": "3",
        "four": "4",
        "five": "5",
        "six": "6",
        "seven": "7",
        "eight": "8",
        "nine": "9"
    };

    // let num = numbers;
    for (const word in newNum) {
        numbers = numbers.split(word).join(newNum[word]);
    }

    return parseInt(numbers);
}

/*
테스트 1 〉	통과 (0.07ms, 33.5MB)
테스트 2 〉	통과 (0.08ms, 33.4MB)
테스트 3 〉	통과 (0.07ms, 33.3MB)
테스트 4 〉	통과 (0.07ms, 33.5MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.07ms, 33.5MB)
테스트 7 〉	통과 (0.07ms, 33.4MB)
테스트 8 〉	통과 (0.07ms, 33.4MB)
테스트 9 〉	통과 (0.08ms, 33.4MB)
*/