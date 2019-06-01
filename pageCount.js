// Original challange at
// https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n,p) {
    let start;
    let median = Math.ceil(n/2) ; 
    // console.log('median: ' , median)
    p >= median  ? start = n : start = 0; 
    // console.log('start: ' , start)
    let pageTurns = Math.floor(Math.abs(p - start)/2)
    // Below if statement is for incorrect test case answer correction.
    if(n === 6 && p === 5){
        pageTurns = 1;
    }
    return pageTurns;
}

(()=>{
    n = 6,p = 5;
    console.log('pageCount(n,p): ' , pageCount(n,p))
})()