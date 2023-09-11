// 머쓱이는 RPG게임을 하고 있습니다. 게임에는 up, down, left, right 방향키가 있으며 각 키를 누르면 위, 아래, 왼쪽, 오른쪽으로 한 칸씩 이동합니다. 예를 들어 [0,0]에서 up을 누른다면 캐릭터의 좌표는 [0, 1], down을 누른다면 [0, -1], left를 누른다면 [-1, 0], right를 누른다면 [1, 0]입니다. 머쓱이가 입력한 방향키의 배열 keyinput와 맵의 크기 board이 매개변수로 주어집니다. 캐릭터는 항상 [0,0]에서 시작할 때 키 입력이 모두 끝난 뒤에 캐릭터의 좌표 [x, y]를 return하도록 solution 함수를 완성해주세요.
// [0, 0]은 board의 정 중앙에 위치합니다. 예를 들어 board의 가로 크기가 9라면 캐릭터는 왼쪽으로 최대 [-4, 0]까지 오른쪽으로 최대 [4, 0]까지 이동할 수 있습니다.

function solution(keyinput, board) {
    let answer = [0, 0];
    let px = 0, py = 0;
    
    const width = (board[0] - 1) / 2;
    const height = (board[1] - 1) / 2;
    
    const direction = ['left', 'right', 'up', 'down'];
    const moves = [[-1,0], [1,0], [0,1], [0,-1]];
    
    keyinput.forEach(k=>{
        let move = moves[direction.indexOf(k)];
        let [dx, dy] = [...move];
        
        if( k === 'left' && px > width * (-1) ){
            px += dx;
        }else if( k === 'right' && px < width ){
            px += dx;
        }
        
        if( k === 'up' && py < height){
            py += dy;
        }else if (k === 'down' && py > height * (-1) ){
            py += dy;
        }
    })
    
    answer = [px, py]
    return answer;
}

// 테스트 1 〉	통과 (0.20ms, 33.4MB)
// 테스트 2 〉	통과 (0.06ms, 33.4MB)
// 테스트 3 〉	통과 (0.24ms, 33.5MB)
// 테스트 4 〉	통과 (0.11ms, 33.5MB)
// 테스트 5 〉	통과 (0.12ms, 33.5MB)
// 테스트 6 〉	통과 (0.10ms, 33.3MB)
// 테스트 7 〉	통과 (0.21ms, 33.4MB)
// 테스트 8 〉	통과 (0.21ms, 33.4MB)
// 테스트 9 〉	통과 (0.21ms, 33.4MB)
// 테스트 10 〉	통과 (0.10ms, 33.4MB)
// 테스트 11 〉	통과 (0.14ms, 33.3MB)