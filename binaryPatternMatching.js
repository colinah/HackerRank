function binaryPatternMatching(pattern, s) {
    let sum = 0
    const vowel = ['a','e','i','o','u','y'];
    
    arrPattern = pattern.split('');
    
    sString = s.split('');
    
    stringPattern = sString.map(el => {
        if(vowel.includes(el)){
            return 1
        }
        return 0
    })

    let checker = (i) => {
        for(let j = 0; j < arrPattern.length; j++){
            if(Number(arrPattern[j]) !== stringPattern[i+j]){
                return 0
            }
        }
        return 1
    }

    for(let i = 0; i < stringPattern.length - arrPattern.length + 1; i++){
        sum += checker(i)
    }
    return sum
    
    
}

(()=>{
    let p = '010', s ='amazing';
    console.log(binaryPatternMatching(p, s))
})()