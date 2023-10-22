// DAY3
// 최빈값 구하기

function solution(array) {
    // array의 최댓값만큼의 길이를 가진 새로운 배열 생성
    let newArray = new Array(Math.max(...array)+1).fill(0);
    // array 반복문을 통해, 해당 값에 해당하는 index의 값 += 1
    for (let i = 0; i < array.length; i++) {
        newArray[array[i]] += 1
    }
    // newArray의 최댓값에 해당 하는 index 출력
    // 만약 indexOf와 lastIndexOf가 지칭하는 값이 같으면, -1 출력 (중복인 경우 확인)
    if (newArray.indexOf(Math.max(...newArray)) !== newArray.lastIndexOf(Math.max(...newArray))) {
        return -1
    } else {
        return newArray.indexOf(Math.max(...newArray));
    };
}

/*
테스트 1 〉	통과 (0.06ms, 33.4MB)
테스트 2 〉	통과 (0.17ms, 33.6MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.08ms, 33.4MB)
테스트 6 〉	통과 (0.08ms, 33.4MB)
테스트 7 〉	통과 (0.07ms, 33.5MB)
테스트 8 〉	통과 (0.16ms, 33.4MB)
테스트 9 〉	통과 (0.05ms, 33.4MB)
테스트 10 〉	통과 (0.07ms, 33.5MB)
테스트 11 〉	통과 (0.05ms, 33.6MB)
테스트 12 〉	통과 (0.16ms, 33.5MB)
테스트 13 〉	통과 (0.15ms, 33.4MB)
테스트 14 〉	통과 (0.16ms, 33.5MB)
테스트 15 〉	통과 (0.24ms, 33.5MB)
테스트 16 〉	통과 (0.24ms, 33.4MB)
*/