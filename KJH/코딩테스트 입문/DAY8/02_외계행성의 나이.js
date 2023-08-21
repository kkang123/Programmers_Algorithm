// DAY 8
// 외계행성의 나이

function solution(age) {
    let arr =
        {
            0 : 'a',
            1 : 'b',
            2 : 'c',
            3 : 'd',
            4 : 'e',
            5 : 'f',
            6 : 'g',
            7 : 'h',
            8 : 'i',
            9 : 'j'
        }
    
    let newArr = age.toString();
    
    return newArr.split("").map(v => arr[v]).join("");
}

/*
테스트 1 〉	통과 (0.06ms, 33.5MB)
테스트 2 〉	통과 (0.06ms, 33.5MB)
테스트 3 〉	통과 (0.09ms, 33.6MB)
테스트 4 〉	통과 (0.06ms, 33.4MB)
테스트 5 〉	통과 (0.06ms, 33.5MB)
테스트 6 〉	통과 (0.06ms, 33.4MB)
*/