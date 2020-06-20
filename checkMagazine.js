function checkMagazine (magazine, note) {
    // Need to go through each item of note and see if magazine contains an exact match and duplicate words if nessecary.   
    // Remove word from magazine to account for duplicates needed
    // Remove word from note to check it has been found, if note becomes length 0 then it passes
    // for(let i = 0; i < magazine.length;i++){
    //    let index = note.findIndex(el => el === magazine[i])
    //    if(index !== -1) {
    //        note.splice(index,1);
    //        magazine[i] = '';
    //    }
    //    if(note.length === 0) break;
    // }

    // //Print Yes or no if note can be written with magazine
    // console.log(note.length === 0 ? 'Yes' : 'No')

    // better solution below, learned that going through each array is faster time then doing nested loops, then idea
    // is to great a third array/object that can be used as an object to hold information containing the two other arrays,
    // then by checking this object you can see if it passes the checks.

    let list = { };
    let checker = true;
    for ( let i of magazine ) {
        list[i] = (list[i] || 0) + 1;
    }
    for ( var i of note ) {
        list[i] = (list[i] || 0) - 1;
    }
    for ( var i in list ) {
        if ( list[i] < 0 ) {
            checker = false;
            break;
        }
    }
    console.log(checker ? 'Yes' : 'No');
}

(()=>{
    const magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night', 'give' ];
    const note = [ 'give', 'one', 'grand1', 'today' ]
    checkMagazine (magazine, note)
})()