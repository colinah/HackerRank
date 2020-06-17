// Complete the hourglassSum function below.
function hourglassSum(arr) {
    //Find the maximum hourglass value in a given matrix.
    // example [1 2 3],[4,5,6],[7,8,9] hourglass = [1,2,3,5,7,8,9] total = 35
    // cycle for loop by top left corner hourglass end cycle -2 to stay in bounds of matrix
    // add to i index of forloop [0,0],[0,1],[0,2],[1,1],[2,0],[2,1],[2,2]
    // need checks if matrix is to small ie, 2x2 or smaller matrix
    // return only largest hourglass value -> only need to keep track of this value
    const cycles = arr.length - 2
    let max = null;

    //Calculat max of each hourglass
    for(let i = 0; i < cycles; i++){
        for(let j = 0;j < cycles;j++){
            let total = 0;
            total += arr[i + 0][j + 0];
            total += arr[i + 0][j + 1];
            total += arr[i + 0][j + 2];
            total += arr[i + 1][j + 1];
            total += arr[i + 2][j + 0];
            total += arr[i + 2][j + 1];
            total += arr[i + 2][j + 2];

            // Keeping track of max total of hourglasses
            if(max === null){
                max = total;
            } else if (total > max){
                max = total;
            }
        }
    }
    //return max hourglass value
    return max
}

(()=>{
    // const arr = [ [1,1,1,0,0,0],
    //         [0,1,0,0,0,0],
    //         [1,1,1,0,0,0],
    //         [0,0,2,4,4,0],
    //         [0,0,0,2,0,0],
    //         [0,0,1,2,4,0]];
    const arr = [[1,1,1],[1,2,1],[1,1,1]];
    console.log('hourglassSum: ' ,hourglassSum(arr));
})()
