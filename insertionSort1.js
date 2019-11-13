(()=>{
    let n = 5, arr = [2,4,6,8,1]; 
    console.log('insertionSort1(n, arr): ' , insertionSort1(n, arr))
})()

// Complete the insertionSort1 function below.
function insertionSort1(n, arr) {
    let val = arr[arr.length-1];
    for(let i = arr.length-1; i >= 0;i--){
        if(i === 0){
            arr[i] = val;
        } else if(arr[i-1] > val){
            arr[i] = arr[i-1];
        } else {
            arr[i] = val;
            console.log(arr.join(' '))
            break;
        }
        console.log(arr.join(' '))
    }
}

