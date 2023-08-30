// 대문자와 소문자
// 문자열 my_string이 매개변수로 주어질 때, 
// 대문자는 소문자로 소문자는 대문자로 변환한 문자열을 return하도록 solution 함수를 완성해주세요.

function solution(my_string) {
    let str = [...my_string];
    let arr = [];
    str.map((n,i) => {
        if (str[i] === str[i].toUpperCase()) {
		    arr.push(str[i].toLowerCase());
	    } else { 
		    arr.push(str[i].toUpperCase());
	    }
    });

    return arr.join('');
}

// 테스트 1 〉	통과 (0.16ms, 33.4MB)
// 테스트 2 〉	통과 (0.15ms, 33.4MB)
// 테스트 3 〉	통과 (0.16ms, 33.5MB)
// 테스트 4 〉	통과 (0.15ms, 33.5MB)
// 테스트 5 〉	통과 (0.39ms, 33.5MB)
// 테스트 6 〉	통과 (0.41ms, 33.5MB)
// 테스트 7 〉	통과 (0.41ms, 33.6MB)