function quickSort(arr) {
    let divider = arr[0];
    let arrMiddle = [];
    let arrLeft = [];
    let arrRight = [];
    for(let i = 0; i < arr.length ; i++){
        if(arr[i] === divider){
            arrMiddle.push(arr[i]);
        } else if(arr[i] > divider){
            arrRight.push(arr[i]);
        } else if(arr[i] < divider){
            arrLeft.push(arr[i])
        }
    }
}