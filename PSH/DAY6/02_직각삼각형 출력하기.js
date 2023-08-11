const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    let answer = '';
    let add = '';
    for(let i = 0; i < input[0]; i++){
        add += '*'
        answer += add + '\n'
    }
    console.log(answer)
});

// 테스트 1 〉	통과 (45.62ms, 32.2MB)
// 테스트 2 〉	통과 (43.21ms, 32.2MB)
// 테스트 3 〉	통과 (55.97ms, 32.2MB)
// 테스트 4 〉	통과 (49.70ms, 32.2MB)
// 테스트 5 〉	통과 (45.57ms, 32.4MB)
// 테스트 6 〉	통과 (44.84ms, 32.3MB)
// 테스트 7 〉	통과 (50.97ms, 32.2MB)
// 테스트 8 〉	통과 (46.11ms, 32.3MB)
// 테스트 9 〉	통과 (42.44ms, 32.2MB)
// 테스트 10 〉	통과 (56.04ms, 32.2MB)