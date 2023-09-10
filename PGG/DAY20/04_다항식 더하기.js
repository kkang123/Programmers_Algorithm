// 다항식 더하기
// 한 개 이상의 항의 합으로 이루어진 식을 다항식이라고 합니다. 다항식을 계산할 때는 동류항끼리 계산해 정리합니다. 덧셈으로 이루어진 다항식 polynomial이 매개변수로 주어질 때, 동류항끼리 더한 결괏값을 문자열로 return 하도록 solution 함수를 완성해보세요. 같은 식이라면 가장 짧은 수식을 return 합니다.

/* 실패...
function solution(polynomial) {
    let totalX=0;
    let totalZ=0;
    const regex = /x$/g;
    polynomial.split(' ').forEach(v => {
        if(v.match(regex)){
            if(!parseInt(v)){
                totalX+=1;
            }else{
                totalX+=parseInt(v);
            }
        }else if(v.match(/\d/g)){
            totalZ+=parseInt(v);
        }
    });
    
    if(totalZ ==0){
        return totalX+'x';
    }else{
        return totalX+'x + '+totalZ;
    }

}

테스트 1 〉	통과 (0.19ms, 33.5MB)
테스트 2 〉	통과 (0.28ms, 33.4MB)
테스트 3 〉	통과 (0.22ms, 33.5MB)
테스트 4 〉	통과 (0.22ms, 33.5MB)
테스트 5 〉	실패 (0.18ms, 33.4MB)
테스트 6 〉	실패 (0.16ms, 33.4MB)
테스트 7 〉	실패 (0.20ms, 33.5MB)
테스트 8 〉	실패 (0.23ms, 33.5MB)
테스트 9 〉	통과 (0.19ms, 33.4MB)
테스트 10 〉	실패 (0.14ms, 33.4MB)
테스트 11 〉	통과 (0.13ms, 33.5MB)
테스트 12 〉	실패 (0.18ms, 33.4MB)
*/


// x의 계수가 1인 경우 1x가 아닌 x로 표시해야함!
// 상수만 더할 경우 상수만 출력, 대신 String으로 바꿔줘야함!

function solution(polynomial) {
    let totalX=0;
    let totalZ=0;
    const regex = /x$/g;
    let ans;
    polynomial.split(' ').forEach(v => {
        if(v.match(regex)){
            if(!parseInt(v)){
                totalX+=1;
            }else{
                totalX+=parseInt(v);
            }
        }else if(v.match(/\d/g)){
            totalZ+=parseInt(v);
        }
    });
    
    if(totalX==1){
        ans = totalZ ==0? 'x': 'x + '+totalZ;
    }else if(totalX==0){
        ans = totalZ.toString();
    }else{
        ans = totalZ ==0? totalX+'x': totalX+'x + '+totalZ;
    }
    return ans;

}