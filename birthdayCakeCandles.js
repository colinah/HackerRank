// Complete the birthdayCakeCandles function below.
function birthdayCakeCandles(ar) {
    let newArr = ar
    let nnewArr = newArr.filter((el,ind,arr)=>{
        return el >= 7;
        console.log('sadfad')
    })
    return [nnewArr , ar]
    console.log('not going to be shown')
}

    (()=>{
        ar = [3,2,1,3,6,78,7,3,6,4,3,4,3,2,3]
        console.log(birthdayCakeCandles(ar))
    })()







