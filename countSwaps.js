// Original Challenge found at https://www.hackerrank.com/challenges/ctci-bubble-sort/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=sorting


// Complete the countSwaps function below.
function countSwaps(a) {
    //Function teaching friend to code, this was is solution to swap elements
    function swap(index){
        const num1 = a[index];
        const num2 = a[index + 1];
        a[index]= num2;
        a[index + 1]= num1;
    }
    let count = 0;
    for (let i = 0; i < a.length; i++) {

        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                swap(j);
                count++

            }
        }
    }
console.log('Array is sorted in ' , count , ' swaps.')
console.log('First Element:' , a[0]);
console.log('Last Element:' , a[a.length-1])
}

    

// Array is sorted in 0 swaps.
// First Element: 1
// Last Element: 3
(()=>{
    let a = [6,4,1];
    countSwaps(a);
})()