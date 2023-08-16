// 머쓱이는 추운 날에도 아이스 아메리카노만 마십니다. 아이스 아메리카노는 한잔에 5,500원입니다. 머쓱이가 가지고 있는 돈 money가 매개변수로 주어질 때, 머쓱이가 최대로 마실 수 있는 아메리카노의 잔 수와 남는 돈을 순서대로 담은 배열을 return 하도록 solution 함수를 완성해보세요.

function solution(money) {
    const coffee = Math.floor(money / 5500);
    const change = money % 5500 
    return [coffee, change]
}

// 테스트 1 〉	통과 (0.03ms, 33.6MB)
// 테스트 2 〉	통과 (0.03ms, 33.5MB)
// 테스트 3 〉	통과 (0.03ms, 32.9MB)
// 테스트 4 〉	통과 (0.03ms, 33.5MB)
// 테스트 5 〉	통과 (0.04ms, 33.4MB)