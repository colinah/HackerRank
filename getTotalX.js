function getTotalX(a, b) {
    // Get largest value in array
    let max = Math.max(...a,...b);
    // Calculate factors
    const calcFactors = number => Array
    .from(Array(number + 1), (_, i) => i)
    .filter(i => number % i === 0)
    // Set up array
    let arr = [...a,...b];
    let values = []
    maxFactors = calcFactors(max);
    
    for(let i = 1; i < maxFactors.length; i++){
        let Boolean = true
        l2:
        for(let j = 0; j < arr.length;j++){
            if(maxFactors[i]%arr[j] === 0 || arr[j]%maxFactors[i] === 0){

            } else {
                Boolean = false
                break l2;
            }
        }
        if(Boolean){
            values.push(maxFactors[i])
        }

    }
    return values


}

(()=>{
    let a = [2,4]
    let b = [16,32,96]
    console.log('getTotalx: ' , getTotalX(a,b));
})()