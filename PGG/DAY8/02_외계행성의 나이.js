/*
처음에 하려고 한 방법
function solution(age) {
    const alp = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';
    const alphabet = alp.split();
    let sp_age = [];
    let ans = '';
    
    for (let i =0 ; i<age.length; i++){
        sp_age.push(age.substr(i));
    }
    for (let i =0 ; i<age.length; i++){
        ans += alphabet[sp_age[i]];
    }
    return ans;
}

*/

function solution(age) {
    
    let alpha = {
        0 : "a",
        1 : "b",
        2 : "c",
        3 : "d",
        4 : "e",
        5 : "f",
        6 : "g",
        7 : "h",
        8 : "i",
        9 : "j"
    }
    
    let ansAge = age + "";
    
    return ansAge.split("").map((element) => alpha[element]).join("");
}


// 테스트 1 〉	통과 (0.06ms, 33.5MB)
// 테스트 2 〉	통과 (0.09ms, 33.6MB)
// 테스트 3 〉	통과 (0.06ms, 33.4MB)
// 테스트 4 〉	통과 (0.05ms, 33.5MB)
// 테스트 5 〉	통과 (0.08ms, 33.5MB)
// 테스트 6 〉	통과 (0.07ms, 33.4MB)