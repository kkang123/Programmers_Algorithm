const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = line.split(' ');
}).on('close', function () {
    // console.log(Number(input[0]));
    const n = Number(input[0]);
    let str = '';
    for(let i = 0 ; i < n; i++) {
        for(let j = 0 ; j <= i; j++) {
            str += '*';
        }
        str += '\n';
    }
    console.log(str);
});

// 테스트 1 〉	통과 (45.07ms, 32.3MB)
// 테스트 2 〉	통과 (49.62ms, 32.2MB)
// 테스트 3 〉	통과 (49.13ms, 32.3MB)
// 테스트 4 〉	통과 (43.31ms, 32.3MB)
// 테스트 5 〉	통과 (77.51ms, 32.2MB)
// 테스트 6 〉	통과 (58.65ms, 32.3MB)
// 테스트 7 〉	통과 (43.17ms, 32.3MB)
// 테스트 8 〉	통과 (73.41ms, 32.3MB)
// 테스트 9 〉	통과 (47.18ms, 32.3MB)
// 테스트 10 〉	통과 (46.75ms, 32.2MB)