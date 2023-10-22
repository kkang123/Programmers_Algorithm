// 영어가 싫어요
// 영어가 싫은 머쓱이는 영어로 표기되어있는 숫자를 수로 바꾸려고 합니다. 
// 문자열 numbers가 매개변수로 주어질 때, numbers를 정수로 바꿔 return 하도록 solution 함수를 완성해 주세요.

function solution(numbers) {
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

    for (let i = 0; i < arr.length; i++) {
        numbers = numbers.split(arr[i]).join(i);
    }

    return parseInt(numbers);
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.4MB)
// 테스트 8 〉	통과 (0.06ms, 33.4MB)
// 테스트 9 〉	통과 (0.06ms, 33.4MB)

/*
//실패한 풀이 -> 이유를 모르겠음
function solution(numbers) {
    //객체로 풀어보려다가 모르겠음...
    // const eng = {
    //     'zero' : 0,
    //     'one' : 1,
    //     'two' : 2,
    //     'three' : 3,
    //     'four' : 4,
    //     'five' : 5,
    //     'six' : 6,
    //     'seven' : 7,
    //     'eight' : 8,
    //     'nine' : 9
    // }
    const repNum = numbers
                .replace("zero", "0")
                .replace("one", "1")
                .replace("two", "2")
                .replace("three", "3")
                .replace("four", "4")
                .replace("five", "5")
                .replace("six", "6")
                .replace("seven", "7")
                .replace("eight", "8")
                .replace("nine", "9")
    return parseInt(repNum);
}

//실패
// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	실패 (0.05ms, 33.4MB)
// 테스트 3 〉	실패 (0.05ms, 33.5MB)
// 테스트 4 〉	실패 (0.05ms, 33.4MB)
// 테스트 5 〉	실패 (0.04ms, 33.4MB)
// 테스트 6 〉	실패 (0.04ms, 33.4MB)
// 테스트 7 〉	통과 (0.05ms, 33.5MB)
// 테스트 8 〉	통과 (0.05ms, 33.4MB)
// 테스트 9 〉	실패 (0.05ms, 33.4MB)
*/
