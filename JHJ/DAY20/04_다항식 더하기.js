// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
  let xSum = 0;
  let numSum = 0;

  polynomial.split(" + ").forEach((v, i) => {
    if (v.endsWith("x")) {
      let replace = Number(v.replace("x", ""));
      xSum += replace === 0 ? 1 : replace;
    } else {
      numSum += Number(v);
    }
  });

  xSum === 1 ? (xSum = "") : xSum;

  return (
    (xSum === 0 ? "" : xSum + "x") +
    (xSum !== 0 && numSum !== 0 ? " + " : "") +
    (numSum === 0 ? "" : numSum)
  );
}

// 테스트 1 〉	통과 (0.08ms, 33.4MB)
// 테스트 2 〉	통과 (0.08ms, 33.4MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.08ms, 33.3MB)
// 테스트 5 〉	통과 (0.07ms, 33.3MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)
// 테스트 7 〉	통과 (0.07ms, 33.4MB)
// 테스트 8 〉	통과 (0.07ms, 33.4MB)
// 테스트 9 〉	통과 (0.08ms, 33.4MB)
// 테스트 10 〉	통과 (0.07ms, 33.3MB)
// 테스트 11 〉	통과 (0.07ms, 33.4MB)
// 테스트 12 〉	통과 (0.07ms, 33.4MB)
