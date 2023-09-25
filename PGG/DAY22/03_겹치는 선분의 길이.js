// 겹치는 선분의 길이
// 선분 3개가 평행하게 놓여 있습니다. 세 선분의 시작과 끝 좌표가 [[start, end], [start, end], [start, end]] 형태로 들어있는 2차원 배열 lines가 매개변수로 주어질 때, 두 개 이상의 선분이 겹치는 부분의 길이를 return 하도록 solution 함수를 완성해보세요.

// lines가 [[0, 2], [-3, -1], [-2, 1]]일 때 그림으로 나타내면 다음과 같습니다.

	
function solution(lines) {
    let arr = [];
    let cnt = 0;
    
    lines.forEach(([x1, x2]) => {
        for(let i = x1; i < x2; i++) {
            arr.push(i.toString() + (i+1).toString());
        }
    });
    
    const filteredArray = arr.filter((v) => arr.indexOf(v) !== arr.lastIndexOf(v));
    return [...new Set(filteredArray)].length;
}

// 테스트 1 〉	통과 (0.78ms, 33.4MB)
// 테스트 2 〉	통과 (0.52ms, 33.4MB)
// 테스트 3 〉	통과 (0.09ms, 33.5MB)
// 테스트 4 〉	통과 (0.88ms, 33.6MB)
// 테스트 5 〉	통과 (0.22ms, 33.5MB)
// 테스트 6 〉	통과 (0.25ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)
// 테스트 8 〉	통과 (0.72ms, 33.5MB)
// 테스트 9 〉	통과 (0.33ms, 33.4MB)
// 테스트 10 〉	통과 (0.22ms, 33.4MB)
