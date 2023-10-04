function solution(dots) {
    let answer = 0;
    let lines = [];
    //경우의 수
    //a-b, c-d/ a-c,b-d / a-d, b-c//
    
    //선분만들기
    //경우의 수 만들기...
    for(let i = 1; i < dots.length; i++){
        let line1 = []
        let line2 = []
        line1 = [0,i];
        line2 = [1,2,3];
        line2.splice(line2.indexOf(i),1)//1,2,3중에 i빼고
        lines.push([line1, line2])
    }
    
    console.log(lines)
    
    let ms = [];
    lines.forEach((item, index, arr)=>{
        let p1 = item[0][0]
        let p2 = item[0][1]
        let p3 = item[1][0]
        let p4 = item[1][1]
        
        let d1x = dots[p1][0];
        let d1y = dots[p1][1];
        let d2x = dots[p2][0];
        let d2y = dots[p2][1];
        
        let d3x = dots[p3][0];
        let d3y = dots[p3][1];
        let d4x = dots[p4][0];
        let d4y = dots[p4][1];
        
        let xchange1 = d1x - d2x;
        let ychange1 = d1y - d2y;
        let m1 = ychange1 / xchange1;
        
        let xchange2 = d3x - d4x;
        let ychange2 = d3y - d4y;
        let m2 = ychange2 / xchange2;
        
        if(m1 == m2){
            answer = 1;
        }
    })
    return answer;
}