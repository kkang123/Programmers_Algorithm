// DAY 25
// 치킨 쿠폰

function solution(chicken) {
  let answer = 0;

  while (chicken >= 10) {
    let div = Math.floor(chicken / 10);
    let mod = chicken % 10;
    answer += div;
    chicken = div + mod;
  }
  return answer;
}

/*
테스트 1 〉	통과 (0.03ms, 33.5MB)
테스트 2 〉	통과 (0.03ms, 33.5MB)
테스트 3 〉	통과 (0.03ms, 33.5MB)
테스트 4 〉	통과 (0.03ms, 33.5MB)
테스트 5 〉	통과 (0.03ms, 33.5MB)
테스트 6 〉	통과 (0.03ms, 33.3MB)
테스트 7 〉	통과 (0.03ms, 33.3MB)
테스트 8 〉	통과 (0.03ms, 33.6MB)
테스트 9 〉	통과 (0.03ms, 33.6MB)
테스트 10 〉	통과 (0.03ms, 33.6MB)
*/
