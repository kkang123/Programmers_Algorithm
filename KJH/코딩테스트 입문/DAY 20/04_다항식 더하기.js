// DAY 20
// 다항식 더하기

// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

function solution(polynomial) {
    polynomial = polynomial.replace(/\s+/g, '');

    let arr = polynomial.split("+");

    let xSum = 0;
    let sum = 0;

    arr.forEach((n) => {
        if (n.includes("x")) {
            let strVal = n.replace("x", "");
            if (strVal === "") {
                strVal = "1"; 
            }
            xSum += parseInt(strVal, 10);
        } else {
            sum += parseInt(n);
        }
    });

    let result = "";
    if (xSum !== 0) {
        if (xSum !== 1) {
            result += xSum;
        }
        result += "x";
    }
    if (sum !== 0) {
        if (xSum !== 0) {
            result += " + ";
        }
        result += sum;
    }

    return result;
}

/*
테스트 1 〉	통과 (0.18ms, 33.5MB)
테스트 2 〉	통과 (0.17ms, 33.6MB)
테스트 3 〉	통과 (0.17ms, 33.4MB)
테스트 4 〉	통과 (0.18ms, 33.4MB)
테스트 5 〉	통과 (0.17ms, 33.5MB)
테스트 6 〉	통과 (0.11ms, 33.5MB)
테스트 7 〉	통과 (0.13ms, 33.5MB)
테스트 8 〉	통과 (0.17ms, 33.4MB)
테스트 9 〉	통과 (0.18ms, 33.6MB)
테스트 10 〉	통과 (0.14ms, 33.5MB)
테스트 11 〉	통과 (0.11ms, 33.5MB)
테스트 12 〉	통과 (0.17ms, 33.6MB)
*/