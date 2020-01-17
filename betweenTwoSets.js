function getTotalX(a, b) {
//  aSet = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
//    ans = aSet.filter(el => {
//         return (el%a[0] === 0 && el%a[1]=== 0 && el % b[0] === 0 && el % b[1] === 0)
//     })
//     return ans
let total = 0; let maxA = Math.max(...a); let minB = Math.min(...b); let number = maxA;
let allElementsAreMultiple = false;
let numberIsMultipleOfAll  = false;

while(number <= minB){
    console.log('aMax ', maxA,'bMin ', minB, 'number ', number);
    // Every element of array  must be a multiple of considerd number
    allElementsAreMultiple = a.every(ele => number%ele === 0 );
    numberIsMultipleOfAll  = b.every(ele => ele%number === 0 );
    if( allElementsAreMultiple && numberIsMultipleOfAll )
        total++;
    number++;
}

return total;
}

(()=>{
a = [2,3];
b = [2,4];
console.log(getTotalX(a, b))
})()