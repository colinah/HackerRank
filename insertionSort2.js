// Complete the insertionSort2 function below.
function insertionSort2(n, arr) {
    let shift
    for(let i = 1 ; i < arr.length; i++){
        for(let j = 0; j < i; j++){
            if(arr[i] < arr[j]){
              shift =  arr.splice(i,1)
              arr.splice(j,0,shift) 
            }
        }
        console.log(arr.join(' '))
    }
}

(() => {
    let n = 5, arr = [3,4,7,5,6,2,1]
    insertionSort2(n,arr)
})()
