// Complete the appendAndDelete function below.
function appendAndDelete(s, t, k) {
    if( s === t){
        return 'Yes'
    }
    let short = s.split('');
    let long = t.split('');
    let index
    let ans = 'No';
    let check = true

    if(s.length > t.length){
        short = t.split('');
        long = s.split('');
    } 

    for (let i = 0; i < short.length; i++){
        if( short[i] !== long[i]){
            index = i
            check = false
            break;
        }
    }
    if(check){
        index = short.length - 1;
    }
    let moves = (short.length - index) + (long.length - index);
    console.log(moves, short.length, long.length, index)
    if(moves === k){
        ans = 'Yes';
    }

    return ans

}

(()=>{
    s = 'hackerhappy';
    t = 'hackerrank';
    k = 9;
    console.log(appendAndDelete(s, t, k))
    })()