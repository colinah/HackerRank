function checkMagazine (magazine, note) {
    // Need to go through each item of note and see if magazine contains an exact match and duplicate words if nessecary.





    //Print Yes or no if note can be written with magazine
    if(checker){
        console.log('YES');
    } else {
        console.log('NO')
    }
}

(()=>{
    const magazine = [ 'give', 'me', 'one', 'grand', 'today', 'night' ];
    const note = [ 'give', 'one', 'grand', 'today' ]
    checkMagazine (magazine, note)
})()