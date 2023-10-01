function solution(id_pw, db) {
    let answer = "fail"
    let [id, pw] = id_pw;
    for(let i = 0; i < db.length; i++){
        if(db[i][0] === id){
            if(db[i][1] === pw){
                answer = "login";
                break;
            }else{
                answer = "wrong pw";
                break;
            }
        }else{
            continue;
        }
    }
    return answer;
}
// 테스트 1 〉	통과 (0.08ms, 33.5MB)
// 테스트 2 〉	통과 (0.05ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.5MB)
// 테스트 4 〉	통과 (0.05ms, 33.6MB)
// 테스트 5 〉	통과 (0.05ms, 33.5MB)
// 테스트 6 〉	통과 (0.05ms, 33.5MB)
// 테스트 7 〉	통과 (0.05ms, 33.6MB)
// 테스트 8 〉	통과 (0.05ms, 33.5MB)