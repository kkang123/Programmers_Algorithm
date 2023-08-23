function solution(box, n) {
    let width = box[0];
    let height = box[1];
    let depth = box[2];
        
    return parseInt(width/n) * parseInt(height/n) * parseInt(depth/n);
}

// 테스트 1 〉	통과 (0.04ms, 33.5MB)
// 테스트 2 〉	통과 (0.04ms, 33.6MB)
// 테스트 3 〉	통과 (0.04ms, 33.5MB)
// 테스트 4 〉	통과 (0.04ms, 33.5MB)