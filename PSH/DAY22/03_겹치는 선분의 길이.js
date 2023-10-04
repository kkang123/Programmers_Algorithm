function solution(lines) {
    // [[0, 1], [2, 5], [3, 9]]
    //	[0 1 2 5 3 9] 
    const start = Math.min(...lines.flat())
    const end = Math.max(...lines.flat())
    
    //	9-0 만큼의 크기의 array인 lst를 만듦
    const lst = [...Array(end-start)].fill(0)    
    
    //	[[0, 1], [2, 5], [3, 9]] 를 순환하면서..
    lines.forEach(el => {
        //el = [0,1]
        for(let i=el[0];i<el[1];i++){ 
	        //<=가 아니라 <인 이유는 
					//[0,1]은 길이가 1인 선분인데, 
					//[0] +1 [1] +1 하면 길이가 2가 되어서..    
					lst[i-start]+=1
        }
    })
    return lst.reduce((a,c)=> c>1 ? a+1 : a ,0)
}
// 테스트 1 〉	통과 (0.19ms, 33.6MB)
// 테스트 2 〉	통과 (0.17ms, 33.5MB)
// 테스트 3 〉	통과 (0.08ms, 33.4MB)
// 테스트 4 〉	통과 (0.18ms, 33.5MB)
// 테스트 5 〉	통과 (0.17ms, 33.5MB)
// 테스트 6 〉	통과 (0.17ms, 33.4MB)
// 테스트 7 〉	통과 (0.08ms, 33.4MB)
// 테스트 8 〉	통과 (0.19ms, 33.4MB)
// 테스트 9 〉	통과 (0.17ms, 33.4MB)
// 테스트 10 〉	통과 (0.16ms, 33.4MB)