function solution(array) {
    if (array.length === 1) return array[0];
    
    array.sort();
    let count = 1;
    let countArr = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] == array[i+1]){
            count++;
        }else{
            let mode = {
                num : array[i],
                count : count
            }
            countArr.push(mode);
            count = 1;
        }
    }

    countArr.sort((a,b)=> b.count - a.count)

    if(countArr[0].count == countArr[1].count){
        return -1;
    }else{
        return countArr[0].num;
    } 
        
    
}

// 테스트 1 〉	통과 (0.09ms, 33.6MB)
// 테스트 2 〉	통과 (0.24ms, 33.4MB)
// 테스트 3 〉	통과 (0.25ms, 33.5MB)
// 테스트 4 〉	통과 (0.30ms, 33.5MB)
// 테스트 5 〉	통과 (0.18ms, 33.5MB)
// 테스트 6 〉	통과 (0.08ms, 33.6MB)
// 테스트 7 〉	통과 (0.08ms, 33.5MB)
// 테스트 8 〉	실패 (런타임 에러)
// 테스트 9 〉	실패 (런타임 에러)
// 테스트 10 〉	통과 (0.05ms, 33.5MB)
// 테스트 11 〉	통과 (0.09ms, 33.5MB)
// 테스트 12 〉	통과 (0.19ms, 33.4MB)
// 테스트 13 〉	통과 (0.20ms, 33.5MB)
// 테스트 14 〉	통과 (0.22ms, 33.5MB)
// 테스트 15 〉	통과 (0.20ms, 33.5MB)
// 테스트 16 〉	통과 (0.24ms, 33.5MB)