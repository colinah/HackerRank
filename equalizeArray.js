function equalizeArray(arr) {
    let a = [... new Set(arr)]
    let b = new Array(a.length-1).fill(0);
    arr.map(el => {
        b[a.indexOf(el)]++
    })
    return b
    
    }
let arr = [3,3,2,1,3]
    console.log(equalizeArray(arr))