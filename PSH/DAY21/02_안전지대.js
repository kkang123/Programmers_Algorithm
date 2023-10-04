// 다음 그림과 같이 지뢰가 있는 지역과 지뢰에 인접한 위, 아래, 좌, 우 대각선 칸을 모두 위험지역으로 분류합니다.
// 지뢰는 2차원 배열 board에 1로 표시되어 있고 board에는 지뢰가 매설 된 지역 1과, 지뢰가 없는 지역 0만 존재합니다.
// 지뢰가 매설된 지역의 지도 board가 매개변수로 주어질 때, 안전한 지역의 칸 수를 return하도록 solution 함수를 완성해주세요.


function solution(board) {
    let answer = 0;
    if(board.filter(v=>v.includes(0)).length==0){return 0;}
// -----------  ------------
    let positionDanger = [];
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] === 1){
                //폭탄위치를 찾으면
                for(let k = i-1; k <= i+1; k++){
                    for(let h = j-1; h <= j+1; h++){
                        if(k >= 0 && h >= 0 && k < board.length && h <board.length){
                            positionDanger.push(`${k}, ${h}`)
                            //폭탄 주변 위치를 저장
                        }
                    }
                }
            }
        }
    }
    
    //폭탄 주변 위치 중복제거..
    positionDanger = [...new Set(positionDanger)]
    // [
    //   '2, 1', '2, 2',
    //   '2, 3', '3, 1',
    //   '3, 2', '3, 3',
    //   '4, 1', '4, 2',
    //   '4, 3', '2, 4',
    //   '3, 4', '4, 4'
    // ]    
    
    //주변 위치 위험하다고 표시하기
    positionDanger.forEach((item,index)=>{
        let i = item[0];
        let j = item[3];
        board[i][j] = 1;
    })
    
    //안 위험한 위치 개수 뽑기..
    for(let i = 0; i<board.length; i++){
        for(let j = 0; j<board[i].length; j++){
            if(board[i][j] === 0){
                //안위험하면
                answer ++;                
            }
        }
    }
    return answer;
}

// 테스트 1 〉	통과 (0.26ms, 33.5MB)
// 테스트 2 〉	통과 (0.33ms, 33.5MB)
// 테스트 3 〉	통과 (0.25ms, 33.5MB)
// 테스트 4 〉	통과 (0.29ms, 33.5MB)
// 테스트 5 〉	통과 (0.23ms, 33.5MB)
// 테스트 6 〉	통과 (0.34ms, 33.4MB)
// 테스트 7 〉	통과 (0.27ms, 33.6MB)
// 테스트 8 〉	통과 (0.14ms, 33.5MB)
// 테스트 9 〉	통과 (0.09ms, 33.6MB)
// 테스트 10 〉	통과 (0.17ms, 33.6MB)
// 테스트 11 〉	통과 (0.19ms, 33.5MB)
// 테스트 12 〉	통과 (0.34ms, 33.6MB)
// 테스트 13 〉	통과 (0.37ms, 33.5MB)
// 테스트 14 〉	통과 (0.10ms, 33.5MB)