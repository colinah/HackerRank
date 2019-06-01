// Original challenge found at
// https://www.hackerrank.com/challenges/jumping-on-the-clouds-revisited/problem

// Complete the jumpingOnClouds function below.
function jumpingOnClouds(c, k) {
    let count = 100;
    for(let i = 0; i < c.length; i+=k){
        count --;
        if(c[i] === 1){
            count -= 2;
        }
    }
    return count;
}

(()=>{
    let c = [0,0,1,0,0,1,1,0], k = 2; 
    console.log('jumpingOnClouds(c, k): ' , jumpingOnClouds(c, k))
})()