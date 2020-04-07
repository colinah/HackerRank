function taumBday(b, w, bc, wc, z) {
    // Write your code here
    let minCost, maxCost, minCount, maxCount, total;
    bc > wc ? (maxCost = bc, minCost = wc, minCount = w, maxCount = b) : (maxCost = wc, minCost = bc, minCount = b, maxCount = w)
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
    let b = 3 , w = 6, bc = 9, wc = 1, z = 1;
    console.log('taumBday(b, w, bc, wc, z):', taumBday(b, w, bc, wc, z))
})()
