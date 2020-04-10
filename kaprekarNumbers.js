// Complete the kaprekarNumbers function below.
function kaprekarNumbers(p, q) {
    let numbers = [];
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
let p =1, q= 100;
kaprekarNumbers(p, q)
})()