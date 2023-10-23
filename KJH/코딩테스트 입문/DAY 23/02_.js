// DAY 23
// 등수 매기기

// 문제 설명
// 영어 점수와 수학 점수의 평균 점수를 기준으로 학생들의 등수를 매기려고 합니다. 영어 점수와 수학 점수를 담은 2차원 정수 배열 score가 주어질 때, 영어 점수와 수학 점수의 평균을 기준으로 매긴 등수를 담은 배열을 return하도록 solution 함수를 완성해주세요.

function solution(score) {
  var answer = [];
  var rank_num = 1;
  for (let i = 0; i < score.length; i++) {
    for (let j = 0; j < score.length; j++) {
      if (score[i][0] + score[i][1] < score[j][0] + score[j][1]) {
        rank_num++;
      } else if (score[i][0] + score[i][1] == score[j][0] + score[j][1]) {
        continue;
      }
    }
    answer.push(rank_num);
    rank_num = 1;
  }

  return answer;
}

/*
테스트 1 〉	통과 (0.16ms, 33.5MB)
테스트 2 〉	통과 (0.24ms, 33.4MB)
테스트 3 〉	통과 (0.15ms, 33.5MB)
테스트 4 〉	통과 (0.05ms, 33.4MB)
테스트 5 〉	통과 (0.07ms, 33.4MB)
테스트 6 〉	통과 (0.05ms, 33.5MB)
테스트 7 〉	통과 (0.15ms, 33.4MB)
테스트 8 〉	통과 (0.15ms, 33.5MB)
테스트 9 〉	통과 (0.17ms, 33.6MB)
테스트 10 〉	통과 (0.16ms, 33.5MB)
테스트 11 〉	통과 (0.13ms, 33.5MB)
테스트 12 〉	통과 (0.17ms, 33.5MB)
*/
