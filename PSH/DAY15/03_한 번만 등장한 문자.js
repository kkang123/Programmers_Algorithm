// 문자열 s가 매개변수로 주어집니다. s에서 한 번만 등장하는 문자를 사전 순으로 정렬한 문자열을 return 하도록 solution 함수를 완성해보세요. 한 번만 등장하는 문자가 없을 경우 빈 문자열을 return 합니다.

function solution(s) {
    var answer = '';
    let count = 1;
    let countArr = [];
    
    //s를 쪼개서 사전순으로 정렬한 배열을 순회
    s.split('').sort().forEach((v,i,arr)=>{
        if(v == arr[i+1]){ //뒤에랑 같으면 count++
            count++;
        }else{ //다르면 == 이제 바뀜
            let mode = {
                alphabet: v,
                count: count
            }
            countArr.push(mode);
            count = 1;
        }
    })
    
    return countArr.filter(v=>v.count==1).map(v=>v.alphabet).join('');
}

// 테스트 1 〉	통과 (0.21ms, 33.4MB)
// 테스트 2 〉	통과 (0.21ms, 33.5MB)
// 테스트 3 〉	통과 (0.21ms, 33.6MB)
// 테스트 4 〉	통과 (0.25ms, 33.5MB)
// 테스트 5 〉	통과 (0.21ms, 33.5MB)
// 테스트 6 〉	통과 (0.13ms, 33.5MB)
// 테스트 7 〉	통과 (0.28ms, 33.5MB)
// 테스트 8 〉	통과 (0.11ms, 33.4MB)
// 테스트 9 〉	통과 (0.11ms, 33.5MB)
// 테스트 10 〉	통과 (0.21ms, 33.5MB)