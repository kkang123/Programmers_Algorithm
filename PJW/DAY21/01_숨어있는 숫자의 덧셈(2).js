// 문자열 my_string이 매개변수로 주어집니다. my_string은 소문자, 대문자, 자연수로만 구성되어있습니다. my_string안의 자연수들의 합을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
  let arr = [...my_string];
  let total = [];
  let current = "";

  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(Number(arr[i]))) {
      //숫자라면 current에 하나씩 추가
      current += arr[i];

      if (isNaN(Number(arr[i + 1]))) {
        //다음 문자가 숫자인지 확인하고 문자라면
        total.push(current); //나온 current의 숫자를 total에 추가
        current = ""; //다시 current 초기화
      }
    }
  }
  return total.reduce((a, c) => a + Number(c), 0); //total배열의 숫자들을 모두 더하기
}
//처음에 할때 "aAb1B2cC34oOp"여기서 34를 3,4로 따로해서 애먹었어요

// 테스트 1 〉	통과 (0.15ms, 33.5MB)
// 테스트 2 〉	통과 (0.06ms, 33.5MB)
// 테스트 3 〉	통과 (0.24ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.4MB)
// 테스트 6 〉	통과 (0.07ms, 33.5MB)
// 테스트 7 〉	통과 (0.06ms, 33.6MB)
// 테스트 8 〉	통과 (0.07ms, 33.5MB)
// 테스트 9 〉	통과 (0.12ms, 33.5MB)
// 테스트 10 〉	통과 (0.10ms, 33.5MB)
