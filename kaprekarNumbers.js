// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    let numbers = [];
    p === 1 ? numbers.push(1) : null;
    for(let i = p ; i < q; i++){
        let sq = i*i;
        let string = sq.toString()
        let left = +(string.slice(0,string.length - string.length/2));
        let right = +(string.slice(Math.ceil(string.length/2),string.length));
        
        if((right+left) === i){
            numbers.push(i)
        }
    }
    return numbers
}

(()=>{
let p =2, q= 1000;
console.log('kaprekarNumbers: ',kaprekarNumbers(p, q))
})()