function twoStrings(s1, s2) {
    let ar1 = [... new Set(s1.split(''))];
    let ar2 = [... new Set(s2.split(''))];
    let ans = "NO"


    for(let i = 0, len = ar1.length; i<len;i++){
        if(ar2.includes(ar1[i])){
            return ans = 'YES'
        }
    }

    return ans
    }


    s1 = 'hello';
    s2 = 'world';
console.log('twoStrings:' , twoStrings(s1,s2)); // YES