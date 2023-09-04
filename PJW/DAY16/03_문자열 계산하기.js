// my_string은 "3 + 5"처럼 문자열로 된 수식입니다. 문자열 my_string이 매개변수로 주어질 때, 수식을 계산한 값을 return 하는 solution 함수를 완성해주세요.

// - 첫번째 풀이
// function solution(my_string) {
//   const arr = my_string.split(" ");

//   const firNum = parseInt(arr[0]);
//   const plusMinus = arr[1];
//   const secNum = parseInt(arr[2]);

//   return plusMinus === "+"
//     ? firNum + secNum
//     : plusMinus === "-"
//     ? firNum - secNum
//     : null;
// } 저는 계산이 무조건 숫자 두개만 있는 줄 알았어요...

function solution(my_string) {
  const arr = my_string.split(" ");
  let answer = Number(arr[0]);
  for (let i = 1; i < arr.length; i += 2) {
    const op = arr[i];
    const num = Number(arr[i + 1]);
    if (op === "+") {
      answer += num;
    } else {
      answer -= num;
    }
  }
  return answer;
}

// 테스트 1 〉	통과 (0.05ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.5MB)
// 테스트 3 〉	통과 (0.06ms, 33.6MB)
// 테스트 4 〉	통과 (0.09ms, 33.4MB)
// 테스트 5 〉	통과 (0.07ms, 33.4MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.07ms, 33.5MB)
// 테스트 8 〉	통과 (0.07ms, 33.6MB)
// 테스트 9 〉	통과 (0.07ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.5MB)
