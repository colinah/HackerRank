// Hash Tables: Ice Cream Parlor



let whatFlavors = (cost, money) => {
    let result = [];
    let indexes = {}
    for(let i = 0; i < cost.length; i++){
        if(indexes[cost[i]]){
            indexes[cost[i]].push(i);
        } else {
            indexes[cost[i]] = [i];
        }

    }
    let costs = cost.sort((a,b)=> a-b)
    let maxIndex = costs.findIndex(el => el === money);
    l1:
    for(let i = 0; i < maxIndex; i++){
        for(let j = 0; j < maxIndex; j++){
            if((costs[i] + costs[j] === money) && i !== j){
                result = [indexes[costs[i]].shift() + 1,indexes[costs[j]].shift() + 1];
                break l1;
            }
        }
    }
    console.log(result.join(' '));
    return result
}





// let whatFlavors = (cost, money) => {
//     let indexes = [];
//     for(let i = 0; i < cost.length; i++){
//         indexes.push(i);
//     }

//     function getCombinations(arr) {
//         let result = [];
//         let f = function(prefix, arr) {
//           for (let i = 0; i < arr.length; i++) {
//             console.log('i:', i, ' result: ', result)
//             result.push(prefix + arr[i]);
//             f(prefix + arr[i], arr.slice(i + 1));
//           }
//         }
//         f('', arr);

//         return result;
//       }

//     let combos = getCombinations(indexes);
//     let result = [];
//     l1:
//     for(let i = 0; i < combos.length; i++){
//         let indexCombos = combos[i].split('').map(item => parseInt(item, 10));
//         let sum = 0;
//         l2:
//         for(let j = 0; j < indexCombos.length; j++){
//             sum += cost[indexCombos[j]];
//         }
//         if( sum === money) {
//             result = indexCombos;
//             break l1;
//         }
//     }
//     console.log(result.map(el => el+1).join(' '));
// }


    let cost = [2,2,3,4];
    let money = 4;
    let res = whatFlavors(cost, money)


