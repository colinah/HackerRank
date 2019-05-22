// Challenege found at https://www.hackerrank.com/challenges/closest-numbers/problem

// Complete the closestNumbers function below.
function closestNumbers(arr) {
    arr = arr.sort((a,b) => a-b)
    let diff, ans = [], min = 1000000000000;
    for( let i = 0, length = arr.length -1 ; i < length; i++){
        diff = Math.abs(arr[i] - arr[i+1]);
        diff === min ? (ans.push(arr[i],arr[i+1])) : diff < min ? (ans.length=0, ans.push(arr[i],arr[i+1]), min = diff) : null;
    }
    return ans
}

// Test Data
(()=>{
    let arr = ('-20 -3916237 -357920 -3620601 7374819 -7330761 30 6246457 -6461594 266854')
    .split(' ')
    .map((val) => +val);
    console.log('closestNumbers(arr): ' , closestNumbers(arr))
})()