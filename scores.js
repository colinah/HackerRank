function scores(arr) {
    let maxCount = 0, minCount = 0, max = arr[0], min = arr[0];
    for(let i = 0, len = arr.length; i < len; i++){
        if(arr[i] > max) max = arr[i], maxCount++;
        if(arr[i] < min) min = arr[i], minCount++;
    }
    return [maxCount,minCount]
}

(()=>{
    arr = [10,2,20,20,20,1,30]
    console.log('scores(arr)', scores(arr))
})()