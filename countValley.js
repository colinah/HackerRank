function countValley(s) {
    let arr = s.split('');
    let totalValley = 0;
    let elevation = 0;
    arr.map((el,i,ar) => {
        if(elevation === 0 && el === 'D'){
            totalValley += 1;
        }
        if(el === 'U'){
            elevation += 1;
        }
        if(el === 'D'){
            elevation -= 1;
        }
    })
    return totalValley;
}

(()=>{
    let s = 'UUUDDDDUUUUUD';
    console.log('countValley(s)',countValley(s));
})()