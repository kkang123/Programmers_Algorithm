// 정수 배열 num_list와 정수 n이 매개변수로 주어집니다. num_list를 다음 설명과 같이 2차원 배열로 바꿔 return하도록 solution 함수를 완성해주세요.

// num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

function solution(num_list, n) {
  const result = [];
  let newArr = [];

  for (let i = 0; i < num_list.length; i++) {
    const item = num_list[i];
    newArr.push(item);
    if (newArr.length === n) {
      result.push(newArr);
      newArr = [];
    }
  }
  return result;
}

// 테스트 1 〉	통과 (0.12ms, 33MB)
// 테스트 2 〉	통과 (0.11ms, 33.4MB)
// 테스트 3 〉	통과 (0.13ms, 32.8MB)
// 테스트 4 〉	통과 (0.11ms, 33.4MB)
// 테스트 5 〉	통과 (0.11ms, 33.5MB)
// 테스트 6 〉	통과 (0.11ms, 33.4MB)
// 테스트 7 〉	통과 (0.11ms, 33.6MB)
