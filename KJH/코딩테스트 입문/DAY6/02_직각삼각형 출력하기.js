// DAY6
// 직각삼각형 출력하기

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    res = ''
    for(i = 1; i <= Number(input[0]); i++){
        res += "*".repeat(i)  + "\n";
    }
    console.log(res);
});

/*
테스트 1 〉	통과 (51.74ms, 32.3MB)
테스트 2 〉	통과 (47.53ms, 32.3MB)
테스트 3 〉	통과 (45.15ms, 32.4MB)
테스트 4 〉	통과 (54.60ms, 32.2MB)
테스트 5 〉	통과 (49.50ms, 32.2MB)
테스트 6 〉	통과 (50.98ms, 32.3MB)
테스트 7 〉	통과 (57.87ms, 32.3MB)
테스트 8 〉	통과 (63.65ms, 32.3MB)
테스트 9 〉	통과 (49.26ms, 32.3MB)
테스트 10 〉	통과 (52.46ms, 32.3MB)
*/