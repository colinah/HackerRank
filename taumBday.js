function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let min, max, total
    b > w ? (maxCost = bc, minCost = wc, minCount = w, maxCount = b) : (maxCost = wc, minCost = bc, minCount = b, maxCount = w)
    if ( minCost > maxCost - z ){
        //If it is more costly to convert the materials
        console.log('No convert')
        total = (b * bc) + (w * wc)
    } else {
        console.log('Convert')
         // If it is more efficent to convert the materials
         total =  (minCount * minCost) + (maxCount * minCost) + (maxCount * z)
    }
       return total;
}





(()=>{
    let b = 10 , w = 10, bc = 1, wc = 1, z = 1;
    console.log('taumBday(b, w, bc, wc, z):', taumBday(b, w, bc, wc, z))
})()
