function minimumBribes(q) {
    let count = 0
    for(let i=0, isMoved = 0;i<q.length;i++){

        console.log('i boolean:' , i + 1 + isMoved , ' i:', i, ' isMoved: ' , isMoved)
        if(i + 1 + isMoved !== q[i]){ 
            console.log('i:' , i , 'In check')
            if(q[i] - i - 1 > 0) count += q[i] - i -1, isMoved = -(q[i]-i);
            if(q[i] - i + isMoved < 0) {
                if
            }
                
        } 
        if(isMoved < 0) isMoved++;
    }
    return count;
}

q = [1,4,3,2,5];
console.log('minimumBribes(q):' , minimumBribes(q) , ' ans:' , 2);