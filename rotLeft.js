function rotLeft(a, d) {
    rotatedArr = [];
    rotatedArr.length = a.length;

    for(let i = 0; i <  a.length;i++){
        rotatedArr[i] = a[(i+d)%a.length];
    }
    return rotatedArr
}

let a = [1,2,3,4,5]; // [ 2,3,4,5,0,1 ]
let d = 4;
console.log(rotLeft(a,d));

