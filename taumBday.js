function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let minCost, maxCost, minCount, maxCount, total;
    bc > wc ? (maxCost = bc, minCost = wc, minCount = w, maxCount = b) : (maxCost = wc, minCost = bc, minCount = b, maxCount = w)
    if ( minCost >= maxCost - z ){
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
    let b = 742407782  , w = 90529439, bc = 847666641, wc = 8651519, z =   821801924;
    console.log('taumBday(b, w, bc, wc, z):', taumBday(b, w, bc, wc, z))
})()


