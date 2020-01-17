function migratoryBirds(arr) {
    let unique = [... new Set(arr)];
    let counts = []
    for(let i = 0; i < unique.length; i++){
        counts.push(0)
    }
    for(let i = 0; i < unique.length; i++){
        arr.map(el => {
            if(el === unique[i]){

                counts[i]++
            }
        })
    }

    let index = counts.indexOf(Math.max(...counts));

    return unique[index];
}

(()=>{
    let arr = [1,2,3,4,5,4,3,2,1,3,4]
    console.log('migratoryBirds(arr): ' , migratoryBirds(arr))
})()