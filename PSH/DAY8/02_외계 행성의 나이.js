function solution(age) {
    var answer = '';
    let planetNum = 'a b c d e f g h i j k'.split(' ');
    let ageString = age.toString().split('')
    ageString.forEach((item, index, arr)=>{
        answer += planetNum[parseInt(item)];
    })
    return answer;
}

// 테스트 1 〉	통과 (0.06ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.06ms, 33.3MB)
// 테스트 4 〉	통과 (0.05ms, 33.4MB)
// 테스트 5 〉	통과 (0.06ms, 32.8MB)
// 테스트 6 〉	통과 (0.06ms, 32.9MB)