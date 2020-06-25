function countSwaps(a) {
    let count = 0;
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let k = a[j];
                let q = a[j+1];
                a[j] = q;
                a[j+1] = k;
                count++
            }
        }
    }
    console.log('Array is sorted in ', count , ' swaps.');
    console.log('First Element:', a[0]);
    console.log('Last Element:', a[a.length-1])
}
