// DAY 23
// 옹알이

// 문제 설명
// 머쓱이는 태어난 지 6개월 된 조카를 돌보고 있습니다. 조카는 아직 "aya", "ye", "woo", "ma" 네 가지 발음을 최대 한 번씩 사용해 조합한(이어 붙인) 발음밖에 하지 못합니다. 문자열 배열 babbling이 매개변수로 주어질 때, 머쓱이의 조카가 발음할 수 있는 단어의 개수를 return하도록 solution 함수를 완성해주세요.

function solution(babbling) {
  var answer = 0;
  const list = ["aya", "ye", "woo", "ma"];

  const data = babbling.filter((val) => {
    let result = val;
    list.forEach((a) => {
      if (val.includes(a)) result = result.replace(a, "");
    });
    return !result;
  });

  return data.length;
}

/*
테스트 1 〉	통과 (0.17ms, 33.5MB)
테스트 2 〉	통과 (0.36ms, 33.4MB)
테스트 3 〉	통과 (0.30ms, 33.5MB)
테스트 4 〉	통과 (0.23ms, 33.5MB)
테스트 5 〉	통과 (0.20ms, 33.5MB)
테스트 6 〉	통과 (0.20ms, 33.4MB)
테스트 7 〉	통과 (0.20ms, 33.4MB)
테스트 8 〉	통과 (0.22ms, 33.6MB)
테스트 9 〉	통과 (0.19ms, 33.6MB)
테스트 10 〉	통과 (0.18ms, 33.4MB)
테스트 11 〉	통과 (0.23ms, 33.5MB)
테스트 12 〉	통과 (0.08ms, 33.6MB)
테스트 13 〉	통과 (0.12ms, 33.7MB)
테스트 14 〉	통과 (0.08ms, 33.5MB)
테스트 15 〉	통과 (0.16ms, 33.5MB)
테스트 16 〉	통과 (0.15ms, 33.5MB)
테스트 17 〉	통과 (0.17ms, 33.4MB)
*/
