function kangaroo(x1, v1, x2, v2) {
    if(v1 === v2 || v2 > v1){
        return 'NO'
    } else {
        let diff = x2-x1
        let velDiff = Math.abs(v2-v1);
        if(diff % velDiff === 0){
            return 'YES'
        } else {
            return 'NO'
        }
    }

}

(()=>{
    const x1 = 0,
        v1 = 2,
        x2 = 5,
        v2 = 3;

    console.log('kangaroo: ' ,kangaroo(x1, v1, x2, v2) )
})()