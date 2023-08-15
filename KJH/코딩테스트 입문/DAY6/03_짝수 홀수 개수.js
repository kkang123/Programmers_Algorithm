// DAY6
// 짝수 홀수 개수

function solution(num_list) {
    total = [];
    even = [];
    odd = [];
    
    for(let i=0; i< num_list.length; i++){
        if(num_list[i] % 2 === 0){
        even.push(i);   
        } else{
            odd.push(i)
        }
    }
    
    
    total[0] = even.length;
    total[1] = odd.length;
    
    return total
}

/*
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.06ms, 33MB)
테스트 3 〉	통과 (0.15ms, 33MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.05ms, 33.5MB)
*/