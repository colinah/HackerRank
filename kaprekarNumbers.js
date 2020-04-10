// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    let numbers = [];
    let log = false
    for(let i = p ; i <= q; i++){
        let sq = i*i;
        let string = sq.toString()
        let left = +(string.slice(0,string.length - string.length/2));
        let right = +(string.slice(Math.floor(string.length/2),string.length));
        
        if((right+left) === i){
            numbers.push(i);
            log = true;
        }
    }
    if(log){
        console.log(numbers.join(' '));
    } else {
        console.log('INVALID RANGE')
    }

}

(()=>{
let p =1, q= 99999;
console.log('kaprekarNumbers: ',kaprekarNumbers(p, q))
})()