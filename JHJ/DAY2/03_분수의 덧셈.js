function solution(numer1, denom1, numer2, denom2) {
  var answer = [];

  var numer = numer1 * denom2 + numer2 * denom1;
  var denom = denom1 * denom2;

  let min = 0; //최대공약수
  for (let i = 1; numer < denom ? i <= numer : i <= denom; i++) {
    if (numer % i == 0 && denom % i == 0) {
      min = i;
    }
  }

  return [numer / min, denom / min];
}

// 테스트 1 〉	통과 (2.24ms, 36.5MB)
// 테스트 2 〉	통과 (0.13ms, 33.5MB)
// 테스트 3 〉	통과 (0.13ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.14ms, 33.4MB)
// 테스트 6 〉	통과 (7.80ms, 36.4MB)
// 테스트 7 〉	통과 (0.38ms, 33.4MB)
// 테스트 8 〉	통과 (3.00ms, 36.4MB)
// 테스트 9 〉	통과 (2.79ms, 36.3MB)
// 테스트 10 〉	통과 (3.38ms, 36.3MB)
// 테스트 11 〉	통과 (0.05ms, 33.5MB)
// 테스트 12 〉	통과 (0.17ms, 33.5MB)
// 테스트 13 〉	통과 (0.16ms, 33.5MB)
// 테스트 14 〉	통과 (0.23ms, 33.5MB)
// 테스트 15 〉	통과 (0.24ms, 33.5MB)
