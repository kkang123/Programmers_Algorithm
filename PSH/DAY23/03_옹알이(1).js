function solution(babbling) {
    var answer = 0;
    let capability = [
        'aya',
        'ye',
        'woo',
        'ma'
    ]
    
    babbling.forEach((v,i)=>{
        if(!inspection(v)){ //값이 남아있지 않으면 발음할 수 없는게 없다는 뜻~
            answer++;
        }
    })
    
    //str을 넣어주면
    function inspection (str) {
        //가능한 발음이 들어간 배열을 돌려서
        capability.forEach((iv,ii)=>{
            //str안에 든 가능한 발음을 빼버림
            str = str.split(iv).join(',')
        })
        return str.split(',').join('')
    }
    
    return answer;
}

//테스트 1 〉	통과 (0.27ms, 33.5MB)
// 테스트 2 〉	통과 (0.46ms, 33.5MB)
// 테스트 3 〉	통과 (0.41ms, 33.4MB)
// 테스트 4 〉	통과 (0.41ms, 33.5MB)
// 테스트 5 〉	통과 (0.40ms, 33.5MB)
// 테스트 6 〉	통과 (0.32ms, 33.4MB)
// 테스트 7 〉	통과 (0.37ms, 33.4MB)
// 테스트 8 〉	통과 (0.43ms, 33.5MB)
// 테스트 9 〉	통과 (0.27ms, 33.5MB)
// 테스트 10 〉	통과 (0.26ms, 33.5MB)
// 테스트 11 〉	통과 (0.20ms, 33.5MB)
// 테스트 12 〉	통과 (0.10ms, 33.4MB)
// 테스트 13 〉	통과 (0.12ms, 33.5MB)
// 테스트 14 〉	통과 (0.12ms, 33.5MB)
// 테스트 15 〉	통과 (0.20ms, 33.5MB)
// 테스트 16 〉	통과 (0.20ms, 33.6MB)
// 테스트 17 〉	통과 (0.20ms, 33.4MB)