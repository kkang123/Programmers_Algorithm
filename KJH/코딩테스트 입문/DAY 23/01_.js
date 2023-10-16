// DAY 23
// 특이한 정렬

// 문제 설명
// 정수 n을 기준으로 n과 가까운 수부터 정렬하려고 합니다. 이때 n으로부터의 거리가 같다면 더 큰 수를 앞에 오도록 배치합니다. 정수가 담긴 배열 numlist와 정수 n이 주어질 때 numlist의 원소를 n으로부터 가까운 순서대로 정렬한 배열을 return하도록 solution 함수를 완성해주세요.

function solution(numlist, n) {
    return numlist.sort((a,b)=>{
        if(Math.abs(a-n)===Math.abs(b-n)) return b-a

        return Math.abs(a-n) - Math.abs(b-n)
    })
}

/*
테스트 1 〉	통과 (0.14ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.5MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	통과 (0.19ms, 33.4MB)
테스트 6 〉	통과 (0.19ms, 33.4MB)
테스트 7 〉	통과 (0.03ms, 33.5MB)
*/