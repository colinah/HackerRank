// Hash Tables: Ice Cream Parlor


let whatFlavors = (cost, money) => {
    indexes = [];
    for(let i = 0; i < cost.length; i++){
        indexes.push(i);
    }

    function getCombinations(arr) {
        let result = [];
        let f = function(prefix, arr) {
          for (let i = 0; i < arr.length; i++) {
            result.push(prefix + arr[i]);
            f(prefix + arr[i], arr.slice(i + 1));
          }
        }
        f('', arr);
        return result;
      }

    let combos = getCombinations(indexes);
    let result = [];
    l1:
    for(let i = 0; i < combos.length; i++){
        let indexCombos = combos[i].split('').map(item => parseInt(item, 10));
        let sum = 0;
        l2:
        for(let j = 0; j < indexCombos.length; j++){
            sum += cost[indexCombos[j]];
        }
        if( sum === money) {
            result = indexCombos;
            break l1;
        }
    }
    return result.map(el => el+1);''
}

(()=>{
    let cost = [1,4,5,3,2];
    let money = 5;
    console.log(whatFlavors(cost, money));
})()

